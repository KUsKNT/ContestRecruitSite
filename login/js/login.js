$('#signUpBtn').off('click').on('click', function(){
    location.replace("/ContestRecruitSite/login/html/signup.html");
});

$('#loginBtn').off('click').on('click', function(){
    loginCheck();
});

function loginCheck() {
    let id_ = $("#id").val();
    let pw_ = $("#pw").val();
    let param = "id=" + id_ + "&pw=" + pw_;

    if (id_ == "") {
        alert("아이디를 입력하세요")
    }
    else if (pw_ == "") {
        alert("비밀번호를 입력하세요")
    }
    else {
        requestData("/ContestRecruitSite/login/php/login.php", param).done(function(result) {
            if (result) {
                alert("성공!");
            }
            else {
                alert("실패!");
            }
        })
    }    
}