<?
    include $_SERVER["DOCUMENT_ROOT"]."/ContestRecruitSite/lib/php/connectDB.php";

    $id = $_POST['id'];
    //파라미터로 가지고 온 id를 &id라는 변수에 저장(php는 변수이름 앞에 $붙인다.)

    //여기서부터 mysql 쿼리문
    $sql = "SELECT BRD_TITLE, BRD_CONTENT, BRD_DATE
              FROM USR_BRD
             WHERE BRD_ID = '$id'";
    
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);

    $value = array(
        'BRD_TITLE' => $row['BRD_TITLE'],
        'BRD_CONTENT' => $row['BRD_CONTENT'],
        'BRD_DATE' => $row['BRD_DATE']
    );
    echo json_encode($value);

    mysql_close($connect);

    // 정보 배열에 저장하고 다시 js의 result로 가져오기
    // 정보는 제목, 내용, 날짜 등 js->php로 갔으니까
    // 다시 js로 저 값들을 리턴해줘야함
    // 배열로 저렇게 만들어서 리턴해준다는 의미
?>