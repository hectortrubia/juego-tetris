const boardWidth = 10;
const boardHeight = 20;

const divBody = document.createElement("div");
divBody.classList.add("body_container");
document.body.appendChild(divBody);

const headerEl = document.createElement("header");
divBody.appendChild(headerEl);

const divBodyHeader = document.createElement("div");
divBodyHeader.classList.add("body_container--header");
headerEl.appendChild(divBodyHeader);

const divLogo = document.createElement("div");
divLogo.classList.add("body_container--logo");
divBodyHeader.appendChild(divLogo);

const imgHeader = document.createElement("img");
imgHeader.classList.add("body_container--img");
imgHeader.src = "./src/tetris-logo.jpg";
divLogo.appendChild(imgHeader);

const mainEl = document.createElement("main");
divBody.appendChild(mainEl);

const divMain = document.createElement("div");
divMain.classList.add("main");
mainEl.appendChild(divMain);

const divMainSplit = document.createElement("div");
divMainSplit.classList.add("main_split");
divMain.appendChild(divMainSplit);

const divContainerTetris = document.createElement("div");
divContainerTetris.classList.add("container_tetris");
divMainSplit.appendChild(divContainerTetris);

// El de arriba es el div que contiene los 200 divs con los 200 mini divs dentro.

drawBoard("cells", "cells_padding", boardWidth, boardHeight);

function drawBoard(mainContainerClass, secondContainerClass, width, heigth) {
  for (let i = 0; i < width * heigth; i++) {
    const drawBoardOutboardCells = document.createElement("div");
    drawBoardOutboardCells.classList.add(mainContainerClass);
    drawBoardOutboardCells.id = i; //añadimos una clase con un numero para poder seleccionar luego la celda
    divContainerTetris.appendChild(drawBoardOutboardCells);

    const drawBoardInnerCells = document.createElement("div");
    drawBoardInnerCells.classList.add(secondContainerClass);
    drawBoardOutboardCells.appendChild(drawBoardInnerCells);
  }
}
//cada elemento de la clase cell va a tener una clase del 0 al 199 que indicará la posicion de ese elemnento en el tablero
//de esta forma podremos seleccionar por el valor de esa clase. Es decir, nuestro div con la clase 4. lo seleccionaremos asi:
// document.querySelector('.${posición de nuestra pieza}') --> Lo haremos con un forEach
//------------------------------------------------------------------------------------

const divMini = document.createElement("div");
divMini.classList.add("mini_container");
divMain.appendChild(divMini);

const scoreh3 = document.createElement("h3");
scoreh3.textContent = "Score";
scoreh3.classList.add("mini_container--score");
divMini.appendChild(scoreh3);

const scoreCounter = document.createElement("div");
scoreCounter.textContent = "0";
scoreCounter.classList.add("mini_container--number");
divMini.appendChild(scoreCounter);

const divMiniGrid = document.createElement("div");
divMiniGrid.classList.add("mini_container--grid");
divMini.appendChild(divMiniGrid);

// el de arriba es el div que contiene los 16 divs con los 16 mini divs dentro. El minigrid va de 58-59
drawMiniBoard();

function drawMiniBoard() {
  for (let i = 0; i < 16; i++) {
    const drawBoardOutboardCells = document.createElement("div");
    drawBoardOutboardCells.classList.add("cells");
    drawBoardOutboardCells.id = `m${i}`; //añadimos una clase con un numero para poder seleccionar luego la celda
    divMiniGrid.appendChild(drawBoardOutboardCells);

    const drawBoardInnerCells = document.createElement("div");
    drawBoardInnerCells.classList.add("cells_padding");
    drawBoardOutboardCells.appendChild(drawBoardInnerCells);
  }
}
//------------------------------------------------

const div3Arrows = document.createElement("div");
div3Arrows.classList.add("mini_container--arrows");
divMini.appendChild(div3Arrows);

const leftArrow = document.createElement("i");
leftArrow.classList.add("fas", "fa-arrow-left");
div3Arrows.appendChild(leftArrow);

const rightArrow = document.createElement("i");
rightArrow.classList.add("fas", "fa-arrow-right");
div3Arrows.appendChild(rightArrow);

const downArrow = document.createElement("i");
downArrow.classList.add("fas", "fa-arrow-down");
div3Arrows.appendChild(downArrow);

const span = document.createElement("span");
span.classList.add("move");
span.textContent = "Move";
div3Arrows.appendChild(span);

