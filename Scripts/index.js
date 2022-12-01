var downtotopbtn = document.getElementById("mybtn");
window.onscroll = function ()
{
    showbtn()};
function showbtn(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        $(downtotopbtn).fadeIn('slow');
    }
    else
    {
        $(downtotopbtn).fadeOut('slow');
    }
}
function functiontop()
{
    document.documentElement.scrollTop = 0;
}



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})



















const contact_details = {name:$("#name"),email:$("#email"),mess:$("#message")};
const StatusOfFileds = {};

window.onload = ()=>{
    if((contact_details.name).val()==""){
        errormessage($(contact_details.name).attr("name"),"Please enter name field");
    }
    if((contact_details.email).val()==""){
        errormessage($(contact_details.email).attr("name"),"Please enter name field");
    }
    if((contact_details.mess).val()==""){
        errormessage($(contact_details.mess).attr("name"),"Please enter name field");
    }
}



var inputs_fields = [$("input[type='text']")[0],$("input[type='email']")[0],$("textarea")[0]];
for(var i=0; i<inputs_fields.length; i++){

     inputs_fields[i].addEventListener("input",remove_validations);

}


function Success_action(){
    alert("Data has been submit successfully");

}

function error_action(){
    alert("Data has not been submit successfully");

}

function clear_fields()
{
    $(contact_details.email).val = "";
    $(contact_details.name).val = "";
    $(contact_details.mess).val = "";
}

function remove_validations(e){
    var Fieldvalue = $(e.target).val();
    var Fieldname = $(e.target).attr("name");
        if(Fieldname == "name"){
            if(!($.trim(Fieldvalue).length == 0))
            {
                if(Fieldvalue.length >= 10)
                {
                    Successmessage(Fieldname,"Valid Field");
                    StatusOfFileds.name = true;
                }
                else{
                    errormessage(Fieldname,"Please enter alteast 10 characters");
                }
            }
            else
            {
                errormessage(fieldname,"Please enter name  field");
            }
        }
        if(Fieldname == "email"){
    
            if(!(Fieldvalue == "")){
                if(Fieldvalue.includes("@"))
                {
                        Successmessage(Fieldname,"Valid Field");
                        StatusOfFileds.email = true;
                
                }
                else
                {
                    errormessage(Fieldname,"Please enter Gmail address")    
                }
            }
            else{
                errormessage(Fieldname,"Please enter name  field");
        
            }
        }
        if(Fieldname == "message"){
        
            if(!(Fieldvalue == ""))
            {
                if(Fieldvalue.length > 30 && !($.trim(Fieldvalue).length == 0))
                {
                Successmessage(Fieldname,"Valid Field");
                StatusOfFileds.mess = true;
                }
                else
                {
                errormessage(Fieldname,"Write message lenght upto 30");
                }
            }
            else
            {
                errormessage(Fieldname,"Please enter message field");
            }

        }
}





$("input[type='submit']").click((e)=>{

    e.preventDefault();
if(StatusOfFileds.name == true & StatusOfFileds.email == true & StatusOfFileds.mess == true)
{

    // SendDataToDatabase();
    $(".alert.alert-success").fadeIn();
    $(".alert.alert-success").text("your data has been submitted succesfully");
    setInterval(()=>{
        $(".alert.alert-success").fadeOut();
    },3000)
    clear_fields();
}

}
);



// function SendDataToDatabase(){
//     $.ajax(

//         {
//             url : "Create.php",
//             method: "POST",
//             data: {name:$(contact_details.name).val(),email:$(contact_details.email).val(),mess:$(contact_details.mess).val()},
//             success: (Result)=>{
//                         $(".alert.alert-success").fadeIn();
//                         $(".alert.alert-success").text(Result);
//                         setInterval(()=>{
//                         $(".alert.alert-success").fadeOut();
//                         },3000)
//                         clear_fields();
//             },
//             error: (error)=>{
//                     $(".alert.alert-danger").fadeIn();
//                     $(".alert.alert-danger").text(error);
//                     setInterval(()=>{
//                     $(".alert.alert-danger").fadeOut();
//                     },3000)
//                     clear_fields();
//             }
        
//         }
        
//         )    
// }


function errormessage(fieldname,errormessage)
{
    $(`#${fieldname}`).css("border","1px solid red");
    $(`#${fieldname}`).next().text(errormessage).css("color","Red");
}

function Successmessage(fieldname,Successmessage){
    $(`#${fieldname}`).css("border","lightgreen 1px solid");
    $(`#${fieldname}`).next().text(Successmessage).css("color","lightgreen");

}
