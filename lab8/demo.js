const fs = require('fs');
const { json } = require('stream/consumers');

async function streamResponse(prompt) {
  const response = await fetch(
    'https://api.amarsia.com/v1/runner/fef6ef34-3c78-461b-8a14-fb89fca7e473',
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'pi_Q9y5Xey2MUUzXm4ZjLxmg1jRdnLBGHThkYUGLPkw',
            },
            body: JSON.stringify({
            content: [{
                type: 'text',
                text: prompt
            }]
            })
        }
    );
const result = await response.json();   // outer JSON object

// 1. Extract content string correctly
let content = result.content;

// 2. Remove markdown code fences
const cleanedContent = content
  .replace(/^```json\s*/i, "")
  .replace(/```$/i, "")
  .trim();

// 3. Parse inner JSON
const parsedData = JSON.parse(cleanedContent);

// 4. Build final object to store EVERYTHING
const finalData = {
  meta: {
    model: result.model,
    input_tokens: result.input_tokens,
    output_tokens: result.output_tokens
  },
  raw_response: result,          // original API response
  cleaned_content: cleanedContent,
  parsed_content: parsedData
};

// 5. Save to JSON file
fs.writeFileSync(
  "full_response.json",
  JSON.stringify(finalData, null, 2),
  "utf-8"
);

fs.writeFileSync("text.json",jsonstr);

}

streamResponse("create a databse for hospital management project")