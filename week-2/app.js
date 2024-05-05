const http = require('http');
const path = require('path');
const {defaults, game, main, vote} = require("./modules/controllers")

// ...импорты и настройки

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      main(res, "/index.html", ".html");
      break;
    case "/game":
      game(res);
      break;
    case "/vote":
      vote(req, res);
      break;
    default:
      defaults(res, url);
    }
  });

server.listen(3005);