module.exports = {
    mainForm : function(rows){
        let tableRow = '';
        for (let row of rows){
            tableRow += `<tr>
                            <td>${row.sid}</td>
                            <td>${row.NAME}</td>
                            <td>${row.debut}</td>
                            <td>${row.hit_song_id}</td>
                            <td>
                                <a href = "/update/${row.sid}">수정 </a>
                                <a href = "/delete/${row.sid}">삭제</a>
                            </td>
                        </tr>`;
        }
        return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>걸그룹 조회</title>
</head>
<body>
    <h3>걸그룹 조회</h3>
    <hr>
    <table>
        <tr>
            <th>순서</th>
            <th>이름</th>
            <th>데뷔년도</th>
            <th>히트곡</th>
            <th>액션</th>
        </tr>
        ${tableRow}
    </table>
</body>
</html>
        `;
    }
}