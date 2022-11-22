const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "e-clinic2",
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server rodando");
});

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  let SQL = "INSERT INTO usuarios (name, email, password) VALUES (?,?,?)";

  db.query(SQL, [name, email, password], (err, result) => {
    if (err != null) {
      res.send("O email já existe em nossa base de dados!");
    } else {
      res.send("Email cadastrado com sucesso!");
    }
  });
});

app.post("/login", (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        //  console.log("Logado com sucesso!");
        res.send("Usuário logado com sucesso!");
      } else {
        //  console.log("Conta não encontrada em nossa base de dados!");
        res.send("Conta não encontrada em nossa base de dados!");
      }
    }
  );
});

app.post("/agendar", (req, res) => {
  const { nome } = req.body;
  const { celular } = req.body;
  const { convenio } = req.body;
  const { carteira } = req.body;
  const { unidade } = req.body;
  const { especialidade } = req.body;
  const { dtconsulta } = req.body;

  let SQL =
    "INSERT INTO consultas (nome, celular, convenio, carteira, unidade, especialidade, dtconsulta) VALUES (?,?,?,?,?,?,?)";

  db.query(
    SQL,
    [nome, celular, convenio, carteira, unidade, especialidade, dtconsulta],
    (err, result) => {
      if (err != null) {
        res.send(err);
      } else {
        res.send(
          "A consulta foi agendada em nosso sistema. Por favor, comparecer no dia com a carteira do convênio e documento com foto."
        );
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Rodando o servidor...");
});
