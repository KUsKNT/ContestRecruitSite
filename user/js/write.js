//document.write('<script type="text/javascript" src="/ContestRecruitSite/lib/js/lib.js"></script>')
//import getTimeStamp from './ContestRecruitSite/lib/js/lib.js'; 
// lib.php에서 export해야 되나요? 아니면 다른 방법이 있나요??

// 글 작성 부분 보여주기
function showNoticeBrdWrite(){
    // 버튼 공간에 작성하기 버튼 추가 (해보세요)

    // 제목
    //let titleDivHtml = '';
    //titleDivHtml += '<p><input type="text" id="writeTitle" name="writeTitle" placeholder="제목 입력"></P>';

    //$('#titleDiv').empty().append(titleDivHtml);


    //let id_ = id.substr(22); // 이게 맞는 건지 모르겠으..
    let title_ = $("#writeTitle").val();
    let content_ = $("#writeContent").val();
    let writingTime_ = $("#writingTime").getTimeStamp(new Date()); // 이건 이렇게 사용하는게 맞아??
    //let disable_ = 'Y';
    let param = "&title=" + title_ + "&content=" + content_ + "&writingTime" + writingTime_;

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

    //initNoticeBrdWriteEvent(); // 클릭같은 이벤트는 이 함수에 모아둘 것임(그러면 깔끔)
}



// 글 작성 부분 이벤트
function initNoticeBrdWriteEvent(){
    // 작성하기 버튼 클릭 시 (제목, 내용 작성 값 가져와서 디비에 저장할 거임(회원가입 실습한 거랑 비슷))

    // 파라미터(제목, 내용 작성 값, 현재 시간) 이용해서 리퀘스트 함수 작성해보세엽
    // 현재 시간 구하는 건 lib.js에 있음(현재 시간 값은 getTimeStamp(new Date()))
    // php 파일만 만들었으니 안에 내용 작성하기
    // 글을 작성한 후 main.html로 돌아오게 하기



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