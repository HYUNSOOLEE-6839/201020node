const template = require('./maintemplate')

module.exports.updateForm = function(rows) {
    return `
    ${template.mainForm()}
    ${template.navBar}
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