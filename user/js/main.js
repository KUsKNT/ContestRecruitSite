getNoticeBrdList();

// 게시판 목록 데이터 불러오기
function getNoticeBrdList(){

    requestData('/ContestRecruitSite/user/php/main/getNoticeList.php').done(function(result){
        $("#noticeBrdDiv").load("noticeBrdTable.html", function () {
            showNoticeBrdList(result);
        });
    });
}

// 게시판 목록 보여주기
function showNoticeBrdList(list) {

    let noticeBrdListTbodyHtml = '';
    let noticeBrdListSize = list.length;

    for(let i = 0; i < noticeBrdListSize; i++) {
        noticeBrdListTbodyHtml += '<tr class = "noticeBrdTitle" id = "noticeBrdContentListId' + list[i]['BRD_ID'] + '" ">';
        noticeBrdListTbodyHtml +=     '<td>' + (i + 1) + '</td>';
        noticeBrdListTbodyHtml +=     '<td>' + list[i]['BRD_TITLE'] + '</td>';
        noticeBrdListTbodyHtml +=     '<td>' + list[i]['BRD_DATE'] + '</td>';
        noticeBrdListTbodyHtml += '</tr>';
    }

    $('#noticeBrdListTbody').empty().append(noticeBrdListTbodyHtml);

    initNoticeBrdEvent();
}

// 게시판 이벤트
function initNoticeBrdEvent(){
    // 게시판 목록 클릭 시 
    $('.noticeBrdTitle').off('click').on('click', function(){
        let param = "id=" + this.id.substr(22);
        
        getNoticeBrdContent(param);
    });
}