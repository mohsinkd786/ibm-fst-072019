// HTML Events
const saveEmployee = () =>{
    console.log('Save Called');
    // create Employee Service Object
    const emp = new EmployeeService();
    emp.setup(
        document.getElementById('eId').value,
        document.getElementById('eName').value,
        document.getElementById('eEmail').value,
        document.getElementById('eDesignation').value
        );
    // SAVE Employee
    emp._add();
    fetchAllEmployees();
}

const fetchAllEmployees = ()=>{
    document.getElementById('eEmail').removeAttribute('readonly');
    const emp = new EmployeeService();
    const employees = emp._all();
    buildEmployeeTable(employees);
    
}
// search
const searchEmployees = () =>{
    const emp = new EmployeeService();
    const employees = emp._filter(
                        document.getElementById('searchBy').value,
                        document.getElementById('criteria').value
                    );
    buildEmployeeTable(employees);
}
// edit 
const editEmployee = (eEmail) =>{
    const emp = new EmployeeService();
    let empFound = emp._update(eEmail);
    document.getElementById('eId').value = empFound.eId;
    document.getElementById('eName').value = empFound.eName;
    document.getElementById('eEmail').value = empFound.eEmail;
    document.getElementById('eDesignation').value = empFound.eDesignation;
    // make email read only
    document.getElementById('eEmail').setAttribute('readonly',true);
}
const buildEmployeeTable = (employees) =>{
    const empBody = document.getElementById('emp-details');
    let rows = '';
    employees.forEach((emp)=>{
        rows += `<tr>
                    <td>${emp.eId}</td>
                    <td>${emp.eName}</td>
                    <td>${emp.eEmail}</td>
                    <td>${emp.eDesignation}</td>
                    <td><a href='#' onclick="deleteEmployee('${emp.eEmail}')">Delete</a></td>
                    <td><a href='#' onclick="editEmployee('${emp.eEmail}')">Edit</a></td>
                </tr>`
    });
    empBody.innerHTML = rows;
    if(rows !=''){
        document.getElementById('tbl-employee').style.visibility = 'visible';
    }else{
        document.getElementById('tbl-employee').style.visibility = 'hidden';
    }
}
const deleteEmployee = (eEmail)=>{
    const emp = new EmployeeService();
    emp._delete(eEmail);
    const emps = emp._all();
    buildEmployeeTable(emps);
}
class EmployeeService {
    
    // setup method to configure attri
    setup(eId,eName,eEmail,eDesignation){
            this.eId = eId
            this.eName = eName
            this.eEmail = eEmail
            this.eDesignation = eDesignation
    }

    // CRUD Operations

    _all(){
        const employees = [];
        // fill up Array
        Object.keys(localStorage).forEach((storeKey)=>{
            employees.push(JSON.parse(localStorage.getItem(storeKey)));
        });
        return employees;
    }
    _filter(searchBy, criteria){
        let employees = [];
        // fill up Array
            if(criteria !=null && searchBy == 'ID'){
                    Object.keys(localStorage).forEach((e)=>{
                        const _emp = JSON.parse(localStorage.getItem(e));
                        if(_emp.eId == criteria){
                            employees.push(_emp);
                        }
                    });
                }
                else if(criteria !=null && searchBy == 'DESIG'){
                        Object.keys(localStorage).forEach((e)=>{
                            const _emp = JSON.parse(localStorage.getItem(e));
                            if(_emp.eDesignation == criteria){
                                employees.push(_emp);
                            }
                       });
            }
        return employees;
    }
    _add(){
        localStorage.setItem(this.eEmail,JSON.stringify({
            eId : this.eId,
            eName: this.eName,
            eEmail: this.eEmail,
            eDesignation: this.eDesignation
        }));
    }
    _update(eEmail){
        return JSON.parse(localStorage.getItem(eEmail));
    }
    _delete(eEmail){
        localStorage.removeItem(eEmail);
    }
}