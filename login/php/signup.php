<?
    include $_SERVER["DOCUMENT_ROOT"]."/ContestRecruitSite/lib/php/connectDB.php";

    $id = $_POST['id'];
    $pw = $_POST['pw'];

    $sql = "INSERT INTO USR_INF(USR_ID,USR_PW) VALUES('$id',MD5('{$pw}'))";

    $result = mysql_query($sql, $connect);

    echo json_encode($result);

    mysql_close($connect);
?>