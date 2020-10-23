module.exports = {
    mainForm : function(){
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
            
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap" rel="stylesheet">
            <style>
                body{
                    font-family: 'Nanum Myeongjo', serif;
                    font-size:20px;
                    background-color:#F2F2F2;
                    }
            </style>
        </head>
        `;
    },
    navBar:     function(uname){
        return `
            <body>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <a class="navbar-brand" href="#">
                <img src="/img/hoseo.png" alt="호서직업능력개발원"
                    style="height: 40px; margin-left: 50px; margin-right: 100px;">
            </a>
            <ul class="nav mr-auto">
                <li class="nav-item nav-light">
                    <a class="nav-link" href="/bbs/list/1"><i class="fas fa-home"></i>&nbsp;홈&nbsp;&nbsp;&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/bbs/bid/write"><i class="far fa-edit"></i>&nbsp;글쓰기&nbsp;&nbsp;&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/user/getInfo"><i class="far fa-user"></i>&nbsp;사용자&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item ml-5">
                    <a class="nav-link" href="/"><i class="fas fa-sign-out-alt"></i>&nbsp;로그아웃</a>
                </li>
            </ul>
            <nav class="navbar navbar-light mr-4">
                <form class="form-inline" action="/bbs/search" method="post">
                    <input class="form-control mr-sm-2" type="search" placeholder="검색" aria-label="Search" name="keyword">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                </form>
            </nav>
            <div class="navbar-text fixed-right mr-3">
                ${uname}님 반갑습니다.
                </body>
            </div>
        </nav>
        `;
    },
    uploadScript: function(){
        return `
                <script>
            // Add the following code if you want the name of the file appear on select
            $(".custom-file-input").on("change", function () {
                var fileName = $(this).val().split("\\").pop();
                $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
            });
                </script>
`
    },

footer:function (){
    return `
        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center fixed-bottom">
            <span class="navbar-text">
                Copyright &copy; 2020 Hoseo Institute of Big Data
            </span>
        </nav>
</html> 
    `
    }
}

