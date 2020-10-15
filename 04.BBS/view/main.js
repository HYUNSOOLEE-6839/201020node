const template = require('./maintemplate')

module.exports.bbs = function () {
    return `
        ${template.header()};
<div class="container" style="margin-top:90px;">
    <div class="row">
    <div class ="col-12">
        <h3>메인 화면</h3>
        <hr>
    </div>
    <div class="col-3"></div>
    <div class="col-6">
        
    </div>
    <div class="col-3"></div>
    </div>
</div>
    
<div class="container">
    
    
</div>

        ${template.footer()};
`
};