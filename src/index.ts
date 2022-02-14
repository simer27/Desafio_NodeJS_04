/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Aluno } from "./aluno";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05

  const entrada = require("prompt-sync")({ sigint: true });
  let aluno = new Aluno();

  let alunos: Array<Aluno> = [];
  var q: number = 0;
  console.log("");
  console.log("DESAFIO 4.0");
  console.log("");
  q = parseInt(entrada("Qual a quantidade de alunos nesta sala? "));
  var name: string;
  var nota: number;
  var idade: number;
  for (let i = 1; i <= q; i++) {
    name = entrada(`Nome do ${i}º aluno(a): `);
    nota = parseFloat(entrada(`Nota do aluno(a) ${name}: `));
    idade = parseInt(entrada(`Qual a Idade do Aluno(a) ${name}:`));
    console.log("");

    alunos.push({
      nome: name,
      idade: idade,
      nota: nota,
    });
  }
  console.log("");
  console.log(`LISTA DE ALUNOS:`);
  console.log(alunos);

  var soma = alunos.reduce((a, b) => a + b.nota, 0);
  var media = soma / q;

  console.log("");
  console.log(`SOMA TOTAL DAS NOTAS: ${soma}`);
  console.log("");
  console.log(`MÉDIA DA CLASSE: ${media}`);
});
