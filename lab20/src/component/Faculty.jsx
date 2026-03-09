import React, { useEffect, useState } from 'react'

const Faculty = () => {
    const url = "http://localhost:3000/faculty";
    const [faculties,setFaculties] = useState([]);
    const [formData,setFormData] = useState({
        id:"",
        name:"",
    });
    const [editId,seteditId]= useState(null)

    //read
    const fetchfaculties=async () =>{
        const res = await fetch(url);
        const data = await res.json();
        setFaculties(data);
    }

    useEffect(()=>{
        fetchfaculties();
    },[])

    // handle input
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //create
    const handleSubmit=async (e)=>{
      e.preventDefault()
      if(editId){
        await fetch(`${url}/${editId}`,{
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        seteditId(null)
      }else{
        await fetch(url,{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      }
      setFormData({ id:"", name: "" });
      fetchfaculties();
    }

    const handleDelete=async(id)=>{
      await fetch(`${url}/${id}`,{method:"DELETE"});
      fetchfaculties()
    }

    const handleEdit=(faculty)=>{
      setFormData({
        id:faculty.id,
        name:faculty.name
      })
      seteditId(faculty._id)
    }
    
    return (
        <>
            <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>
              <h2>Faculty Management</h2>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  name="id"
                  placeholder="Enter faculty id"
                  value={formData.id}
                  onChange={handleChange}
                  required
                  style={{ padding: "7px", marginRight: "10px" }}
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter faculty name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ padding: "8px", marginRight: "10px" }}
                />


                <button type="submit">
                  {editId ? "Update Faculty" : "Add Faculty"}
                </button>
              </form>

              <table border="1" width="100%" cellPadding="10">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Faculty Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {console.log(faculties)}
                  {faculties.map((f) => (
                    <tr key={f.id}>
                      <td>{f.id}</td>
                      <td>{f.name}</td>
                      <td>
                        <button onClick={() => handleEdit(f)}>Edit</button>
                        <button
                          onClick={() => handleDelete(f._id)}
                          style={{ marginLeft: "10px", color: "red" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </>
    )
}

export default Faculty