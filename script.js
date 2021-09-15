$(document).ready(function(){

    $('.submit').click(function(){
        validateForm();   
    });
    $.get("https://restcountries.eu/rest/v2/all", function(data, status){
                console.log(data);
                var country = new Array();

                for (let i = 0; i<data.length; i++)
                {
                    country.push(data[i].name)
                }
                console.log(country)
                $("#country").select2({
                    data:country
                });
            });


            $(function() {

                $( "#datepick" ).datepicker({
                    onSelect:function (value, ui)
                    {
                        var today=new Date();
                        age=today.getFullYear() - ui.selectedYear;
                        $("#age").val(age);
                    },
                    changeMonth:true,
                    changeYear:true
                    });
            });
    
    function validateForm(){
    
        var nameReg = /^[A-Za-z]+$/;
        var numberReg =  /^[7-9][0-9]{9}$/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
        var names = $('#name').val();
        var email = $('#email').val();
        var telephone = $('#mob').val();
    
        var inputVal = new Array(names,  email, telephone);
    
        var inputMessage = new Array("name", "email address", "telephone number");
    
         $('.error').hide();
    
            if(inputVal[0] == ""){
                $('#name').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
            } 
            else if(!nameReg.test(names)){
                $('#name').after('<span class="error"> Letters only</span>');
            }
            if(inputVal[1] == ""){
                $('#email').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
            } 
            else if(!emailReg.test(email)){
                $('#email').after('<span class="error"> Please enter a valid email address</span>');
            }
    
            if(inputVal[2] == ""){
                $('#mob').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
            } 
            else if(!numberReg.test(telephone)){
                $('#mob').after('<span class="error">Indian numbers only</span>');
            }
        
    };


    
    });