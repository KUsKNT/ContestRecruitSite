<?
    include $_SERVER["DOCUMENT_ROOT"]."/ContestRecruitSite/lib/php/connectDB.php";


    $id = $_POST['id']; // 이거 게시글 번호 어케불러오냥??
    $title = $_POST['title'];
    $content = $_POST['content'];
    $writingTime = $_POST['writingTime'];
    $disable = $_POST['disable']; // 이건 뭐야?? 

    $sql = "INSERT INTO USR_BRD(BRD_ID, BRD_TITLE, BRD_CONTENT, BRD_DATE, BRD_DISABLE) 
                 VALUES('$id','$title','$content','$date','$disable')";

    $result = mysql_query($sql, $connect);

    echo json_encode($result);

    mysql_close($connect);
?>