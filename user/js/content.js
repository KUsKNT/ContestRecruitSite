// 게시판 내용 데이터 불러오기
function getNoticeBrdContent(param){

   requestData('/ContestRecruitSite/user/php/Content/getNoticeContent.php', param).done(function(result){
       $("#noticeBrdDiv").load("noticeBrdContent.html", function () {
           showNoticeBrdContent(result);
       });
   });
}

// 공지사항 내용 보여주기
function showNoticeBrdContent(content){

    //제목
    let titleDivHtml = '';
    titleDivHtml += '<p>' + content['BRD_TITLE'] + '</p>';

    $('#titleDiv').empty().append(titleDivHtml);

    //내용
    let contentDivHtml = '';
    contentDivHtml += '<p>' + content['BRD_CONTENT'] + '</p>';

    $('#contentDiv').empty().append(contentDivHtml);

    //등록일
    let dateDivHtml = ''
    dateDivHtml += '<p>등록일 ' + content['BRD_DATE']; + '</p>';

    $('#dateDiv').empty().append(dateDivHtml);

    initNoticeBrdContentEvent();
}

// 게시판 내용 이벤트
function initNoticeBrdContentEvent(){ 
    $('#contentBack').off('click').on('click', function(){
        $("#noticeBrdDiv").load("noticeBrdTable.html", function () {
            getNoticeBrdList();
        });
    });
}
