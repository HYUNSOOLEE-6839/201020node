const template = require('./maintemplate')

module.exports.delete = function (uid) {
	return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <title>My BBS</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="/fontawesome-free-5.15.1-web/css/all.min.css">
        <script src="/jquery/jquery.min.js"></script>
        <script src="/popper/popper.min.js"></script>
        <script src="/bootstrap/js/bootstrap.min.js"></script>
    </head>
    <body>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="#" >
        <img src="/img/호서.jpg" alt="호서직업능력개발원"
                style="height : 40px; margin-left : 50px; margin-right : 100px;">
    </a>
    <ul class="nav mr- auto">
        <li class="nav-item">
    <a class="nav-link" href='/bbs'><i class="fas fa-home">홈</i></a>
</li>
<li class="nav-item">
<a class="nav-link" href='/bbs/bid/write'><i class="fas fa-home">글 쓰기</i></a>
</li>
<li class="nav-item">
<a class="nav-link" href='/user/getInfo'><i class="fas fa-home">사용자 조회</i></a>
</li>
<li class="nav-item">
    <a class="nav-link" href='/'><i class="fas fa-sign-out-alt"></i>로그아웃</i></a>
</li>
</ul>
<div class="navbar-text fixed-right" id="weather">
  홍길동님 반갑습니다.
  날씨 : 맑음, 온도 : 20&deg;C
  <i class="fas fa-sun"></i>
</div>
</nav>
<div class="container" style="margin-top: 90px;">  
    <div class="row">
        <div class="col-12">
            <h3>회원정보 삭제</h3>
            <hr>
        </div>
        <div class="col-3"></div>
        <div class="col-6">
            <div class="card border-warning mt-3">
                <div class="card-body">
                    <h5 class="card-title">삭제하시겠습니까?</h5>
                    <p class="card-text text-center">
                        <button class="btn btn-primary" onclick="location.href='/user/deleteConfirm/${uid}'">삭제</button>
                        <button class="btn btn-secondary" onclick="location.href='/user/list/${uid}'">취소</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
</div>
${template.footer()}
    `;
}