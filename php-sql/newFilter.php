<?php
include "./cors.php";
include './getConection.php';
session_start();  


if ($mysqli = getConnection()){
  $data = json_decode(file_get_contents('php://input'));  

  $filterName = $data -> {'filterName'};
  $candleConfirmation = $data -> {'candleConfirmation'};
  $resistence = $data -> {'resistence'};
  $onlyLong = $data -> {'onlyLong'};
  $onlyShort = $data -> {'onlyShort'};
  $rsi = $data -> {'rsi'};
  $macd = $data -> {'macd'};
  $ichimokuCloud = $data -> {'ichimokuCloud'};
  $movingAverage = $data -> {'movingAverage'};
  $exponentialMA = $data -> {'exponentialMA'};
  $retest = $data -> {'retest'};


  $result = $mysqli->query("insert into Filters values (
                            0,
                            1,
                            '$filterName' ,
                            'false',
                            2,
                            $resistence,
                            $onlyLong ,
                            $onlyShort,
                            $rsi,
                            $macd ,
                            $ichimokuCloud,
                            $movingAverage,
                            $exponentialMA,
                            $retest )");  

if (true) {
      echo json_encode(array('connected'=>true, "resistence"=>$resistence, "name"=>$filterName, "long"=>$onlyLong) );
    }
}
else{
echo json_encode(array('connected'=>false, 'error' => 'Sorry , we cant connect to the database rigth now.'));
}

$mysqli->close();

?>