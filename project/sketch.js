



const container = document.querySelector('.container');


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', function() {
    cell.style.backgroundColor = "#fff";
    document.getElementById('hover-number').innerHTML = hovers;
    console.log(hovers)
    });
    
  };
};
makeRows(16, 16);


const divH1 = document.createElement('h1');
divH1.textContent = 'Welcome to PAC-MAN. Try to make it between the bricks without lighting them up!';
divH1.setAttribute('style', 'position: absolute; margin-top: -1.5em; margin-left: 30%;');


container.appendChild(divH1);