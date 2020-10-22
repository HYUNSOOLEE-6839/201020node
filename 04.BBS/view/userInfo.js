const template = require('../view/maintemplate')

module.exports = {
    InfoForm : function(rows){
        let tableRow = '';
        for(let row of rows){
            tableRow += 
            `<tr>
            <td>${row.uid}  </td>
            <td>${row.uname}</td>
            <td>${row.tel}</td>
            <td>${row.email}</td>
            <td>${row.regDate}</td>
            <td>
            <a href = "/user/update/${row.uid}">수정 </a>
            <a href = "/user/delete/${row.uid}">삭제</a>
            </td>
            </tr>
            `
        }
        return `
        ${template.mainForm()}
        ${template.navBar()}

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
            ${template.footer()}
        `;
    }
}
