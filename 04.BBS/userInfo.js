const template = require('./view/template')

module.exports = {
    InfoForm : function(rows){
        let tableRow = '';
        for(let row of rows){
            tableRow += 
            `<tr>
            <td>ID : ${row.uid}  </td>
            <td>이름 : ${row.uname}</td>
            <td>전화번호 : ${row.tel}</td>
            <td>이메일 : ${row.email}</td>
            <td>등록일자 : ${row.regDate}</td>
            <td>
            <a href = "/user/update/${row.uid}">수정 </a>
            <a href = "/user/delete/${row.uid}">삭제</a>
            </td>
            </tr>
            `
        }
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
        <a class="nav-link" href='/'><i class="fas fa-sign-out-alt"></i>로그아웃</i></a>
  </li>
</ul>
  <div class="navbar-text fixed-right" id="weather">
      홍길동님 반갑습니다.
      날씨 : 맑음, 온도 : 20&deg;C
      <i class="fas fa-sun"></i>
  </div>
</nav>

    <div class="container" style="margin-top:90px;">
    <form action="/Info" method="post">
    <table class="table table-hover">
            <th>ID</th>
            <th>이름</th>
            <th>전화번호</th>
            <th>이메일</th>
            <th>등록일자</th>
            <th>액션</th>
            ${tableRow}
            </table>
            ${template.footer()};
        `;
    }
}
