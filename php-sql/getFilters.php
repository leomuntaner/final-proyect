<?php
include "./cors.php";
include './getConection.php';
session_start();  

//     FILTRO POR USER ID ---->   WHERE userId=".$_SESSION['userId']
if ($mysqli = getConnection()){
  $query = "SELECT *  FROM Filters";
  $result = mysqli_query($mysqli , $query ); 
  $trades = array();
  while($row =mysqli_fetch_assoc($result))
  {
    $trades[] = $row;
  }
  echo json_encode($trades);
}
else{
  echo json_encode(array('connected'=>false, 'error' => 'Sorry , we cant connect to the database rigth now.'));
}


$mysqli->close();
?>