const divRotate = document.createElement("div");
divRotate.classList.add("mini_container--rotate");
divMini.appendChild(divRotate);

const upArrow = document.createElement("i");
upArrow.classList.add("fas", "fa-arrow-up");
divRotate.appendChild(upArrow);

const rotateArrow = document.createElement("span");
rotateArrow.classList.add("rotate");
rotateArrow.textContent = "Rotate";
divRotate.appendChild(rotateArrow);

// console.log(divBody);

// Creo los Arrays de los Tetrominoe.

const tetrominoI = [
  [0, boardWidth, boardWidth * 2, boardWidth * 3],
  [0, 1, 2, 3],
];
const tetrominoL = [
  [0, 1, boardWidth + 1, boardWidth * 2 + 1],
  [2, boardWidth, boardWidth + 1, boardWidth + 2],
  [0, boardWidth, boardWidth * 2, boardWidth * 2 + 1],
  [0, 1, 2, boardWidth],
];
const tetrominoS = [
  [0, boardWidth, boardWidth + 1, boardWidth * 2 + 1],
  [1, 2, boardWidth, boardWidth + 1],
];
const tetrominoZ = [
  [1, boardWidth, boardWidth + 1, boardWidth * 2],
  [0, 1, boardWidth + 1, boardWidth + 2],
];
const tetrominoJ = [
  [1, boardWidth + 1, boardWidth * 2, boardWidth * 2 + 1],
  [0, boardWidth, boardWidth + 1, boardWidth + 2],
  [0, 1, boardWidth, boardWidth * 2],
  [0, 1, 2, boardWidth + 2],
];
const tetrominoO = [
  [0, 1, boardWidth, boardWidth + 1]
];

const tetrominoT = [
  [1, boardWidth, boardWidth + 1, boardWidth * 2 + 1],
  [1, boardWidth, boardWidth + 1, boardWidth + 2],
  [0, boardWidth, boardWidth + 1, boardWidth * 2],
  [0, 1, 2, boardWidth + 1],
];
const tetrominoeList = [
  tetrominoI,
  tetrominoL,
  tetrominoS,
  tetrominoZ,
  tetrominoJ,
  tetrominoO,
  tetrominoT,
];

const tetrominoIMini = [
  [1, 5, 9, 13],
  [4, 5, 6, 7],
];
const tetrominoLMini = [
  [1, 2, 6, 10],
  [6, 8, 9, 10],
  [1, 5, 9, 10],
  [4, 5, 6, 8],
];
const tetrominoSMini = [
  [1, 5, 6, 10],
  [5, 6, 8, 9],
];
const tetrominoZMini = [
  [2, 5, 6, 9],
  [4, 5, 9, 10],
];
const tetrominoJMini = [
  [2, 6, 9, 10],
  [4, 8, 9, 10],
  [1, 2, 5, 9],
  [4, 5, 6, 10, ]
];
const tetrominoOMini = [
  [5, 6, 9, 10]
];

const tetrominoTMini = [
  [2, 5, 6, 10],
  [1, 4, 5, 6],
  [1, 5, 6, 9],
  [4, 5, 6, 9],
];
const tetrominoeListMini = [
  tetrominoIMini,
  tetrominoLMini,
  tetrominoSMini,
  tetrominoZMini,
  tetrominoJMini,
  tetrominoOMini,
  tetrominoTMini,
];

let currentTetrominoeMini = [];

// . Genero la funcion drawTetrominoeInMiniBoard(tetrominoe): pinta el tetromino de entrada dentro del
// // miniboard, suponiendo que es la posición 0.


function generateRandomTetrominoeMini(arr) {
  //defino el objeto que devolverá la función
  let nextTetrominoeObject = {
    positionAtTetrominoeListMini: 0,
    piece: [],
    position: 0,
    rotation: 0,
  };
  //primero accedo al primer nivel de array
  const generateFirstLevelRandomNumber = Math.floor(Math.random() * arr.length);
  const selectRandomTetrominoeMini = arr[generateFirstLevelRandomNumber];

  //ahora accedo al segundo nivel de array
  const generateSecondLevelRandomNumber = Math.floor(
    Math.random() * selectRandomTetrominoeMini.length
  );
  const selectRandomPosition =
    selectRandomTetrominoeMini[generateSecondLevelRandomNumber];

  //asignar los valores a mi objeto
  nextTetrominoeObject.positionAtTetrominoeList = generateFirstLevelRandomNumber;
  nextTetrominoeObject.piece = selectRandomPosition;
  nextTetrominoeObject.position =
    generateFirstLevelRandomNumber === 0 &&
    generateSecondLevelRandomNumber === 1 ?
    (nextTetrominoeObject.position = 3) :
    (nextTetrominoeObject.position = 4);
  nextTetrominoeObject.rotation = generateSecondLevelRandomNumber;

  return nextTetrominoeObject;
}



