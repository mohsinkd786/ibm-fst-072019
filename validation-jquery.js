$(document).ready(()=>{
    console.log('Validation vai Jquery');
    $('#register').click(()=>{
        
        $.validator.addMethod('emailValidator',(value,elem)=>{
                let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value);
        });

        $('#frm-register').validate({
            rules:{
                name: 'required',
                phone: {
                    required : true,
                    min : 100,
                    max: 1000
                },
                email:{
                    emailValidator: true
                }
            },
            messages:{
                name : 'Name cannot be left blank',
                phone: {
                    required : 'Phone cannot be left blank',
                    min : 'Phone cannot be less than 100',
                    max: 'Phone cannot be greater than 1000'
                },
                email: {
                    emailValidator: 'Invalid Email your@email.com'
                }
            }
        });
    });
});