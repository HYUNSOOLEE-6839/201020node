const template = require('./view/maintemplate')

module.exports.mainForm = function (navBar) {
        
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
        ${template.navBar}

    <div class="container" style="margin-top:90px;">
    </div>
        <div class="container col-10">
            
        <form action="/bbs/bid/write" method="post">
        <table class="table table-borderless">
        <tr>
            <td><label for="title" class="col-form-label">제목</label></td>
            <td><input type="text" name="title" id="title" class="form-control"></td>
        </tr>
        <tr>
            <td><label for="content" class="col-form-label">내용</label></td>
            <td><textarea name="content" id="content" class="form-control" rows="10"></textarea></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align: center;">
                <input class="btn btn-primary" type="submit" value="제출">
                <input class="btn btn-secondary" type="reset" value="취소">
            </td>
        </tr>
    </table>
</form>
        </div>
            <nav class="navbar navbar-expand lg navbar-light bg-light justify-content-center fixed-bottom">
                <p class="text-secondary">Copyright<i class="far fa-copyright"></i> 2020 Hoseo Institute of Big Data</p>
            </nav>
</body>
</html>
        `;
}