const nextTetrominoeObject = generateRandomTetrominoeMini(tetrominoeListMini);
currentTetrominoeMini = nextTetrominoeObject.piece;
console.log(nextTetrominoeObject);


function drawTetrominoeInMiniBoard() {
  //defino el nuevo array con la posición de entrada al tabelro
  //Seleccionamos los div's de nuestro board a los que le asignaremos la clase opacity
  currentTetrominoeMini.forEach((e) => {
    const divDOM = document.getElementById(`m${e}`);
    //console.log(e);
    divDOM.classList.add("opacity");
  });
}

drawTetrominoeInMiniBoard();

//------------------------------------------------

/***
 * CREO LA FUNCION GENERATERANDOMTETROMINOE
 */

/*esta función recibirá como parámetro de entrada un array con todos los tetromios
 y devuelve un objeto con las propiedades:
        - positionAtTetrominoeList (number)
        - piece (Array<number>)
        - position (number)
        - rotation (number)
*/
/*
function generateRandomTetrominoe(arr) {
  //defino el objeto que devolverá la función
  let tetrominoeObject = {
    positionAtTetrominoeList: 0,
    piece: [],
    position: 0,
    rotation: 0,
  };
  //primero accedo al primer nivel de array
  const generateFirstLevelRandomNumber = Math.floor(Math.random() * arr.length);
  const selectRandomTetrominoe = arr[generateFirstLevelRandomNumber];

  //ahora accedo al segundo nivel de array
  const generateSecondLevelRandomNumber = Math.floor(
    Math.random() * selectRandomTetrominoe.length
  );
  const selectRandomPosition =
    selectRandomTetrominoe[generateSecondLevelRandomNumber];

  //asignar los valores a mi objeto
  tetrominoeObject.positionAtTetrominoeList = generateFirstLevelRandomNumber;
  tetrominoeObject.piece = selectRandomPosition;
  tetrominoeObject.position =
    generateFirstLevelRandomNumber === 0 &&
    generateSecondLevelRandomNumber === 1 ?
    (tetrominoeObject.position = 3) :
    (tetrominoeObject.position = 4);

  tetrominoeObject.rotation = generateSecondLevelRandomNumber;

  return tetrominoeObject;
}
*/
//------------------------------------------------

/**
 * CREO LA FUNCIÓN drawTetrominoeInMainBoard():
 *
 */
/**
 * Datos de entrada--> Objeto con las propiedades:
 *          - positionAtTetrominoeList (number)
            - piece (Array<number>)  Por ejemplo si tengo el array [0, 10, 11, 21]
            - position (number) Mi índice es 4
            - rotation (number)
            la posición de mi pieza en el tabelro será la [4,14,15,25]

    1. SAber el giro del tetromino. ¿Qué propiedad de mi objeto me lo puede dar?
            LA propiedad piece de mi objeto. Nos da la forma de la pieza

    2. ¿Qué posición ocupa en el tablero el giro del tetromino que nos entra?
            La propiedad position nos indica la posición del primer cuadrado de mi tetromino cuando entra al tablero
            PArece que sabiendo la posición (el índice) del primer cuadrado de mi pieza dentro del tablero, puedo 
            conseguir las demás posiciones, sumando ese índice a cada una de las posiciones iniciales.
 */
//cada elemento de la clase cell va a tener una clase del 0 al 199 que indicará la posicion de ese elemnento en el tablero
//de esta forma podremos seleccionar por el valor de esa clase. Es decir, nuestro div con la clase 4. lo seleccionaremos asi:
// document.querySelector('.${posición de nuestra pieza}') --> Lo haremos con un forEach
console.log(nextTetrominoeObject)
const objetTetromino = nextTetrominoeObject;
/*Defino una variable que contendrá la información de la pieza, se actualizará en cada interval
y en cada movimiento o rotación de la pieza.
*/
let currentTetrominoe = tetrominoeList[objetTetromino.positionAtTetrominoeList][objetTetromino.rotation];
//console.log(currentTetrominoe);
const fistPositionAtBoard = currentTetrominoe.map(
  (pos) => (pos = pos + objetTetromino.position)
);
currentTetrominoe = fistPositionAtBoard;

