const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
