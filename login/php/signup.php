<?
    include $_SERVER["DOCUMENT_ROOT"]."/ContestRecruitSite/lib/php/connectDB.php";

    $id = $_POST['id'];
    $pw = $_POST['pw'];
    $savepw = crypt($pw, md5(time()));

    $sql = "INSERT INTO USR_INF(USR_ID,USR_PW) VALUES('$id','$savepw')";

    $result = mysql_query($sql, $connect);

    echo json_encode($result);

    mysql_close($connect);
?>