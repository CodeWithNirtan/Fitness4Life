<?php

$server = "localhost";
$username = "root";
$password = "";
$database_name = "Fitness4life";


$conn = new mysqli($server,$username,$password,$database_name);

if($conn){

    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['mess'])){
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        $mess = $_POST['mess'];
        if($name != "" && $email != "" && $mess != ""){
            
            $query = "insert into messages(User_name,User_email,User_mess) values('".$name."','".$email."','".$mess."')";
            $execute = mysqli_query($conn, $query);    
            if($execute){
                
                echo "Data submit successfully";
            }
            else
            {
                echo "Data not been submited";
            }
        }
        else{
            echo "Please Fill the fields";   
        }
            

    }
}
else{
    echo "not successful";
}


?>