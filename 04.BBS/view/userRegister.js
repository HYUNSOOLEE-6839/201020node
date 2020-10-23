const template = require('./template')

module.exports.register = function () {
    return `
        ${template.header()};
<div class="container" style="margin-top:90px;">
    <div class="row">
    <div class ="col-12">
        <h3>회원 가입</h3>
        <hr>
    </div>
    <div class="col-3"></div>
    <div class="col-6">
        <form action="/user/register" method="post">
            <table class="table table-borderless">
                <tr>
                    <td><label for ="uid">사용자 ID &nbsp; <span class="text-danger">*</span></label></td>
                    <td><input type="text" name="uid" id="uid"></td>
                    
                </tr>
                <tr>
                    <td><label for ="pwd">패스워드&nbsp;<span class="text-danger">*</span></label></td>
                    <td><input type="password" name="pwd" id="pwd"></td>
                </tr>
                <tr>
                    <td><label for ="pwd2">패스워드 확인&nbsp;<span class="text-danger">*</span></label></td>
                    <td><input type="password" name="pwd2" id="pwd2"></td>
                </tr>
                <tr>
                    <td><label for ="name">이름&nbsp;<span class="text-danger">*</span></label></td>
                    <td><input type="text" name="uname" id="uname"></td>
                </tr>
                <tr>
                    <td><label for ="tel">전화번호</label></td>
                    <td><input type="text" name="tel" id="tel"></td>
                </tr>
                <tr>
                    <td><label for ="email">이메일</label></td>
                    <td><input type="text" name="email" id="email"></td>
                </tr>
                <tr>
                    <td><label for="photo">사진</label></td>
                        <td colspan="2">
                            <div class = "custom-file mb-3 border">
                            <input type='file' class = "custom-file-input" name='photo'/>
                            <label class="custom-file-label" for="photo">업로드할 사진 파일 선택</label>
                </tr>
                    <td colspan ="2" style="text-align : center;">
                        <input class="btn btn-primary" type = "submit" value="가입">
                        <input class="btn btn-danger" type = "reset" value="취소">
                    </td>
                </tr>
            </table>
        </form>
    </div>
    <div class="col-3"></div>
    </div>
</div>
    
<div class="container">
    
    
</div>

        ${template.footer()};
`
};