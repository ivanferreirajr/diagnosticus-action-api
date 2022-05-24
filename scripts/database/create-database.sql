// versao PT-BR

CREATE TABLE "turma" (
  "id" SERIAL PRIMARY KEY,
  "nome" varchar,
  "codigo_convite" varchar,
  "id_professor" int
);

CREATE TABLE "usuario" (
  "id" int PRIMARY KEY,
  "nome" varchar,
  "matricula" varchar,
  "email" varchar,
  "senha" varchar,
  "tipo_usuario" varchar,
  "id_turma" int
);

CREATE TABLE "simulacao" (
  "id" int PRIMARY KEY,
  "id_aluno" int,
  "id_caso_emergencia" int,
  "tempo_simulacao" int,
  "horario_inicio" datetime,
  "horario_fim" datetime,
  "timeout" boolean,
  "observacao" varchar,
  "nota" float
);

CREATE TABLE "diaginostico" (
  "id" int PRIMARY KEY,
  "id_simulacao" int,
  "tratamento" varchar,
  "codigo_cid" varchar
);

CREATE TABLE "caso_emergencia" (
  "id" int PRIMARY KEY,
  "id_turma" int,
  "id_paciente" int,
  "exame_solicitado" int,
  "id_queixa" varchar,
  "tempo_vida_paciente" int,
  "tempo_exame_pronto" int,
  "tempo_necessario" int,
  "descricao" text
);

CREATE TABLE "exame" (
  "id" int PRIMARY KEY,
  "tipo_exame" varchar,
  "nome_exame" varchar,
  "descricao" text
);

CREATE TABLE "queixa" (
  "id" int PRIMARY KEY,
  "tipo_queixa" varchar,
  "nome_queixa" varchar,
  "descricao" text
);

CREATE TABLE "cid" (
  "codigo" varchar PRIMARY KEY,
  "classificacao" varchar,
  "restr_sexo" varchar,
  "descricao" text,
  "descricao_abreviada" varchar,
  "tipo_usuario" varchar,
  "referencia" varchar
);

CREATE TABLE "paciente" (
  "id" int PRIMARY KEY,
  "nome" varchar,
  "hda" varchar,
  "raca" varchar,
  "estado_civil" varchar,
  "genero" varchar,
  "naturalidade" varchar,
  "profissao" varchar,
  "antecedentes_pessoais" text,
  "antecedentes_familiares" text,
  "historico_psicosocial" text
);

ALTER TABLE "usuario" ADD FOREIGN KEY ("id") REFERENCES "turma" ("id_professor");

ALTER TABLE "usuario" ADD FOREIGN KEY ("id_turma") REFERENCES "turma" ("id");

ALTER TABLE "simulacao" ADD FOREIGN KEY ("id_aluno") REFERENCES "usuario" ("id");

ALTER TABLE "simulacao" ADD FOREIGN KEY ("id_caso_emergencia") REFERENCES "caso_emergencia" ("id");

ALTER TABLE "diaginostico" ADD FOREIGN KEY ("id_simulacao") REFERENCES "simulacao" ("id");

ALTER TABLE "cid" ADD FOREIGN KEY ("codigo") REFERENCES "diaginostico" ("codigo_cid");

ALTER TABLE "caso_emergencia" ADD FOREIGN KEY ("id_turma") REFERENCES "turma" ("id");

ALTER TABLE "caso_emergencia" ADD FOREIGN KEY ("id_paciente") REFERENCES "paciente" ("id");

ALTER TABLE "exame" ADD FOREIGN KEY ("id") REFERENCES "caso_emergencia" ("exame_solicitado");

ALTER TABLE "queixa" ADD FOREIGN KEY ("id") REFERENCES "caso_emergencia" ("id_queixa");
