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
            <a href = "/update/${row.sid}">수정 </a>
            <a href = "/delete/${row.sid}">삭제</a>
            </td>
            </tr>
            `
        }
        return`
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://fontawesome.com/icons/sign-out-alt?style=solid"></script>
    <title>게시물</title>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
<a class="navbar-brand" href="#" >
    <img src="img/호서.jpg" alt="호서직업능력개발원"
    style="height : 40px; margin-left : 50px; margin-right : 100px;">
</a>
<ul class="nav mr- auto">
  <li class="nav-item">
        <a class="nav-link" href='/bbs'><i class="fas fa-home">홈</i></a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href='/'><i class="fas fa-home">글 쓰기</i></a>
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
        </div>
            <nav class="navbar navbar-expand lg navbar-light bg-light justify-content-center fixed-bottom">
                <p class="text-secondary">Copyright<i class="far fa-copyright"></i> 2020 Hoseo Institute of Big Data</p>
            </nav>
</body>
</html>
        `;
    }
}
