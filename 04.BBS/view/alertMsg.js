module.exports.alertMsg = function(message, url){
    return`
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Alert Message</title>
    </head>
    <body>
        <script>
            let message = '${message}';
            let returnUrl = '${url}';
            alert(message);
            document.location.href = returnUrl;
        </script>
    </body>
    </html>
    `
}

/* alertMsgHistory: function(message){
    return `        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Alert Message</title>
    </head>
    <body>
        <script>
            let message = '${message}';
            window.history.go(-1)`
} */