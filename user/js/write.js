//document.write('<script type="text/javascript" src="/ContestRecruitSite/lib/js/lib.js"></script>')

/*
$("#idBtn").off("click").on("click", function() {
    idExist();
});

$("#signUpBtn").off("click").on("click", function() {
    signUpCheck();
});

$("#goBack").off("click").on("click", function() {
    location.replace("/ContestRecruitSite/login/html/login.html");
});
*/


// 글 작성 부분 보여주기
function showNoticeBrdWrite(){ // main.js 에서 사용
    // 버튼 공간에 작성하기 버튼 추가 (해보세요)

    // 제목

    //$('#titleDiv').empty().append(titleDivHtml);


    //let id_ = id.substr(22); // 이게 맞는 건지 모르겠으..
    let title_ = $("#writeTitle").val();
    let content_ = $("#writeContent").val();
    let writingTime_ = $("#writingTime").getTimeStamp(new Date()); // 이건 이렇게 사용하는게 맞아??
    //let disable_ = 'Y';

    let param = "&title=" + title_ + "&content=" + content_ + "&writingTime" + writingTime_;


    //var btn = document.createElement("<input type='button' value='확인"+cnt+"' onclick='View(this)' />");
    //writeBtnDiv.appendChild(btn);

    //var btn = document.createElement('button');
    //button.innerHTML = "TEST";
    //writeBtnDiv.appendChild(btn);

    //let btnDivHtml = '';
    //btnDivHtml += '<button id="writeContentBtn">글 게시하기</button>';
    //$('#writeBtnDiv').empty().append(btnDivHtml);

    //$(document).ready(function(){
    //    $('#writeBtnDiv').append('<button type="button">글 게시하기</button>');
    //})


    





    //initNoticeBrdWriteEvent(); // 클릭같은 이벤트는 이 함수에 모아둘 것임(그러면 깔끔)
}



// 글 작성 부분 이벤트
function initNoticeBrdWriteEvent(){
    // 작성하기 버튼 클릭 시 (제목, 내용 작성 값 가져와서 디비에 저장할 거임(회원가입 실습한 거랑 비슷))

    // 파라미터(제목, 내용 작성 값, 현재 시간) 이용해서 리퀘스트 함수 작성해보세엽
    // 현재 시간 구하는 건 lib.js에 있음(현재 시간 값은 getTimeStamp(new Date()))
    // php 파일만 만들었으니 안에 내용 작성하기
    // 글을 작성한 후 main.html로 돌아오게 하기


    $(function(){
        $("#btnAdd").click(function(){ //btnAdd라는 버튼을 눌렀을때 ->이벤트 등록
           var d = new Date(); //date를 d에 대입, 날짜변수 만듦
           var curTime = d.toLocaleTimeString(); //현재 시간을 대입
           
           var html = '<tr><td>' + curTime + '</td>'; //tr, td를 열고 + 문자열로 바꾸고 +td 닫기
           html += '<td><button type="button" class="btnDel">Del</button>'; //html변수에 삭제버튼을 대입
           html += '</td></tr>';
           
           //$("#list").append(html); //list라는 아이디에 html을 추가해라

           alert("저런....");
           requestData("/ContestRecruitSite/user/php/write/getNoticeWrite.php", param).done(function(result) {
               alert("글이 작성되었습니다.");
               location.replace("/ContestRecruitSite/user/html/main.html");
               
               //if (result) {
               //    alert("글이 작성되었습니다.");
               //    location.replace("/ContestRecruitSite/user/html/main.html");
               //}
               //else {
               //    alert("저런....");
               //}
           })
        });
        
    })



    requestData("/ContestRecruitSite/user/php/write/getNoticeWrite.php", param).done(function(result) {
        if (result) {
            alert("글이 작성되었습니다.");
            location.replace("/ContestRecruitSite/user/html/main.html");
        }
        else {
            alert("저런....");
        }
    })
}