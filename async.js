// list the users
const getUsers = () =>{
    const _url = 'http://dummy.restapiexample.com/api/v1/employees';
    fetch(_url,{
        method: 'GET'
    })
    .then(res=>res.json())
    .then((result)=>{
        let rows = '';
        console.log(result);
        result.forEach((u)=>{
            rows += `<tr>
                        <th>${u.employee_name}</th>
                        <th>${u.employee_salary}</th>
                        <th><img src="${u.profile_image}" /></th>
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
//create a new user
const createUser = ()=>{
    const _url = 'http://dummy.restapiexample.com/api/v1/create'
    fetch(_url,{
        method: 'POST',
        body: JSON.stringify( {
            name: document.getElementById('name').value,
            salary: document.getElementById('salary').value,
            age: document.getElementById('age').value
        })
    }).catch(e=>{
        console.log(e);
    });
}
// modify an existing user
const updateUser = ()=>{
    const _url = 'http://dummy.restapiexample.com/api/v1/update/6661'
    fetch(_url,{
        method: 'PUT',
        body: JSON.stringify( {
            name: document.getElementById('name').value,
            salary: document.getElementById('salary').value,
            age: document.getElementById('age').value
        })
    }).catch(e=>{
        console.log(e);
    });
}