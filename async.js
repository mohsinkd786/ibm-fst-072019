const getUsers = () =>{
    const _url = 'https://reqres.in/api/users?page=1';
    // get data from server
    /*
    const res = await fetch(_url);
    const result = await res.json();
    console.log(result.data);  */  
    console.log('Hello');

    fetch(_url,{
        method: 'GET'
    })
    .then(res=>res.json())
    .then((result)=>{
        console.log(result.data);
    })
}
getUsers();