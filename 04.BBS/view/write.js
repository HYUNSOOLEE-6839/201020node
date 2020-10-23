const template = require('../view/maintemplate')

module.exports.mainForm = function (navBar) {
        
        return `
        ${template.mainForm()}
        <script src="/ckeditor/ckeditor.js"></script>
        ${navBar}

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
        ${template.footer}
    `;
}
