CREATE TABLE pessoas(
    id INT NOT NULL Primery KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES ('John Lennon', '1940-10-09')
INSERT INTO pessoas (nome, nascimento) VALUES ('Paul McCartney', '1942-06-18')
INSERT INTO pessoas (nome, nascimento) VALUES ('Ringo Star', '1940-07-07')
INSERT INTO pessoas (nome, nascimento) VALUES ('George Harrison', '1943-02-25')

