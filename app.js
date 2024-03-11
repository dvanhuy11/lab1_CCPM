const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Xử lý yêu cầu POST từ form đăng nhập
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Thay thế với cơ chế xác thực thực tế
    if (username === "user" && password === "pass") {
        // Chuyển hướng đến trang đăng nhập thành công
        res.redirect('/success.html');
    } else {
        // Chuyển hướng đến trang đăng nhập với thông báo lỗi
        res.send('Login Failed');
    }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
