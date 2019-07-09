const emps = [
    {
        id : 1,
        name : 'Ram',
        email: 'ram@gg.com',
        organization: 'IBM'
    },
    {
        id : 2,
        name : 'Shyam',
        email: 'shyam@gg.com',
        organization: 'IBM'
    },
    {
        id : 3,
        name : 'Gabbar',
        email: 'gabbar@gg.com',
        organization: 'CTS'
    }
];
const loadEmployees= ()=>{
    let rows = '';
    // traverse the array
    emps.forEach((employee) =>{
        rows += empRow(employee);
    });
    empTable(rows);
}
const filterEmps = () =>{
    let rows = '';
    searchByOrg = document.getElementById('search').value;

    emps.filter((emp)=>{
        return emp.organization == searchByOrg;
    }).forEach((employee)=>{
        rows += empRow(employee);
    });
    empTable(rows);
}
const empRow = (employee)=>{
    return `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.organization}</td>
    </tr> `
}
const empTable = (rows)=>{
    let records = `<table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Organization</th>
                    </tr>
                    ${rows}    
                </table>`;
    document.getElementById('div-emps').innerHTML = records;
}
const findById = () =>{
    const empId = document.getElementById('findById').value;
    
    const empFound = emps.find((e)=>{
                        return empId == e.id;
                 });
    if(empFound != undefined){
        alert(empFound.id+' '+empFound.name);
    }else{
        alert('No Employees Found with the given Criteria');
    }
}