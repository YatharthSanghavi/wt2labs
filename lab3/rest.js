function calsum(...a){
    let ans=0;
    for(let i=0;i<a.length;i++){
        ans+=a[i];
    }
    console.log(ans);
}

calsum(12,12,34,23,45)