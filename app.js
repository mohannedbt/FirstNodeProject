const express = require('express');
const path = require('path');  // <-- require path module
const myapp = express();
const port = 9000;

myapp.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

myapp.listen(port, () => {
  console.log("miaw you started a project xD");
});