function drawTetrominoeInMainBoard() {
  //currentTetrominoe = fistPositionAtBoard;
  //console.log(fistPositionAtBoard);
  //defino el nuevo array con la posición de entrada al tabelro
  //Seleccionamos los div's de nuestro board a los que le asignaremos la clase opacity
  currentTetrominoe.forEach((e) => {
    const divDOM = document.getElementById(`${e}`);
    //console.log(e);
    divDOM.classList.add("opacity");
  });
}

drawTetrominoeInMainBoard();

//------------------------------------------------

/**
 * CREO LA FUNCIÓN undrawTetrominoeInMainBoard()
 *
 * tengo que seleccionar los divs de la posición de la pieza actual y eliminarlos, lo
 * haré mediante un selector de id.
 *
 * */

function undrawTetrominoeInMainBoard() {
  const currentDivsDOM = currentTetrominoe.map((pos) =>
    document.getElementById(`${pos}`)
  );
  currentDivsDOM.forEach((div) => div.classList.remove("opacity"));
}

/**
 * CREO LA FUNCIÓN undrawTetrominoeInMiniBoard()
 */

function undrawTetrominoeInMiniBoard() {
  console.log(currentTetrominoeMini)

  const divDOM = currentTetrominoeMini.map((e) => document.getElementById(`m${e}`))
  divDOM.forEach((div) => div.classList.remove("opacity"))
}

//------------------------------------------------

/**
 * CREO LA FUNCIÓN moveRight():
 *
 * Antes de mover la pieza debo comprobar que esta puede moverse. Para ello, seleccionaré todos
 * mis divs del board del DOM con la clase opacity y guardaré sus id's en un array de numbers.
 * Ahora comprobaré que la nueva posición de mi pieza no interfiere con ninguno de esos div's
 * al moverse, ni que ha sobrepasado los límites del tablero.
 * Si se cumple la condición anterior, entonces eliminaré la pieza y la dibujaré
 * en la nueva posición. Y devolveré un true.
 * En caso contrario, si al moverse interfiere o se sale de los límites del tablero,
 * entonces dejaré la pieza como está y devolveré un false.
 *
 * La función recibirá un array con la posición actual de la pieza. Esta función debe
 * modificar las posiciones del array de entrada con las nuevas posiciones despues de mover
 * la pieza.
 *
 */
function moveRight() {
  let canMove = true; //creo una variable boolean que me indica si se puede o no mover la pieza
  const arrNewPosition = currentTetrominoe.map((p) => (p += 1));
  undrawTetrominoeInMainBoard(); //llamo a la función que elimina la pieza actual
  let opacityDivsDOM = document.querySelectorAll(".opacity");
  currentTetrominoe.forEach((p) => {
    if (p % boardWidth === boardWidth - 1) {
      canMove = false;
    } else {
      opacityDivsDOM.forEach((div) => {
        if (div.id === p.toString()) {
          canMove = false;
        }
      });
    }
  });
  if (canMove === true) {
    currentTetrominoe = arrNewPosition;
    drawTetrominoeInMainBoard();
  } else {
    drawTetrominoeInMainBoard();
  }
  return canMove;
}
/**
 * CREO LA FUNCIÓN moveLeft():
 *
 *El procedimiento es el mismo que para moveRight, pero restando uno a la posición del array
 *
 */
function moveLeft() {
  let canMove = true; //creo una variable boolean que me indica si se puede o no mover la pieza
  const arrNewPosition = currentTetrominoe.map((p) => (p -= 1));
  undrawTetrominoeInMainBoard(); //llamo a la función que elimina la pieza actual
  let opacityDivsDOM = document.querySelectorAll(".opacity");
  currentTetrominoe.forEach((p) => {
    if (p % boardWidth === 0) {
      //la condición es que cuando el resto de la posición entre 10 sea 0 nos indica que hemos llegado al final del tablero por la izquierda
      canMove = false;
    } else {
      opacityDivsDOM.forEach((div) => {
        if (div.id === p.toString()) {
          canMove = false;
        }
      });
    }
  });
  if (canMove === true) {
    currentTetrominoe = arrNewPosition;
    drawTetrominoeInMainBoard();
  } else {
    drawTetrominoeInMainBoard();
  }
  return canMove;
}

