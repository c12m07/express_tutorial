const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "funciona" });
});

app.post("/suma", (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = num1 + num2;
  res.send({ message: resultado });
});

app.post("/resta", (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = num1 - num2;
  res.send({ message: resultado });
});

app.post("/multi", (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = num1 * num2;
  res.send({ message: resultado });
});

app.post("/division", (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = num1 / num2;
  res.send({ message: resultado });
});

app.post("/sonIguales", (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 === num2) {
    res.send({ message: "Son iguales" });
  } else {
    res.send({ message: "No son iguales" });
  }
});

app.post("/esPar", (req, res) => {
  const num1 = req.body;

  if (num1 % 2 === 0){
    res.send({ message: "Es par" });
  } else {
    res.send({ message: "Es no es par" });
  }
});

app.post("/esImpar", (req, res) => {
  const num1 = req.body;

  if (num1 % 2 === 1){
    res.send({ message: "Es impar" });
  } else {
    res.send({ message: "Es no es impar" });
  }
});

app.listen(3002, () => {
  console.log("Server is working");
});
