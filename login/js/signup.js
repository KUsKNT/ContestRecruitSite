$("#signUpBtn").off("click").on("click", function() {
    signUpCheck();
});

$("#goBack").off("click").on("click", function() {
    location.replace("/ContestRecruitSite/login/html/login.html");
});

function signUpCheck() {
    var id = $("#id").val();
    var pw = $("#pw").val();
    var pw2 = $("#pw2").val();
    var name = $("#name").val();

    var idCheck = /^[a-zA-Z0-9]{8,16}$/; // 영어 숫자만 사용해서 8~16
    var pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/; // 영어 숫자 특수문자 사용해서 8~16
    if (!idCheck.test(id)) {
        alert("8~16자리의 영문자와 숫자를 사용해서 아이디를 입력하세요.");
    }
    else if (!pwCheck.test(pw)) {
        alert("8~16자리의 영문자와 숫자, 특수문자를 사용해서 비밀번호를 입력하세요.");
    }
    else if (pw != pw2) {
        alert("비밀번호를 다시 확인해주세요.");
    }
    else if (id == "" || pw == "" || pw2 == "" || name == "") {
        alert("모든 정보를 입력해주세요.");
    }
    else {
        setLogin();
    }
}

function setLogin() {
    let id_ = $("#id").val();
    let pw_ = $("#pw").val();
    let param = "id=" + id_ + "&pw=" + pw_;

    requestData("/ContestRecruitSite/login/php/signup.php", param).done(function(result) {
        if (result) {
            alert("회원가입이 완료되었습니다.");
            location.replace("/ContestRecruitSite/login/html/login.html");
        }
        else {
            alert("회원가입 실패");
        }
    })
}

function requestData(url, param) {
    let deferred = $.Deferred();

    try {
        $.ajax({
            url: url,
            type: "post",
            data: param
        }).done(function(result) {
            deferred.resolve(JSON.parse(result));
        });
    } catch(e) {
        deferred.reject(e);
    }

    return deferred.promise();
}