const express = require("express");
const server = express();4
const PORT = 9321;

server.listen(PORT, () => console.log(`SERVER PORT IS ${PORT}`))

server.get("/", (req, res) => {
    res.send({
        ok: true,
        code: 200,
        message: "salom "

    })
})