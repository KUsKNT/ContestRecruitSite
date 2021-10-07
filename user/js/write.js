// 글 작성 부분 보여주기
function showNoticeBrdWrite(){ 
    let writeBtnDiv = '';
    writeBtnDiv += '<button id="writeContentBtn">글 게시하기</button>';
    $('#writeBtnDiv').empty().append(writeBtnDiv);

    initNoticeBrdWriteEvent(); // 클릭같은 이벤트는 이 함수에 모아둘 것임(그러면 깔끔)
}

// 글 작성 부분 이벤트
function initNoticeBrdWriteEvent(){

    // 글 게시하기 버튼 클릭 시
    $('#writeContentBtn').off('click').on('click', function(){ // #writeNoticeBrd은 글쓰기 버튼의 아이디(noticeBrdTable.html에 나와있음)
        let title = $("#title").val();
        let content = $("#content").val(); 
        let time = getTimeStamp(new Date());  
    });

    // 파라미터(제목, 내용 작성 값, 현재 시간) 이용해서 리퀘스트 함수 작성해보세엽
    // php 파일만 만들었으니 안에 내용 작성하기
    // 글을 작성한 후 main.html로 돌아오게 하기
}