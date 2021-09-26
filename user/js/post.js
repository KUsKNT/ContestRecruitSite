getNoticeBrdContent();


// id 부분의 제목과 내용, 작성시간을 불러오기. 
// main.js에서 게시판 목록 클릭 시 그 목록의 아이디를 파라미터로 보내고 
// 그 아이디를 통해서 php로 제목, 내용, 작성일 데이터 불러오기
// post.js에 getNoticeBrdContent(제목, 내용, 작성일 데이터를 불러오는 함수) 구현하기
function getNoticeBrdContent(param){
    


    requestData('/ContestRecruitSite/user/php/post.php', param).done(function(result){
        $("#postSection").load("post.html", function () {
            showPostContent(result);
        });
    });

}

function showPostContent(result){
    let postBodyHtml = '';
    
    postBodyHtml += '<tr class = "noticeBrdTitle" id = "noticeBrdContentListId' + result['BRD_ID'] + '" ">';
    postBodyHtml +=     '<td>' + list[i]['BRD_TITLE'] + '</td>';
    postBodyHtml +=     '<td>' + list[i]['BRD_DATE'] + '</td>';
    postBodyHtml += '</tr>';

    $('#noticeBrdListTbody').empty().append(noticeBrdListTbodyHtml);

}

function showNoticeBrdList(list) {

    let noticeBrdListTbodyHtml = '';
    let noticeBrdListSize = list.length;

    for(let i = 0; i < noticeBrdListSize; i++) {
        postBodyHtml += '<tr class = "noticeBrdTitle" id = "noticeBrdContentListId' + list['BRD_ID'] + '" ">';
        postBodyHtml +=     '<td>' + (i + 1) + '</td>';
        postBodyHtml +=     '<td>' + list['BRD_TITLE'] + '</td>';
        postBodyHtml +=     '<td>' + list['BRD_DATE'] + '</td>';
        postBodyHtml += '</tr>';
    }

    $('#noticeBrdListTbody').empty().append(noticeBrdListTbodyHtml);

    initNoticeBrdEvent();
}

// 데이터 요청 함수(중요)->앞으로 우리는 js에서 php로 디비에 저장된 값을 다룰 때 이 함수를 이용한다.
function requestData(url, param) { //매개변수로 경로와 param변수가 있다.
    let deferred = $.Deferred();//이 함수가 다 끝나기도 전에 다른 함수가 실행될 수 있다(이걸 비동기식 처리라고 한다.) 이를 보완하기 위한 것!(더 자세히 알고 싶으면 구글링해보기)
 
    try {
       $.ajax({
          url: url,//경로
          type: "post",//데이터 전송 타입
          data: param,//디비에 저장될 값    -> 다음 뜻은 param을 들고 경로(원하는 php)로 이동한다. 
       }).done(function (result) {
          deferred.resolve(JSON.parse(result)); //반환값은 문자열인 true인데 문자열을 벗긴다정도만 알아두기!
       });
 
    } catch (e) {
       deferred.reject(e);
    }
 
    return deferred.promise();//이제 문자열이 아닌 true를 리턴! @@@@@@@@@@@로 이동하기
 }