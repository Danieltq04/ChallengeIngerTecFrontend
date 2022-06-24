
/*Crear una base de datos en Mysql en la maquina local que se llame “miPrimerNombre”
+ “yyyyMMdd”, guardar los scripts usados para crear las tablas*/
DROP DATABASE Luis20220624;
CREATE DATABASE Luis20220624;
USE Luis20220624;

/*
- Debe tener las siguientes tablas:
	o tresource_type:
		 idResourceType int autoincrement PK
		 created datetime
		 descrip varchar(200)
	o tresource:
		 idResource int autoincrement PK
		 created datetime
		 descrip varchar(200)
		 idResourceType int FK
*/
CREATE TABLE tresource_type (
    /* Atributo Característico de la Tabla */
	idResourceType INT AUTO_INCREMENT,
    created DATETIME,
    descrip VARCHAR(200),
    
	/* Clave Primaria (PK) */
    PRIMARY KEY (idResourceType)
);

CREATE TABLE tresource (
	/* Atributo Característico de la Tabla */
	idResource INT AUTO_INCREMENT,
    created DATETIME,
    descrip VARCHAR(200),
	idResourceType INT,
    
	/* Clave Primaria (PK) */
	PRIMARY KEY (idResource),
    
	/* Clave Lejana (FK) */
    FOREIGN KEY (idResourceType) REFERENCES tresource_type (idResourceType)
);

/*
- Las tabla de tipos de recursos debe tener los siguientes valores: (guardar los inserts
utilizados para poblar la tabla)
	o Vídeo
	o PDF Documentación
	o PDF Enunciado
	o PDF Solución
*/
INSERT
    INTO
        tresource_type(created, descrip)
    VALUES
        ( '2021-10-16', 'Vídeo'),
        ( '2022-4-02', 'PDF Documentación'),
        ( '2022-5-26', 'PDF Enunciado'),
        ( '2020-09-12', 'PDF Solución');
        
/*
- Se deben crear al menos 6 registros en la tabla tresource y que estén clasificados
según los datos de tresource_type. (guardar los inserts utilizados para poblar la tabla)
*/
INSERT
    INTO
        tresource(created, descrip,idResourceType)
    VALUES
        ( '2021-10-16', 'Curso React video 1',1),
        ( '2022-4-02', 'Enunciado examen técnico',3),
		( '2021-10-16', 'Curso React video 2',1),
		( '2022-5-26', 'Documentación de requisitos',2),
		( '2022-5-26', 'Documentación C#',2),
        ( '2020-09-12', 'Solución examen técnico',4),
        ( '2020-09-12', 'Solución alternativa examen técnico',4),
		( '2021-10-16', 'Curso React video 3',1);

/*
Se debe hacer una query que cuente cuantos registros hay por tipo de recurso.
(guardar la query)
*/
SELECT 
    TT.idResourceType AS 'ID Resource Type',
    TT.descrip     AS 'Description',
    COUNT(*)       AS 'Resources'
FROM
    tresource   AS T
    INNER JOIN tresource_type AS TT
    ON
    (
        T.idResourceType = TT.idResourceType
    )
GROUP BY
    TT.idResourceType
    
