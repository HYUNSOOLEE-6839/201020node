module.exports.insertForm = function() {
    return `
        <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Girl Group</title>
    </head>
    <body>
        <h1>Girl Group</h1>
        <hr>
        <form action = "/insert" method ="post">
            <table>
                <tr>
                    <td><label for = "sid">순서</label></td>
                    <td><input type = "text" name="sid" id ="sid"/></td>
                </tr>
                <tr>
                    <td><label for = "NAME">이름</label></td>
                    <td><input type = "text" name="NAME" id ="NAME"/></td>
                </tr>
                <tr>
                    <td><label for = "debut">데뷔년도</label></td>
                    <td><input type="text" name ="debut" id = "debut"/></td>
                </tr>
                <tr>
                    <td><label for = "hit_song_id">히트곡</label></td>
                    <td><input type="text" name ="hit_song_id" id = "hit_song_id"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input type = "submit" value ="제출"/></td>
                </tr>
            </table>
        </form>
    </body>
    </html>
    `
}