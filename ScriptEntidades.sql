USE BD_REYES_ROGER;

CREATE TABLE Formulario (
    Id INT PRIMARY KEY IDENTITY,
    Nombre NVARCHAR(100) NOT NULL
);

CREATE TABLE Campo (
    Id INT PRIMARY KEY IDENTITY,
    FormularioId INT FOREIGN KEY REFERENCES Formulario(Id),
    "Label" NVARCHAR(100) NOT NULL,
    "Type" NVARCHAR(50) NOT NULL, -- 'text', 'number', 'date', etc.
    "Required" BIT NOT NULL,
    Orden INT NOT NULL
);


