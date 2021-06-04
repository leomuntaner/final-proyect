<?php
include "./cors.php";
include './getConection.php';
session_start();  


if ($mysqli = getConnection()){
  $data = json_decode(file_get_contents('php://input'));  

  $username = $data -> {'user'};
  $password = $data -> {'pass'};
  $result = $mysqli->query("SELECT * FROM Users WHERE email='".$username."'");  

  if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    if($password == $row['pass']){
      $_SESSION['userId'] = $row['id'];
      echo json_encode(array('connected'=>true,'user'=>$_SESSION['userId']) );
    }
    else {
      echo json_encode(array('connected'=>false, 'error' => 'Wrong password , try again.'));
    }
  }
  else {
      echo json_encode(array('connected'=>false, 'error' => 'User does not exist.')); }
  }
  else{
    echo json_encode(array('connected'=>false, 'error' => 'Sorry , we cant connect to the database rigth now.'));
  }
$mysqli->close();
?>