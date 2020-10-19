const template = require('./maintemplate')

module.exports.updateForm = function(rows) {
    
    return `
        <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Girl Group</title>
    </head>
    <body>
        <h1>사용자 수정</h1>
        <hr>
        <form action = "/update" method ="post">
            <input type="hidden" name="uid" value="${rows.uid}">
            <table>
                <tr>
                    <td><label for = "uid">ID</label></td>
                    <td><input type = "text" name="uid" id ="uid" value="${rows.uid}"/></td>
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
                    <td colspan="2"><input type = "submit" value="수정"/></td>
                </tr>
            </table>
        </form>
    </body>
    </html>
    `
}
// update 간에는 hidden으로 sid 값을 하나 더 줘야함.