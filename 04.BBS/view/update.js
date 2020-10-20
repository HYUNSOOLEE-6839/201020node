const template = require('./maintemplate')

module.exports.updateForm = function(rows) {
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
    <body>
        <h1>사용자 수정</h1>
        <hr>
        <form action = "/user/update" method ="post">
            <input type="hidden" name="uid" value="${rows.uid}">
            <input type="hidden" name="pwdHash" value="${rows.pwd}">
            <table>
                <tr>
                    <td><label for="uid">사용자 ID</label></td>
                    <td><span id="uid">${rows.uid}</span></td>
                </tr>
                <tr>
                        <td><label for="pwd">패스워드</label></td>
                        <td><input type="password" name="pwd" id="pwd"></td>
                </tr>
                <tr>
                        <td><label for="pwd2">패스워드 확인</label></td>
                        <td><input type="password" name="pwd2" id="pwd2"></td>
                </tr>
                <tr>
                    <td><label for = "uname">이름</label></td>
                    <td><input type = "text" name="uname" id ="uname" value="${rows.uname}"/></td>
                </tr>
                <tr>
                    <td><label for = "tel">전화번호</label></td>
                    <td><input type="text" name ="tel" id ="tel" value="${rows.tel}"/></td>
                </tr>
                <tr>
                    <td><label for = "email">이메일</label></td>
                    <td><input type="text" name ="email" id ="email" value="${rows.email}"/></td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                    <input type = "submit" value="수정"/></td>
                </tr>
            </table>
        </form>
    </body>
    </html>
    ${template.footer()}
    `
}
// update 간에는 hidden으로 sid 값을 하나 더 줘야함.