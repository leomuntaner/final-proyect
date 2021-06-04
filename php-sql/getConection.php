<?php

function getConnection(){
    $server = "localhost";
    $user = "root";
    $password = "";
    $dbName = "proyect";
    $con = mysqli_connect($server, $user, $password ,$dbName);
    if($con){
        echo "";
    }else{
        echo 'There was an unexpected problem';
    }
    return $con;
}
?>