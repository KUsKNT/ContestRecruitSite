<?
    include $_SERVER["DOCUMENT_ROOT"]."/ContestRecruitSite/lib/php/connectDB.php";


    $id = $_POST['id'];
    $pw = $_POST['pw'];
//    $pw = MD5('{$pw}');

    $sql = "SELECT * FROM USR_INF WHERE USR_ID = '$id' AND USR_PW = MD5('{$pw}')";

    $result = mysql_query($sql, $connect);

    $data = mysql_fetch_array($result);

    echo json_encode($data);
    mysql_close($connect);

?>