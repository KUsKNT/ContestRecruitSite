// 글 작성 부분 보여주기
function showNoticeBrdWrite(){
    // 버튼 공간에 작성하기 버튼 추가 (해보세요)

    initNoticeBrdWriteEvent(); // 클릭같은 이벤트는 이 함수에 모아둘 것임(그러면 깔끔)
}

// 글 작성 부분 이벤트
function initNoticeBrdWriteEvent(){
    // 작성하기 버튼 클릭 시 (제목, 내용 작성 값 가져와서 디비에 저장할 거임(회원가입 실습한 거랑 비슷))

    // 파라미터(제목, 내용 작성 값, 현재 시간) 이용해서 리퀘스트 함수 작성해보세엽
    // 현재 시간 구하는 건 lib.js에 있음(현재 시간 값은 getTimeStamp(new Date()))
    // php 파일만 만들었으니 안에 내용 작성하기
    // 글을 작성한 후 main.html로 돌아오게 하기
}