/**
 * CREO LA FUNCIÓN moveDown()):
 *
 *El procedimiento es el mismo que para moveRight, pero restando uno a la posición del array
 */
function moveDown() {
  let canMove = true; //creo una variable boolean que me indica si se puede o no mover la pieza
  const arrNewPosition = currentTetrominoe.map((p) => (p += 10));
  undrawTetrominoeInMainBoard(); //llamo a la función que elimina la pieza actual
  let opacityDivsDOM = document.querySelectorAll(".opacity");
  currentTetrominoe.forEach((p) => {
    if (p / boardWidth > boardHeight - 1) {
      //si estamos en la ultima fila todos los cocientes de p/ancho serán mayores a 19
      canMove = false;
    } else {
      opacityDivsDOM.forEach((div) => {
        if (div.id === p.toString()) {
          canMove = false;
        }
      });
    }
  });
  if (canMove === true) {
    currentTetrominoe = arrNewPosition;
    drawTetrominoeInMainBoard();
  } else {
    drawTetrominoeInMainBoard();
  }
  return canMove;
}

/**
 * CREO LA FUNCIÓN rotate():
 *
 *Función que actualizará el valor de la variable currentTetromioe por el valor de la nueva posición del array

 NOTA: La función no está del todo pulida. Algunas piezas se desplazan hacia abajo al girar, y se mueven a la izquierda y a la derecha cuando llegan a los bordes
 derecho e izquierdo.
 El desplazamiento hacia abajo creo que se debe a que el punto de rotación de la pieza cambia con cada giro, y yo asigno siempre el mismo, la posición 1 del array.
 Los desplazamientos a izquierda y derecha se deben a que resto o sumo uno a cada una de las posiciones de la pieza cuando van a llegar al borde, de esta manera se evita el choque,
 pero siempre se quedan a 1 celda del borde del tablero.
 */


function rotate() {
  let canRotate = true; //creo una variable boolean que me indica si se puede o no rotar la pieza
  objetTetromino.rotation++; //paso a la siguiente rotacion
  if (objetTetromino.rotation >= tetrominoeList[objetTetromino.positionAtTetrominoeList].length) {
    objetTetromino.rotation = 0;
  }
  let newRotate = tetrominoeList[objetTetromino.positionAtTetrominoeList][objetTetromino.rotation];
  let newRotatePosition = newRotate.map((p) => p = p + currentTetrominoe[1])
  //tengo que sumar a todas las posiciones (referenciadas al 0,0) la primera posicion de mi pieza, que es el centro del giro, de esta forma, la nueva pieza me saldrá en la posición en la que se encuantra el tetromino actual

  //console.log(newRotatePosition);
  undrawTetrominoeInMainBoard(); //llamo a la función que elimina la pieza actual
  let opacityDivsDOM = document.querySelectorAll(".opacity");
  newRotatePosition.forEach((p) => {
    console.log(newRotatePosition)
    if (p / boardWidth > boardHeight) { //condición para que la pieza no rote cuando toca el borde inferior
      canRotate = false;
    } else if (p % boardWidth === boardWidth - 1) { //condición para que la pieza se ajuste cuando está en el borde derecho
      newRotatePosition = newRotatePosition.map((pos) => pos -= 1);
    } else if (p % boardWidth === 0) { //condición para que la pieza se ajuste cuando está en el borde izquierdo
      newRotatePosition = newRotatePosition.map((pos) => pos += 1);
    } else {
      opacityDivsDOM.forEach((div) => {
        if (div.id === p.toString()) {
          canRotate = false;
        }
      });
    }
  });
  if (canRotate === true) {
    currentTetrominoe = newRotatePosition;
    drawTetrominoeInMainBoard();
  } else {
    drawTetrominoeInMainBoard();
  }
  return canRotate;
}

//------------------------------------------------
/**
 * CREO EL INTERVALO QUE HARÁ QUE EL JEGO FUNCIONE
 */

const gameInterval = setInterval(() => {
  moveDown();
  currentTetrominoe.forEach(p => {
    //paro el intervalo cuando alguna de las posiciones de mi pieza llegue al final, o choque con alguna celda con la clase opacity
    //que se encuentre en la fila inferior
    if (p / boardWidth > boardHeight - 1) {
      clearInterval(gameInterval);
    }
  })
}, 1000);

gameInterval;