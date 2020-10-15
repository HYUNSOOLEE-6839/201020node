module.exports = {
header: function(){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>과제</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://fontawesome.com/icons/sign-out-alt?style=solid"></script>
</head>
<body>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <a class="navbar-brand" href="#" >
            <img src="img/호서.jpg" alt="호서직업능력개발원"
                style="height : 40px; margin-left : 50px; margin-right : 100px;">
    </a>
    <ul class="nav mr- auto">
        <li class="nav-item">
                <a class="nav-link" href='/'><i class="fas fa-home">홈</i></a>
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
        <div class ="row">
            <div class=col-2>
        <ul class="nav nav-pills flex-column nav-pills">
        <li class="nav-item">
            <a class="nav-link active" href="#">역사</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="2.활용.html">활용</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="3.안드로이드.html">안드로이드</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="4.아이폰.html">아이폰</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="5.샘플.html">샘플</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#s">20년 출시 휴대폰</a>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="6.최신.html">갤럭시 폴드 2</a>
            <a class="dropdown-item" href="6.최신.html">갤럭시 노트 20</a>
            <a class="dropdown-item" href="6.최신.html">아이폰 12</a>
            <a class="dropdown-item" href="6.최신.html">샤오미 10</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="7.외부링크.html">외부링크</a>
        </li>
        </ul>
    </div>
    </nav>
        <div class="container col-10">
                <h2 id = "역사"><a href="https://ko.wikipedia.org/wiki/스마트폰#역사" target="_blank">역사</a></h2>
                    <p>최초의 스마트폰은 사이먼(Symon)으로 추정된다. IBM사가 1992년에 설계하여 
                        그 해에 미국 네바다 주의 라스베이거스에서 열린 컴댁스에서 컨셉 제품으로 전시되었다.</p>
                        <div class="container">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <td><img src="img/사이먼1.png" class="img-thumbnail" alt="Simon 1" width="304" height="236"> </td>
                                    <td><img src="img/사이먼2.jpg" class="img-thumbnail" alt="Simon 2" width="304" height="236"> </td>
                                    <td><img src="img/사이먼3.jpg" class="img-thumbnail" alt="Simon 3" width="304" height="236"> </td>
                                </tr>
                        </table>
                        </div>`
},
footer : function (){
    return `
        <nav class="navbar navbar-expand lg navbar-light bg-light justify-content-center fixed-bottom">
            <p class="text-secondary">Copyright<i class="far fa-copyright"></i> 2020 Hoseo Institute of Big Data</p>
        </nav>
    </body>
    </html>
            `
            }
    }