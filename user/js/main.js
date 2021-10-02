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

    // 글쓰기 버튼 클릭 시
    $('#writeBtn').off('click').on('click', function(){ // #writeNoticeBrd은 글쓰기 버튼의 아이디(noticeBrdTable.html에 나와있음)
        $("#noticeBrdDiv").load("noticeBrdWrite.html", function () { // main.html에서 아이디가 noticeBrdDiv인 부분에 noticeBrdWrite.html(글 작성 틀)을 적용시킬 수 있다.
            showNoticeBrdWrite();
        });    
    });
}