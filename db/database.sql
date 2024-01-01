CREATE DATABASE generosos;

use generosos;

CREATE TABLE empleo(
    id INT NOT NULL AUTO_INCREMENT ,
    varon VARCHAR(100),
    textarea VARCHAR(200),
    PRIMARY KEY (id)
);
DESCRIBE empleo;

INSERT INTO empleo VALUES
(1,'carlos','Soy carlos'),
(2,'thomas','Soy thomas'),
(3,'shelby','Soy shelby');