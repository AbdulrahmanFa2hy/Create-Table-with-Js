let row = document.querySelector(".row");
let coloms = document.querySelector(".coloms");
let btn = document.querySelector("button");


btn.addEventListener("click", createTable);

function createTable(){
  let table = document.createElement("table");
  document.body.appendChild(table);
  for(let i = 0; i < +row.value; i ++){
    let row = document.createElement("tr");
    table.appendChild(row);
    for(let i = 0; i < +coloms.value; i++){
      let colom = document.createElement("td");
      let txt = document.createTextNode("item data");
      colom.appendChild(txt);
      row.appendChild(colom)
    }
  }
}


