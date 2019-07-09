const sortSample = ()=>{
    let nums = [47,106,5,2,1];
    nums = nums.sort((num1,num2)=>{
        if(num1 > num2){
            return -1;
        }else if (num1 < num2){
            return 1;
        }else{
            return 0;
        }
    });
    console.log('Sort Sample');
    console.log(nums);
}
sortSample();
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
    },
    {
        id : 4,
        name : 'Adams',
        email: 'adam@gg.com',
        organization: 'LnT'
    },
    {
        id : 5,
        name : 'John',
        email: 'john@gg.com',
        organization: 'Target'
    }
];
const loadEmployees= ()=>{
    let rows = '';
    //console.log(emps);
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
                        <th><a href="#" onclick="sortEmployee('ID')">Id</a></th>
                        <th><a href="#" onclick="sortEmployee('NAME')">Name</a></th>
                        <th>Email</th>
                        <th><a href="#" onclick="sortEmployee('ORG')">Organization</a></th>
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
const sortEmployee = (sortBy)=>{
    let rows = '';
    let newEmps = emps;
    if(sortBy == 'ID'){
        newEmps.sort((emp1,emp2)=>{
            if(emp1.id > emp2.id){
                return -1;
            }else if(emp1.id < emp2.id){
                return 1;
            }else{
                return 0;
            }         
        }).forEach((e)=>{
            rows += empRow(e);
        });
        empTable(rows);
    }else if(sortBy == 'NAME'){
        newEmps.sort((emp1,emp2)=>{
             if(emp1.name > emp2.name){
                 return 1;
             }else if(emp1.name < emp2.name){
                return -1;
            }else{
                return 0;
            }        
        }).forEach((e)=>{
            rows += empRow(e);
        });
        empTable(rows);
    }else if(sortBy == 'ORG'){
        newEmps.sort((emp1,emp2)=>{
        if(emp1.organization > emp2.organization){
            return -1;
        }else if(emp1.organization < emp2.organization){
           return 1;
       }else{
           return 0;
       }       
    }).forEach((e)=>{
        rows += empRow(e);
    });
    empTable(rows);
    }
}
const localStore=()=>{
    localStorage.setItem("message","Hello how r u");
    localStorage.setItem("emps",JSON.stringify(emps));
}
const sessionStore=()=>{
    sessionStorage.setItem("sessionMessage","Welcome to Session Storage");
}

const viewWebStore = () =>{
    if(localStorage.length > 0 ){
        Object.keys(localStorage)
        .forEach((key)=>{
            console.log(localStorage.getItem(key));
        })
    }
    if(sessionStorage.length > 0 ){
        Object.keys(sessionStorage)
        .forEach((key)=>{
            console.log(sessionStorage.getItem(key));
        })
    }
    // clear web stores
    localStorage.removeItem('message');
    sessionStorage.removeItem('sessionMessage');
    let storedEmps =JSON.parse(localStorage.getItem("emps"));
    console.log(storedEmps);
}