const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.use((req, res) => {
    res.status(404).sendFile(`${__dirname}/pages/404.html`);
});

app.listen(PORT, () => {
    console.log(`Server running ap http://localhost:${PORT}`);
});
