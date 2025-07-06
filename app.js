const express = require('express');
const app = express();

// 🔥 Use the correct port
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
