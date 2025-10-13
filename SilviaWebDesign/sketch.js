let table;
let filteredRows = [];

function preload() {
  // Carico il file csv
  table = loadTable("dataset.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 400);
  
  
// leggo tutte le righe
  for (let i = 0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);

// estraggo i valori numerici delle colonne
    let col0 = Number(row.get("column0"));
    let col1 = Number(row.get("column1"));
    let col2 = Number(row.get("column2"));
    let col3 = Number(row.get("column3"));
    let col4 = Number(row.get("column4"));
    

// se nelle righe c'è un NaN continua - per non falsare il filtro    

if (!Number.isFinite(col1) || !Number.isFinite(col2)) {
      continue; 
    }

// se nelle restanti righe c'è una colonna NaN leggi come 0
if (!Number.isFinite(col0)) col0 = 0;
if (!Number.isFinite(col3)) col3 = 0;
if (!Number.isFinite(col4)) col4 = 0;


// applico le condizioni 
    if (math.smaller(col2, 0) && math.isInteger(col1) && math.largerEq(col1, 10) && math.smaller(col1, 50)) {
//  prendo solo le righe valide
  filteredRows.push(row);
}

    
  }

 // Debug
  print("Totale righe CSV:", table.getRowCount());
  print("Righe filtrate:", filteredRows.length);
  print(filteredRows.slice(0, 5)); // mostro le prime 5 righe per verificare 
}

function draw() {
  background(220);
  
}