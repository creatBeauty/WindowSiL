const express = require('express');
const path = require('path');
const app = express();
const PORT = 5500;

// Указываем папку для статических файлов
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html')); // Укажите ваш HTML файл
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://127.0.0.1:${PORT}`);
});
