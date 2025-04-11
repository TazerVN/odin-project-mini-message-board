const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Message Board", messages: messages })
);

indexRouter.get("/messages/:id", (req, res) => {
  res.render("message", {
    author: messages[req.params.id].user,
    message: messages[req.params.id].text,
    date: messages[req.params.id].added,
  });
});

indexRouter.post("/new", (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});

module.exports = indexRouter;
