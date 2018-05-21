CREATE DATABASE "Fabrica_bojo"
TEMPLATE = template0
ENCODING 'WIN-1252'
CONNECTION LIMIT -1;

CREATE TABLE tb_pedido(
    id_pedido	SERIAL PRIMARY KEY,
    dt_pedido	DATETIME,
    num_pedido	INTEGER,
    cor		VARCHAR(32),
    quantidade	INTEGER
);

CREATE TABLE tb_custo_materia_prima(
    id_mp		SERIAL PRIMARY KEY,
    nome		VARCHAR(32),
    custo		NUMERIC(7,2)
);

INSERT INTO tb_custo_materia_prima (NOME, CUSTO)
VALUES
('Tecido', 5.00),
('Espuma', 2.00);