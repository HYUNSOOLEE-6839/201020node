const template = require('./regScreen')

module.exports.test = function () {
    return `
        ${regScreen.header()};
<div class="container" style="margin-top:90px;">
    <h1>My Icons <i class="fas fa-heart"></i></h1>
    <p>An icon along with some text: <i class="fas fa-thumbs-up"></i></p> 
</div>
    
<div class="container">
    
    
</div>

        ${regScreen.footer()};
`
};