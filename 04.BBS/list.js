const template = require('./view/maintemplate')
const ut = require('./util')

module.exports.mainForm = function (navBar, data, pageNo, startPage, endPage, totalPage) {
        let trs = '';
        for (let row of data) {
            let displayTime = ut.getDisplayTime(row.modTime);
        let title = (row.replyCount == 0) ? row.title :
            `${row.title}<span class="text-danger">[${row.replyCount}]</span>`;
        trs += `<tr class="d-flex">
                    <td class="col-1" style="text-align: center;">${row.bid}</td>
                    <td class="col-6"><a href="/bbs/bid/${row.bid}"><strong>${title}</strong></a></td>
                    <td class="col-2" style="text-align: center;">${row.uname}</td>
                    <td class="col-2" style="text-align: center;">${displayTime}</td>
                    <td class="col-1" style="text-align: center;"><i class="far fa-comment-alt"></i>&nbsp;&nbsp;${row.replyCount}</td>
                    <td class="col-1" style="text-align: center;"><i class="far fa-eye"></i>&nbsp;&nbsp;${row.viewCount}</td>
                </tr>
        `;
        }
        let leftPage = (pageNo > 10) ? `/bbs/list/${Math.floor(pageNo/10) * 10}` : '#';
        let pages = `<li class="page-item">
                        <a class="page-link active" href="${leftPage}" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span></a>
                    </li>`;
        for (let page = startPage; page <= endPage; page++) {
            if (page === pageNo)
                pages += `<li class="page-item active" aria-current="page">
                            <span class="page-link">
                                ${page}<span class="sr-only">(current)</span>
                            </span>
                        </li>`;
            else
                pages += `<li class="page-item"><a class="page-link" href="/bbs/list/${page}">${page}</a></li>`;
        }
        let rightPage = (endPage < totalPage) ? `/bbs/list/${Math.ceil(pageNo/10)*10 + 1}` : '#';
        pages += `<li class="page-item">
                    <a class="page-link" href="${rightPage}" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span></a>
                </li>`;
        return `

        ${template.mainForm}
        ${navBar}

<div class="container" style="margin-top: 90px;">  
    <div class="row">
        <div class="col-12">
            <h3>게시글 목록</h3>
            <hr>
        </div>
        <div class="col-1"></div>
        <div class="col-12">
            <table class="table table-condensed table-hover">
                <tr class="table-dark text-dark d-flex">
                    <td class="col-1" style="text-align: center;"><strong>번호</strong></td>
                    <td class="col-6" style="text-align: center;"><strong>제목</strong></td>
                    <td class="col-2" style="text-align: center;"><strong>글쓴이</strong></td>
                    <td class="col-2" style="text-align: center;"><strong>날짜/시간</strong></td>
                    <td class="col-1" style="text-align: center;"><strong>댓글수</strong></td>
                    <td class="col-1" style="text-align: center;"><strong>조회수</strong></td>
                </tr>
                ${trs}
            </table>
            <ul class="pagination justify-content-center">
                ${pages}
            </ul>
        </div>
        <div class="col-1"></div>
    </div>
</div>

${template.footer()};
        `;
}
