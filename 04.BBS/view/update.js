const template = require('../view/maintemplate')

module.exports.updateForm = function(rows) {
    return `
    ${template.mainForm()}
    ${template.navBar()}
    <div class="container" style="margin-top: 90px;">  
    <div class="row">
        <div class="col-12">
            <h3>사용자정보 수정</h3>
            <hr>
        </div>
        <div class="col-3"></div>
        <div class="col-7">
            <form action = "/user/update" method ="post" enctype="multipart/form-data">
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
                    <td><label for="profile_img">사진</label><td>
                        <td colspan="2">
                            <div class = "custom-file mb-4 border">
                                <input type='file' class = "custom-file-input" name='profile_img' accept='upload/jpg, upload/png, upload/jpeg' />
                                <label class="custom-file-label" for="profile_img">업로드할 사진 파일 선택</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center;">
                        <input type = "submit" value="수정"/></td>
                    </tr>
                </table>
            </form>
        
    </div>
</div>
    </html>
    ${template.footer()}
    `
}
// update 간에는 hidden으로 sid 값을 하나 더 줘야함.
