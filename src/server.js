const { resolve } = require('path');
const express = require('express');
const app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(express.static(resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../dist/index.html'));
});

app.listen(3000, () => {
  console.log('Express app listening on port 3000...');
});

