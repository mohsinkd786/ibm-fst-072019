const getUsers = () =>{
    const _url = 'https://reqres.in/api/users?page=3';
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
        let rows = '';
        result.data.forEach((u)=>{
            rows += `<tr>
                        <th>${u.first_name}</th>
                        <th>${u.email}</th>
                        <th><img src="${u.avatar}" /></th>
                    </tr>`
        });
        document.getElementById('users').innerHTML = `<table>
                                                            <tr>
                                                                <th>NAME</th>
                                                                <th>EMAIL</th>
                                                                <th></th>
                                                            </tr>
                                                            ${rows}
                                                        </table>`;         
    })
}