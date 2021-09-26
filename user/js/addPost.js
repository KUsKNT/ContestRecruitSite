$("#posting").off("click").on("click", function(){
    if(confirm("글을 게시하시겠습니까?")){

    }
})





/*
router.get('/write', function(req,res,next){ // post로 /write로 들어올 때 진입하게 됨
    var name = req.body.name;
    var title = req.body.title;
    var content = req.body.content; // req 객체로 body 속성에서 input name 파라미터를 가져올 수 있음
    var datas = [name,title,content] // 모든 데이터를 배열로 묶음

    var sql = "insert into board(name, title, content)"
    conn.query(sql, datas, function(err, rows){
        if(err) console.error("err : " + err); //
        res.redirect('/board/list'); //
    })




    res.render('write',{title : "새로운 글 쓰기"});
}) // 글쓰기 입력을 받을 폼을 표현할 라우터 추가
*/
