<?php
include "./cors.php";
include './getConection.php';
session_start();  

//     FILTRO POR USER ID ---->   AND userId=".$_SESSION['userId']
if ($mysqli = getConnection()){
  $query = "SELECT isLong, COUNT(isLong) as total  FROM Trades group by isLong";
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