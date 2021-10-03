<?
    include $_SERVER["DOCUMENT_ROOT"]."/ContestRecruitSite/lib/php/connectDB.php";

    $id = $_POST['id'];

    $sql = "SELECT COUNT(*) AS USR_CNT FROM USR_INF WHERE USR_ID = '{$id}'";

    $result = mysql_query($sql, $connect);

    $data = mysql_fetch_array($result);

    if ($data["USR_CNT"] == 1) {
        $value = true;
    }
    else {
        $value = false;
    }

    echo json_encode($value);

    mysql_close($connect);
?>