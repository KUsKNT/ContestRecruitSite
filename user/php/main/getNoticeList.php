<?
    include $_SERVER["DOCUMENT_ROOT"]."/ContestRecruitSite/lib/php/connectDB.php";

    $sql = "SELECT * FROM USR_BRD";

    $result = mysql_query($sql, $connect);

    $value = array();

    while($row = mysql_fetch_array($result)){
        $tmp = array(
            'BRD_ID' => $row['BRD_ID'],
            'BRD_TITLE' => $row['BRD_TITLE'],
            'BRD_DATE' => $row['BRD_DATE']
        );
        array_push($value, $tmp);
    }
    
    echo json_encode($value);

    mysql_close($connect);
    
?>
