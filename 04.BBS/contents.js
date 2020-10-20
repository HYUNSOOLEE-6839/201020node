const template = require('./view/maintemplate')

module.exports = {
    viewForm : function(navBar, rows, replies) {
        let content = rows.content.replace(/\n/g, '<br>');
        let cards = '';
        for (let reply of replies) {
            cards += (reply.isMine == 0) ?
                    `<div class="card bg-light text-dark mt-1" style="margin-right: 45%;">` :
                    `<div class="card text-right mt-1" style="margin-left: 60%;">`;
            cards += `
                        <div class="card-body">
                            ${reply.uname}&nbsp;&nbsp;${reply.regTime}<br>
                            ${reply.content.replace(/\r/g, '<br>')}
                        </div>
                    </div>`;
        }
        return`
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

        <div class="container" style="margin-top: 90px;">  
        <div class="row">
            <div class="col-1"></div>
            <div class="col-7">
                <h4>${rows.title}</h4>
                <h6>글번호: ${rows.bid} | ${rows.modTime}</h6>
            </div>
            <div class="col-3" style="text-align: right;">
                <h4>${rows.uname}</h4>
                <h6>조회 ${rows.viewCount+1}&nbsp;&nbsp;댓글 ${rows.replyCount}</h6>
            </div>
            <div class="col-1"></div>
            <div class="col-12"><hr></div>
            <div class="col-1"></div>
            <div class="col-10">
                <p>${rows.content}</p>
            </div>
            <div class="col-1"></div>
            <div class="col-10"></div>
            <div class="col-2">
                <span style="font-size: 1.5em;">
                    <a href="/bbs/update/${rows.bid}/uid/${rows.uid}"><i class="fas fa-edit"></i></a>&nbsp;
                    <a href="/bbs/delete/${rows.bid}/uid/${rows.uid}"><i class="fas fa-trash-alt"></i></a>
                </span>
            </div>
            <div class="col-12"><hr></div>
            <div class="col-1"></div>
            <div class="col-10">
                ${rows.cards}
                <form class="form-inline" action="/bbs/reply" method="post">
                    <input type="hidden" name="bid" value="${rows.bid}">
                    <input type="hidden" name="uid" value="${rows.uid}">
                    <label for="content" class="ml-5 mt-3 mr-3">댓글</label>
                    <textarea class="ml-3 mt-3 mr-3" id="content" name="content" rows="3" cols="80"></textarea>
                    <button type="submit" class="btn btn-primary ml-3 mt-3 mr-5">등록</button>
                </form>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
${template.footer()};
        `;
    }
}
