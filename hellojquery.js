//onload function
$(document).ready(()=>{
    console.log('jquery onload/ready called');

    $('#save').click(()=>{
        // remove a class
        $('#email').removeClass('input');
        //let email = document.getElementById('email').value;
        //document.getElementById('email').value = 'hello';
        // get text box value
        let email = $('#email').val();
        alert(`Email is : ${email}`);
        //set textbox value
        $('#email').val('hello@mm.com');
        //set focus within textbox
        $('#email').focus();
    });

    // access by css class
    $('div.update').click(()=>{
        console.log('div.update');
        $('#email').val('updated@mm.com');
    });
    // access by css class
    $('div#reset').click(()=>{
        $('#email').val('reset@mm.com');
    });
    // click event by an element type
    /*
    $('div').click(()=>{
        console.log('div');
        $('#email').val('div-event@mm.com');
    }); */
    // on load 
    $('#content').html("<span class='my-span'><b>Hello Jquery</b></span>");
    $('.my-span').on('click',()=>{
        $('#txt-content').text('Hello Text content');
        console.log('My Span called');
    });

    // slide toggle
    $('#btn-emp-slide-toggle').click(()=>{
        /*$('#frm-emp').slideToggle({
            easing: 'linear',
            duration: 1000
        },()=>{
            console.log('Show/hide form');
        }); */
        //
        $('#frm-emp-slidetoggle').slideToggle('fast',()=>{
            console.log('Show/hide form');
        });
    });
    // show hide
    $('#btn-emp-hide').click(()=>{
        $('#frm-emp-slidetoggle').hide(1000,()=>{
            $('#email1').val('');
            $('#email2').val('');
            $('#email3').val('');
        });
    });
    $('#btn-emp-show').click(()=>{
        $('#frm-emp-slidetoggle').show();
    });
    // Fade In / Out
    $('#btn-emp-fade-out').click(()=>{
        $('#frm-emp-slidetoggle').fadeOut(2000);
    });
    $('#btn-emp-fade-in').click(()=>{
        $('#frm-emp-slidetoggle').fadeIn(1000);
    });
    $('#email').click(()=>{
        // add css class
        $('#email').addClass('input');

        // apply styling via jquery
        /*$('#email').css({
            'background-color':'d4bb9a',
            'border': '2px solid red'
        }); */
    });
    // trigger only once
    $(':text').one('click',()=>{
        $(':text').val('Hello Text field');
    });

    $(':text').click(()=>{
        // explicit styling based on type of input
        // via id / css class
        // by id : :text#email2
        // by class : :text.email2
        $(':text#email2').css({
            'background-color':'green',
            'border': '2px solid red'
        });
    });
});