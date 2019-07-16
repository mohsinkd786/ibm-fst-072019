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
    // each
    /*$('div.test').each((index,element)=>{
        $(element).css({'background-color':'red'});
    });*/
    
    /*$('.test').each((index,element)=>{
        console.log(index);
        console.log(element);
        //$(element).add('span:inner');
        $(element).css('border','1px solid');
    });*/

    // siblings
    console.log('SIBLINGS');
    $('#last').siblings().each((i,e)=>{
        console.log(e);
    });
    // parents
    console.log('PARENTS');
    $('#last').parents().each((i,e)=>{
        console.log(e);
    });
    // parent
    console.log('FATHER');
    $('#last').parent().css({'background-color':'red'});

    // Next neighbour
    console.log('NEXT NEIGHBOUR')
    $('#last').next().css({'background-color':'green'});

    // Next ALL neighbour
    console.log('NEXT ALL NEIGHBOUR')
    $('#last').nextAll().each((i,e)=>{
        $(e).css({'font-style':'italic'});
    })

    // Prev neighbour
    console.log('PREVIOUS NEIGHBOUR')
    $('#last').prev().css({'background-color':'white'});

    // Prev ALL neighbour
    console.log('PREVIOUS ALL NEIGHBOUR')
    $('#last').prevAll().each((i,e)=>{
        $(e).css({'font-weight':'bold'});
    })

    // Not 
    // skip an element
    $('.test').not('span').each((i,e)=>{
        console.log(e);
    })
    // 
    console.log('FIRST');
    $('.test').first().each((i,e)=>{
        console.log(e);
    })
    console.log('LAST');
    $('.test').last().each((i,e)=>{
        console.log(e);
    })
    $('#map').click(()=>{
        console.log('MAP');
        let ids = $('.txt').map((i,e)=>{
            // update text field value
            $(e).attr('value',$(e).attr('value')+'55')
            return $(e).attr('id');

        }).get().join(', ');
        console.log(ids);
    })
    console.log('FIND ');
    // get childs / descendants
    $('#childs').find('*').each((i,e)=>{
        console.log(e);
    });

    console.log('CHILDREN ');
    $('#childs').children('*').each((i,e)=>{
        console.log(e);
    });

    // access via explicit index
    console.log('EQUALS ');
    $('#childs').children('.test').eq(1).each((i,e)=>{
        console.log(e);
    });

    // find based on a specific criteria
    console.log('FILTER ');
    $('.test').filter(':even').each((i,e)=>{
        console.log(e);
    });
});