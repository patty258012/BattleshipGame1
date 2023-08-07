import './App.css';
import React from 'react';
import { useState} from 'react';


function App() {
//constants***************************************************************************************************************//
//inputs de mis barcos***********************************//
const [myShips,setMyShips] = useState('');
const [myShips1,setMyShips1] = useState('');
const [myShips2,setMyShips2] = useState('');
const [myShips3,setMyShips3] = useState('');
const [myShips4,setMyShips4] = useState('');


//submits de mis barcos***********************************//
const [sendShips,setSendShips] = useState([]);
const [sendShip1, setSendShip1] = useState([]);
const [sendShip2, setSendShip2] = useState([]);
const [sendShip3, setSendShip3] = useState([]);
const [sendShip4, setSendShip4] = useState([]);


//Barcos enemigos****************************//
const [enemyShips, setEnemyShips] = useState([]);


//ataque enemigo*****************************//
const [attack, setAttack] = useState([]);
const [squareA1, setSquareA1] = useState([]);
const [squareA2, setSquareA2] = useState([]);
const [squareA3, setSquareA3] = useState([]);
const [squareA4, setSquareA4] = useState([]);
const [squareA5, setSquareA5] = useState([]);
const [squareA6, setSquareA6] = useState([]);
const [squareA7, setSquareA7] = useState([]);
const [squareA8, setSquareA8] = useState([]);
const [squareA9, setSquareA9] = useState([]);
const [squareB1, setSquareB1] = useState([]);
const [squareB2, setSquareB2] = useState([]);
const [squareB3, setSquareB3] = useState([]);
const [squareB4, setSquareB4] = useState([]);
const [squareB5, setSquareB5] = useState([]);
const [squareB6, setSquareB6] = useState([]);
const [squareB7, setSquareB7] = useState([]);
const [squareB8, setSquareB8] = useState([]);
const [squareB9, setSquareB9] = useState([]);
const [squareC1, setSquareC1] = useState([]);
const [squareC2, setSquareC2] = useState([]);
const [squareC3, setSquareC3] = useState([]);
const [squareC4, setSquareC4] = useState([]);
const [squareC5, setSquareC5] = useState([]);
const [squareC6, setSquareC6] = useState([]);
const [squareC7, setSquareC7] = useState([]);
const [squareC8, setSquareC8] = useState([]);
const [squareC9, setSquareC9] = useState([]);
const [squareD1, setSquareD1] = useState([]);
const [squareD2, setSquareD2] = useState([]);
const [squareD3, setSquareD3] = useState([]);
const [squareD4, setSquareD4] = useState([]);
const [squareD5, setSquareD5] = useState([]);
const [squareD6, setSquareD6] = useState([]);
const [squareD7, setSquareD7] = useState([]);
const [squareD8, setSquareD8] = useState([]);
const [squareD9, setSquareD9] = useState([]);
const [squareE1, setSquareE1] = useState([]);
const [squareE2, setSquareE2] = useState([]);
const [squareE3, setSquareE3] = useState([]);
const [squareE4, setSquareE4] = useState([]);
const [squareE5, setSquareE5] = useState([]);
const [squareE6, setSquareE6] = useState([]);
const [squareE7, setSquareE7] = useState([]);
const [squareE8, setSquareE8] = useState([]);
const [squareE9, setSquareE9] = useState([]);
const [squareF1, setSquareF1] = useState([]);
const [squareF2, setSquareF2] = useState([]);
const [squareF3, setSquareF3] = useState([]);
const [squareF4, setSquareF4] = useState([]);
const [squareF5, setSquareF5] = useState([]);
const [squareF6, setSquareF6] = useState([]);
const [squareF7, setSquareF7] = useState([]);
const [squareF8, setSquareF8] = useState([]);
const [squareF9, setSquareF9] = useState([]);
const [squareG1, setSquareG1] = useState([]);
const [squareG2, setSquareG2] = useState([]);
const [squareG3, setSquareG3] = useState([]);
const [squareG4, setSquareG4] = useState([]);
const [squareG5, setSquareG5] = useState([]);
const [squareG6, setSquareG6] = useState([]);
const [squareG7, setSquareG7] = useState([]);
const [squareG8, setSquareG8] = useState([]);
const [squareG9, setSquareG9] = useState([]);
const [squareH1, setSquareH1] = useState([]);
const [squareH2, setSquareH2] = useState([]);
const [squareH3, setSquareH3] = useState([]);
const [squareH4, setSquareH4] = useState([]);
const [squareH5, setSquareH5] = useState([]);
const [squareH6, setSquareH6] = useState([]);
const [squareH7, setSquareH7] = useState([]);
const [squareH8, setSquareH8] = useState([]);
const [squareH9, setSquareH9] = useState([]);
const [squareI1, setSquareI1] = useState([]);
const [squareI2, setSquareI2] = useState([]);
const [squareI3, setSquareI3] = useState([]);
const [squareI4, setSquareI4] = useState([]);
const [squareI5, setSquareI5] = useState([]);
const [squareI6, setSquareI6] = useState([]);
const [squareI7, setSquareI7] = useState([]);
const [squareI8, setSquareI8] = useState([]);
const [squareI9, setSquareI9] = useState([]);


//acción de ataque******************//
const [shotA1, setShotA1] = useState([]);
const [shotA2, setShotA2] = useState([]);
const [shotA3, setShotA3] = useState([]);
const [shotA4, setShotA4] = useState([]);
const [shotA5, setShotA5] = useState([]);
const [shotA6, setShotA6] = useState([]);
const [shotA7, setShotA7] = useState([]);
const [shotA8, setShotA8] = useState([]);
const [shotA9, setShotA9] = useState([]);
const [shotB1, setShotB1] = useState([]);
const [shotB2, setShotB2] = useState([]);
const [shotB3, setShotB3] = useState([]);
const [shotB4, setShotB4] = useState([]);
const [shotB5, setShotB5] = useState([]);
const [shotB6, setShotB6] = useState([]);
const [shotB7, setShotB7] = useState([]);
const [shotB8, setShotB8] = useState([]);
const [shotB9, setShotB9] = useState([]);
const [shotC1, setShotC1] = useState([]);
const [shotC2, setShotC2] = useState([]);
const [shotC3, setShotC3] = useState([]);
const [shotC4, setShotC4] = useState([]);
const [shotC5, setShotC5] = useState([]);
const [shotC6, setShotC6] = useState([]);
const [shotC7, setShotC7] = useState([]);
const [shotC8, setShotC8] = useState([]);
const [shotC9, setShotC9] = useState([]);
const [shotD1, setShotD1] = useState([]);
const [shotD2, setShotD2] = useState([]);
const [shotD3, setShotD3] = useState([]);
const [shotD4, setShotD4] = useState([]);
const [shotD5, setShotD5] = useState([]);
const [shotD6, setShotD6] = useState([]);
const [shotD7, setShotD7] = useState([]);
const [shotD8, setShotD8] = useState([]);
const [shotD9, setShotD9] = useState([]);
const [shotE1, setShotE1] = useState([]);
const [shotE2, setShotE2] = useState([]);
const [shotE3, setShotE3] = useState([]);
const [shotE4, setShotE4] = useState([]);
const [shotE5, setShotE5] = useState([]);
const [shotE6, setShotE6] = useState([]);
const [shotE7, setShotE7] = useState([]);
const [shotE8, setShotE8] = useState([]);
const [shotE9, setShotE9] = useState([]);
const [shotF1, setShotF1] = useState([]);
const [shotF2, setShotF2] = useState([]);
const [shotF3, setShotF3] = useState([]);
const [shotF4, setShotF4] = useState([]);
const [shotF5, setShotF5] = useState([]);
const [shotF6, setShotF6] = useState([]);
const [shotF7, setShotF7] = useState([]);
const [shotF8, setShotF8] = useState([]);
const [shotF9, setShotF9] = useState([]);
const [shotG1, setShotG1] = useState([]);
const [shotG2, setShotG2] = useState([]);
const [shotG3, setShotG3] = useState([]);
const [shotG4, setShotG4] = useState([]);
const [shotG5, setShotG5] = useState([]);
const [shotG6, setShotG6] = useState([]);
const [shotG7, setShotG7] = useState([]);
const [shotG8, setShotG8] = useState([]);
const [shotG9, setShotG9] = useState([]);
const [shotH1, setShotH1] = useState([]);
const [shotH2, setShotH2] = useState([]);
const [shotH3, setShotH3] = useState([]);
const [shotH4, setShotH4] = useState([]);
const [shotH5, setShotH5] = useState([]);
const [shotH6, setShotH6] = useState([]);
const [shotH7, setShotH7] = useState([]);
const [shotH8, setShotH8] = useState([]);
const [shotH9, setShotH9] = useState([]);
const [shotI1, setShotI1] = useState([]);
const [shotI2, setShotI2] = useState([]);
const [shotI3, setShotI3] = useState([]);
const [shotI4, setShotI4] = useState([]);
const [shotI5, setShotI5] = useState([]);
const [shotI6, setShotI6] = useState([]);
const [shotI7, setShotI7] = useState([]);
const [shotI8, setShotI8] = useState([]);
const [shotI9, setShotI9] = useState([]);



//GameOver**************************************** */
const [gameOver, setGameOver] = useState([]);
const [attackedEnemies, setAttackedEnemies] = useState([]);
const [attackedShips, setAttackedShips] = useState([]);

//posicionar barcos enemigos**************************//
const placeEnemyShips = () => {
  setEnemyShips([ships,...enemyShips])
}


//mi ataque ******************************************//
const atacarA1 = () => {
  setAttackedEnemies(shotA1 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotA1(enemyShips.includes("A1") ? "hit" : "miss")
  enemyAttack()

}
const atacarA2 = () => {
  setAttackedEnemies(shotA2 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotA2(enemyShips.includes("A2") ? "hit" : "miss")
  enemyAttack()
}
const atacarA3 = () => {
  setAttackedEnemies(shotA3 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotA3(enemyShips.includes("A3") ? "hit" : "miss")
  enemyAttack()
}
const atacarA4 = () => {
  setAttackedEnemies(shotA4 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotA4(enemyShips.includes("A4") ? "hit" : "miss")
  enemyAttack()
}
const atacarA5 = () => {
  setAttackedEnemies(shotA5 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotA5(enemyShips.includes("A5") ? "hit" : "miss")
  enemyAttack()
}
const atacarA6 = () => {
  setAttackedEnemies(shotA6 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotA6(enemyShips.includes("A6") ? "hit" : "miss")
  enemyAttack()
}
const atacarA7 = () => {
  setAttackedEnemies(shotA7 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotA7(enemyShips.includes("A7") ? "hit" : "miss")
  enemyAttack()
}
const atacarA8 = () => {
  setAttackedEnemies(shotA8 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotA8(enemyShips.includes("A8") ? "hit" : "miss")
  enemyAttack()
}
const atacarA9 = () => {
  setAttackedEnemies(shotA9 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotA9(enemyShips.includes("A9") ? "hit" : "miss")
  enemyAttack()
}
const atacarB1 = () => {
  setAttackedEnemies(shotB1 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotB1(enemyShips.includes("B1") ? "hit" : "miss")
  enemyAttack()
}
const atacarB2 = () => {
  setAttackedEnemies(shotB2 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotB2(enemyShips.includes("B2") ? "hit" : "miss")
  enemyAttack()
}
const atacarB3 = () => {
  setAttackedEnemies(shotB3 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotB3(enemyShips.includes("B3") ? "hit" : "miss")
  enemyAttack()
}
const atacarB4 = () => {
  setAttackedEnemies(shotB4 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotB4(enemyShips.includes("B4") ? "hit" : "miss")
  enemyAttack()
}
const atacarB5 = () => {
  setAttackedEnemies(shotB5 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotB5(enemyShips.includes("B5") ? "hit" : "miss")
  enemyAttack()
}
const atacarB6 = () => {
  setAttackedEnemies(shotB6 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotB6(enemyShips.includes("B6") ? "hit" : "miss")
  enemyAttack()
}
const atacarB7 = () => {
  setAttackedEnemies(shotB7 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotB7(enemyShips.includes("B7") ? "hit" : "miss")
  enemyAttack()
}
const atacarB8 = () => {
  setAttackedEnemies(shotB8 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotB8(enemyShips.includes("B8") ? "hit" : "miss")
  enemyAttack()
}
const atacarB9 = () => {
  setAttackedEnemies(shotB9 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotB9(enemyShips.includes("B9") ? "hit" : "miss")
  enemyAttack()
}
const atacarC1 = () => {
  setAttackedEnemies(shotC1 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotC1(enemyShips.includes("C1") ? "hit" : "miss")
  enemyAttack()
}
const atacarC2 = () => {
  setAttackedEnemies(shotC2 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotC2(enemyShips.includes("C2") ? "hit" : "miss")
  enemyAttack()
}
const atacarC3 = () => {
  setAttackedEnemies(shotC3 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotC3(enemyShips.includes("C3") ? "hit" : "miss")
  enemyAttack()
}
const atacarC4 = () => {
  setAttackedEnemies(shotC4 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotC4(enemyShips.includes("C4") ? "hit" : "miss")
  enemyAttack()
}
const atacarC5 = () => {
  setAttackedEnemies(shotC5 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotC5(enemyShips.includes("C5") ? "hit" : "miss")
  enemyAttack()
}
const atacarC6 = () => {
  setAttackedEnemies(shotC6 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotC6(enemyShips.includes("C6") ? "hit" : "miss")
  enemyAttack()
}
const atacarC7 = () => {
  setAttackedEnemies(shotC7 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotC7(enemyShips.includes("C7") ? "hit" : "miss")
  enemyAttack()
}
const atacarC8 = () => {
  setAttackedEnemies(shotC8 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotC8(enemyShips.includes("C8") ? "hit" : "miss")
  enemyAttack()
}
const atacarC9 = () => {
  setAttackedEnemies(shotC9 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotC9(enemyShips.includes("C9") ? "hit" : "miss")
  enemyAttack()
}
const atacarD1 = () => {
  setAttackedEnemies(shotD1 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotD1(enemyShips.includes("D1") ? "hit" : "miss")
  enemyAttack()
}
const atacarD2 = () => {
  setAttackedEnemies(shotD2 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotD2(enemyShips.includes("D2") ? "hit" : "miss")
  enemyAttack()
}
const atacarD3 = () => {
  setAttackedEnemies(shotD3 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotD3(enemyShips.includes("D3") ? "hit" : "miss")
  enemyAttack()
}
const atacarD4 = () => {
  setAttackedEnemies(shotD4 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotD4(enemyShips.includes("D4") ? "hit" : "miss")
  enemyAttack()
}
const atacarD5 = () => {
  setAttackedEnemies(shotD5 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotD5(enemyShips.includes("D5") ? "hit" : "miss")
  enemyAttack()
}
const atacarD6 = () => {
  setAttackedEnemies(shotD6 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotD6(enemyShips.includes("D6") ? "hit" : "miss")
  enemyAttack()
}
const atacarD7 = () => {
  setAttackedEnemies(shotD7 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotD7(enemyShips.includes("D7") ? "hit" : "miss")
  enemyAttack()
}
const atacarD8 = () => {
  setAttackedEnemies(shotD8 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotD8(enemyShips.includes("D8") ? "hit" : "miss")
  enemyAttack()
}
const atacarD9 = () => {
  setAttackedEnemies(shotD9 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotD9(enemyShips.includes("D9") ? "hit" : "miss")
  enemyAttack()
}
const atacarE1 = () => {
  setAttackedEnemies(shotE1 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotE1(enemyShips.includes("E1") ? "hit" : "miss")
  enemyAttack()
}
const atacarE2 = () => {
  setAttackedEnemies(shotE2 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotE2(enemyShips.includes("E2") ? "hit" : "miss")
  enemyAttack()
}
const atacarE3 = () => {
  setAttackedEnemies(shotE3 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotE3(enemyShips.includes("E3") ? "hit" : "miss")
  enemyAttack()
}
const atacarE4 = () => {
  setAttackedEnemies(shotE4 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotE4(enemyShips.includes("E4") ? "hit" : "miss")
  enemyAttack()
}
const atacarE5 = () => {
  setAttackedEnemies(shotE5 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotE5(enemyShips.includes("E5") ? "hit" : "miss")
  enemyAttack()
}
const atacarE6 = () => {
  setAttackedEnemies(shotE6 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotE6(enemyShips.includes("E6") ? "hit" : "miss")
  enemyAttack()
}
const atacarE7 = () => {
  setAttackedEnemies(shotE7 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotE7(enemyShips.includes("E7") ? "hit" : "miss")
  enemyAttack()
}
const atacarE8 = () => {
  setAttackedEnemies(shotE8 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotE8(enemyShips.includes("E8") ? "hit" : "miss")
  enemyAttack()
}
const atacarE9 = () => {
  setAttackedEnemies(shotE9 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotE9(enemyShips.includes("E9") ? "hit" : "miss")
  enemyAttack()
}
const atacarF1 = () => {
  setAttackedEnemies(shotF1 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotF1(enemyShips.includes("F1") ? "hit" : "miss")
  enemyAttack()
}
const atacarF2 = () => {
  setAttackedEnemies(shotF2 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotF2(enemyShips.includes("F2") ? "hit" : "miss")
  enemyAttack()
}
const atacarF3 = () => {
  setAttackedEnemies(shotF3 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotF3(enemyShips.includes("F3") ? "hit" : "miss")
  enemyAttack()
}
const atacarF4 = () => {
  setAttackedEnemies(shotF4 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotF4(enemyShips.includes("F4") ? "hit" : "miss")
  enemyAttack()
}
const atacarF5 = () => {
  setAttackedEnemies(shotF5 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotF5(enemyShips.includes("F5") ? "hit" : "miss")
  enemyAttack()
}
const atacarF6 = () => {
  setAttackedEnemies(shotF6 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotF6(enemyShips.includes("F6") ? "hit" : "miss")
  enemyAttack()
}
const atacarF7 = () => {
  setAttackedEnemies(shotF7 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotF7(enemyShips.includes("F7") ? "hit" : "miss")
  enemyAttack()
}
const atacarF8 = () => {
  setAttackedEnemies(shotF8 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotF8(enemyShips.includes("F8") ? "hit" : "miss")
  enemyAttack()
}
const atacarF9 = () => {
  setAttackedEnemies(shotF9 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotF9(enemyShips.includes("F9") ? "hit" : "miss")
  enemyAttack()
}
const atacarG1 = () => {
  setAttackedEnemies(shotG1 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotG1(enemyShips.includes("G1") ? "hit" : "miss")
  enemyAttack()
}
const atacarG2 = () => {
  setAttackedEnemies(shotG2 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotG2(enemyShips.includes("G2") ? "hit" : "miss")
  enemyAttack()
}
const atacarG3 = () => {
  setAttackedEnemies(shotG3 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotG3(enemyShips.includes("G3") ? "hit" : "miss")
  enemyAttack()
}
const atacarG4 = () => {
  setAttackedEnemies(shotG4 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotG4(enemyShips.includes("G4") ? "hit" : "miss")
  enemyAttack()
}
const atacarG5 = () => {
  setAttackedEnemies(shotG5 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotG5(enemyShips.includes("G5") ? "hit" : "miss")
  enemyAttack()
}
const atacarG6 = () => {
  setAttackedEnemies(shotG6 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotG6(enemyShips.includes("G6") ? "hit" : "miss")
  enemyAttack()
}
const atacarG7 = () => {
  setAttackedEnemies(shotG7 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotG7(enemyShips.includes("G7") ? "hit" : "miss")
  enemyAttack()
}
const atacarG8 = () => {
  setAttackedEnemies(shotG8 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotG8(enemyShips.includes("G8") ? "hit" : "miss")
  enemyAttack()
}
const atacarG9 = () => {
  setAttackedEnemies(shotG9 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotG9(enemyShips.includes("G9") ? "hit" : "miss")
  enemyAttack()
}
const atacarH1 = () => {
  setAttackedEnemies(shotH1 == ("hit") ? [...attackedEnemies, "A1"] :attackedEnemies)
  setShotH1(enemyShips.includes("H1") ? "hit" : "miss")
  enemyAttack()
}
const atacarH2 = () => {
  setAttackedEnemies(shotH2 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotH2(enemyShips.includes("H2") ? "hit" : "miss")
  enemyAttack()
}
const atacarH3 = () => {
  setAttackedEnemies(shotH3 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotH3(enemyShips.includes("H3") ? "hit" : "miss")
  enemyAttack()
}
const atacarH4 = () => {
  setAttackedEnemies(shotH4 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotH4(enemyShips.includes("H4") ? "hit" : "miss")
  enemyAttack()
}
const atacarH5 = () => {
  setAttackedEnemies(shotH5 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotH5(enemyShips.includes("H5") ? "hit" : "miss")
  enemyAttack()
}
const atacarH6 = () => {
  setAttackedEnemies(shotH6 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotH6(enemyShips.includes("H6") ? "hit" : "miss")
  enemyAttack()
}
const atacarH7 = () => {
  setAttackedEnemies(shotH7 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotH7(enemyShips.includes("H7") ? "hit" : "miss")
  enemyAttack()
}
const atacarH8 = () => {
  setAttackedEnemies(shotH8 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotH8(enemyShips.includes("H8") ? "hit" : "miss")
  enemyAttack()
}
const atacarH9 = () => {
  setAttackedEnemies(shotH9 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotH9(enemyShips.includes("H9") ? "hit" : "miss")
  enemyAttack()
}
const atacarI1 = () => {
  setAttackedEnemies(shotI1 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotI1(enemyShips.includes("I1") ? "hit" : "miss")
  enemyAttack()
}
const atacarI2 = () => {
  setAttackedEnemies(shotI2 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotI2(enemyShips.includes("I2") ? "hit" : "miss")
  enemyAttack()
}
const atacarI3 = () => {
  setAttackedEnemies(shotI3 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotI3(enemyShips.includes("I3") ? "hit" : "miss")
  enemyAttack()
}
const atacarI4 = () => {
  setAttackedEnemies(shotI4 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotI4(enemyShips.includes("I4") ? "hit" : "miss")
  enemyAttack()
}
const atacarI5 = () => {
  setAttackedEnemies(shotI5 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotI5(enemyShips.includes("I5") ? "hit" : "miss")
  enemyAttack()
}
const atacarI6 = () => {
  setAttackedEnemies(shotI6 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotI6(enemyShips.includes("I6") ? "hit" : "miss")
  enemyAttack()
}
const atacarI7 = () => {
  setAttackedEnemies(shotI7 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotI7(enemyShips.includes("I7") ? "hit" : "miss")
  enemyAttack()
}
const atacarI8 = () => {
  setAttackedEnemies(shotI8 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotI8(enemyShips.includes("I8") ? "hit" : "miss")
  enemyAttack()
}
const atacarI9 = () => {
  setAttackedEnemies(shotI9 == ("hit") ? [...attackedEnemies, "A1"] : attackedEnemies)
  setShotI9(enemyShips.includes("I9") ? "hit" : "miss")
  enemyAttack()
}




//ataque de enemigos**********************************//
const enemyAttack = () => {
  setAttack([enemyAttacks, ...attack])
  gameover()
  setSquareA1(attack.includes("A1") && sendShips == "A1" ? "hit" : attack.includes ("A1") && sendShip1 == "A1" ? "hit" : attack.includes("A1") && sendShip2 == "A1" ? "hit" : attack.includes("A1") && sendShip3 == "A1" ? "hit" : attack.includes("A1") && sendShip4 == "A1" ? "hit" : attack.includes("A1") ? "miss" : "" )
  setSquareA2(attack.includes("A2") && sendShips == "A2" ? "hit" : attack.includes ("A2") && sendShip1 == "A2" ? "hit" : attack.includes("A2") && sendShip2 == "A2" ? "hit" : attack.includes("A2") && sendShip3 == "A2" ? "hit" : attack.includes("A2") && sendShip4 == "A2" ? "hit" : attack.includes("A2") ? "miss" : "" )
  setSquareA3(attack.includes("A3") && sendShips == "A3" ? "hit" : attack.includes ("A3") && sendShip1 == "A3" ? "hit" : attack.includes("A3") && sendShip2 == "A3" ? "hit" : attack.includes("A3") && sendShip3 == "A3" ? "hit" : attack.includes("A3") && sendShip4 == "A3" ? "hit" : attack.includes("A3") ? "miss" : "" )
  setSquareA4(attack.includes("A4") && sendShips == "A4" ? "hit" : attack.includes ("A4") && sendShip1 == "A4" ? "hit" : attack.includes("A4") && sendShip2 == "A4" ? "hit" : attack.includes("A4") && sendShip3 == "A4" ? "hit" : attack.includes("A4") && sendShip4 == "A4" ? "hit" : attack.includes("A4") ? "miss" : "" )
  setSquareA5(attack.includes("A5") && sendShips == "A5" ? "hit" : attack.includes ("A5") && sendShip1 == "A5" ? "hit" : attack.includes("A5") && sendShip2 == "A5" ? "hit" : attack.includes("A5") && sendShip3 == "A5" ? "hit" : attack.includes("A5") && sendShip4 == "A5" ? "hit" : attack.includes("A5") ? "miss" : "" )
  setSquareA6(attack.includes("A6") && sendShips == "A6" ? "hit" : attack.includes ("A6") && sendShip1 == "A6" ? "hit" : attack.includes("A6") && sendShip2 == "A6" ? "hit" : attack.includes("A6") && sendShip3 == "A6" ? "hit" : attack.includes("A6") && sendShip4 == "A6" ? "hit" : attack.includes("A6") ? "miss" : "" )
  setSquareA7(attack.includes("A7") && sendShips == "A7" ? "hit" : attack.includes ("A7") && sendShip1 == "A7" ? "hit" : attack.includes("A7") && sendShip2 == "A7" ? "hit" : attack.includes("A7") && sendShip3 == "A7" ? "hit" : attack.includes("A7") && sendShip4 == "A7" ? "hit" : attack.includes("A7") ? "miss" : "" )
  setSquareA8(attack.includes("A8") && sendShips == "A8" ? "hit" : attack.includes ("A8") && sendShip1 == "A8" ? "hit" : attack.includes("A8") && sendShip2 == "A8" ? "hit" : attack.includes("A8") && sendShip3 == "A8" ? "hit" : attack.includes("A8") && sendShip4 == "A8" ? "hit" : attack.includes("A8") ? "miss" : "" )
  setSquareA9(attack.includes("A9") && sendShips == "A9" ? "hit" : attack.includes ("A9") && sendShip1 == "A9" ? "hit" : attack.includes("A9") && sendShip2 == "A9" ? "hit" : attack.includes("A9") && sendShip3 == "A9" ? "hit" : attack.includes("A9") && sendShip4 == "A9" ? "hit" : attack.includes("A9") ? "miss" : "" )
  setSquareB1(attack.includes("B1") && sendShips == "B1" ? "hit" : attack.includes ("B1") && sendShip1 == "B1" ? "hit" : attack.includes("B1") && sendShip2 == "B1" ? "hit" : attack.includes("B1") && sendShip3 == "B1" ? "hit" : attack.includes("B1") && sendShip4 == "B1" ? "hit" : attack.includes("B1") ? "miss" : "" )
  setSquareB2(attack.includes("B2") && sendShips == "B2" ? "hit" : attack.includes ("B2") && sendShip1 == "B2" ? "hit" : attack.includes("B2") && sendShip2 == "B2" ? "hit" : attack.includes("B2") && sendShip3 == "B2" ? "hit" : attack.includes("B2") && sendShip4 == "B2" ? "hit" : attack.includes("B2") ? "miss" : "" )
  setSquareB3(attack.includes("B3") && sendShips == "B3" ? "hit" : attack.includes ("B3") && sendShip1 == "B3" ? "hit" : attack.includes("B3") && sendShip2 == "B3" ? "hit" : attack.includes("B3") && sendShip3 == "B3" ? "hit" : attack.includes("B3") && sendShip4 == "B3" ? "hit" : attack.includes("B3") ? "miss" : "" )
  setSquareB4(attack.includes("B4") && sendShips == "B4" ? "hit" : attack.includes ("B4") && sendShip1 == "B4" ? "hit" : attack.includes("B4") && sendShip2 == "B4" ? "hit" : attack.includes("B4") && sendShip3 == "B4" ? "hit" : attack.includes("B4") && sendShip4 == "B4" ? "hit" : attack.includes("B4") ? "miss" : "" )
  setSquareB5(attack.includes("B5") && sendShips == "B5" ? "hit" : attack.includes ("B5") && sendShip1 == "B5" ? "hit" : attack.includes("B5") && sendShip2 == "B5" ? "hit" : attack.includes("B5") && sendShip3 == "B5" ? "hit" : attack.includes("B5") && sendShip4 == "B5" ? "hit" : attack.includes("B5") ? "miss" : "" )
  setSquareB6(attack.includes("B6") && sendShips == "B6" ? "hit" : attack.includes ("B6") && sendShip1 == "B6" ? "hit" : attack.includes("B6") && sendShip2 == "B6" ? "hit" : attack.includes("B6") && sendShip3 == "B6" ? "hit" : attack.includes("B6") && sendShip4 == "B6" ? "hit" : attack.includes("B6") ? "miss" : "" )
  setSquareB7(attack.includes("B7") && sendShips == "B7" ? "hit" : attack.includes ("B7") && sendShip1 == "B7" ? "hit" : attack.includes("B7") && sendShip2 == "B7" ? "hit" : attack.includes("B7") && sendShip3 == "B7" ? "hit" : attack.includes("B7") && sendShip4 == "B7" ? "hit" : attack.includes("B7") ? "miss" : "" )
  setSquareB8(attack.includes("B8") && sendShips == "B8" ? "hit" : attack.includes ("B8") && sendShip1 == "B8" ? "hit" : attack.includes("B8") && sendShip2 == "B8" ? "hit" : attack.includes("B8") && sendShip3 == "B8" ? "hit" : attack.includes("B8") && sendShip4 == "B8" ? "hit" : attack.includes("B8") ? "miss" : "" )
  setSquareB9(attack.includes("B9") && sendShips == "B9" ? "hit" : attack.includes ("B9") && sendShip1 == "B9" ? "hit" : attack.includes("B9") && sendShip2 == "B9" ? "hit" : attack.includes("B9") && sendShip3 == "B9" ? "hit" : attack.includes("B9") && sendShip4 == "B9" ? "hit" : attack.includes("B9") ? "miss" : "" )
  setSquareC1(attack.includes("C1") && sendShips == "C1" ? "hit" : attack.includes ("C1") && sendShip1 == "C1" ? "hit" : attack.includes("C1") && sendShip2 == "C1" ? "hit" : attack.includes("C1") && sendShip3 == "C1" ? "hit" : attack.includes("C1") && sendShip4 == "C1" ? "hit" : attack.includes("C1") ? "miss" : "" )
  setSquareC2(attack.includes("C2") && sendShips == "C2" ? "hit" : attack.includes ("C2") && sendShip1 == "C2" ? "hit" : attack.includes("C2") && sendShip2 == "C2" ? "hit" : attack.includes("C2") && sendShip3 == "C2" ? "hit" : attack.includes("C2") && sendShip4 == "C2" ? "hit" : attack.includes("C2") ? "miss" : "" )
  setSquareC3(attack.includes("C3") && sendShips == "C3" ? "hit" : attack.includes ("C3") && sendShip1 == "C3" ? "hit" : attack.includes("C3") && sendShip2 == "C3" ? "hit" : attack.includes("C3") && sendShip3 == "C3" ? "hit" : attack.includes("C3") && sendShip4 == "C3" ? "hit" : attack.includes("C3") ? "miss" : "" )
  setSquareC4(attack.includes("C4") && sendShips == "C4" ? "hit" : attack.includes ("C4") && sendShip1 == "C4" ? "hit" : attack.includes("C4") && sendShip2 == "C4" ? "hit" : attack.includes("C4") && sendShip3 == "C4" ? "hit" : attack.includes("C4") && sendShip4 == "C4" ? "hit" : attack.includes("C4") ? "miss" : "" )
  setSquareC5(attack.includes("C5") && sendShips == "C5" ? "hit" : attack.includes ("C5") && sendShip1 == "C5" ? "hit" : attack.includes("C5") && sendShip2 == "C5" ? "hit" : attack.includes("C5") && sendShip3 == "C5" ? "hit" : attack.includes("C5") && sendShip4 == "C5" ? "hit" : attack.includes("C5") ? "miss" : "" )
  setSquareC6(attack.includes("C6") && sendShips == "C6" ? "hit" : attack.includes ("C6") && sendShip1 == "C6" ? "hit" : attack.includes("C6") && sendShip2 == "C6" ? "hit" : attack.includes("C6") && sendShip3 == "C6" ? "hit" : attack.includes("C6") && sendShip4 == "C6" ? "hit" : attack.includes("C6") ? "miss" : "" )
  setSquareC7(attack.includes("C7") && sendShips == "C7" ? "hit" : attack.includes ("C7") && sendShip1 == "C7" ? "hit" : attack.includes("C7") && sendShip2 == "C7" ? "hit" : attack.includes("C7") && sendShip3 == "C7" ? "hit" : attack.includes("C7") && sendShip4 == "C7" ? "hit" : attack.includes("C7") ? "miss" : "" )
  setSquareC8(attack.includes("C8") && sendShips == "C8" ? "hit" : attack.includes ("C8") && sendShip1 == "C8" ? "hit" : attack.includes("C8") && sendShip2 == "C8" ? "hit" : attack.includes("C8") && sendShip3 == "C8" ? "hit" : attack.includes("C8") && sendShip4 == "C8" ? "hit" : attack.includes("C8") ? "miss" : "" )
  setSquareC9(attack.includes("C9") && sendShips == "C9" ? "hit" : attack.includes ("C9") && sendShip1 == "C9" ? "hit" : attack.includes("C9") && sendShip2 == "C9" ? "hit" : attack.includes("C9") && sendShip3 == "C9" ? "hit" : attack.includes("C9") && sendShip4 == "C9" ? "hit" : attack.includes("C9") ? "miss" : "" )
  setSquareD1(attack.includes("D1") && sendShips == "D1" ? "hit" : attack.includes ("D1") && sendShip1 == "D1" ? "hit" : attack.includes("D1") && sendShip2 == "D1" ? "hit" : attack.includes("D1") && sendShip3 == "D1" ? "hit" : attack.includes("D1") && sendShip4 == "D1" ? "hit" : attack.includes("D1") ? "miss" : "" )
  setSquareD2(attack.includes("D2") && sendShips == "D2" ? "hit" : attack.includes ("D2") && sendShip1 == "D2" ? "hit" : attack.includes("D2") && sendShip2 == "D2" ? "hit" : attack.includes("D2") && sendShip3 == "D2" ? "hit" : attack.includes("D2") && sendShip4 == "D2" ? "hit" : attack.includes("D2") ? "miss" : "" )
  setSquareD3(attack.includes("D3") && sendShips == "D3" ? "hit" : attack.includes ("D3") && sendShip1 == "D3" ? "hit" : attack.includes("D3") && sendShip2 == "D3" ? "hit" : attack.includes("D3") && sendShip3 == "D3" ? "hit" : attack.includes("D3") && sendShip4 == "D3" ? "hit" : attack.includes("D3") ? "miss" : "" )
  setSquareD4(attack.includes("D4") && sendShips == "D4" ? "hit" : attack.includes ("D4") && sendShip1 == "D4" ? "hit" : attack.includes("D4") && sendShip2 == "D4" ? "hit" : attack.includes("D4") && sendShip3 == "D4" ? "hit" : attack.includes("D4") && sendShip4 == "D4" ? "hit" : attack.includes("D4") ? "miss" : "" )
  setSquareD5(attack.includes("D5") && sendShips == "D5" ? "hit" : attack.includes ("D5") && sendShip1 == "D5" ? "hit" : attack.includes("D5") && sendShip2 == "D5" ? "hit" : attack.includes("D5") && sendShip3 == "D5" ? "hit" : attack.includes("D5") && sendShip4 == "D5" ? "hit" : attack.includes("D5") ? "miss" : "" )
  setSquareD6(attack.includes("D6") && sendShips == "D6" ? "hit" : attack.includes ("D6") && sendShip1 == "D6" ? "hit" : attack.includes("D6") && sendShip2 == "D6" ? "hit" : attack.includes("D6") && sendShip3 == "D6" ? "hit" : attack.includes("D6") && sendShip4 == "D6" ? "hit" : attack.includes("D6") ? "miss" : "" )
  setSquareD7(attack.includes("D7") && sendShips == "D7" ? "hit" : attack.includes ("D7") && sendShip1 == "D7" ? "hit" : attack.includes("D7") && sendShip2 == "D7" ? "hit" : attack.includes("D7") && sendShip3 == "D7" ? "hit" : attack.includes("D7") && sendShip4 == "D7" ? "hit" : attack.includes("D7") ? "miss" : "" )
  setSquareD8(attack.includes("D8") && sendShips == "D8" ? "hit" : attack.includes ("D8") && sendShip1 == "D8" ? "hit" : attack.includes("D8") && sendShip2 == "D8" ? "hit" : attack.includes("D8") && sendShip3 == "D8" ? "hit" : attack.includes("D8") && sendShip4 == "D8" ? "hit" : attack.includes("D8") ? "miss" : "" )
  setSquareD9(attack.includes("D9") && sendShips == "D9" ? "hit" : attack.includes ("D9") && sendShip1 == "D9" ? "hit" : attack.includes("D9") && sendShip2 == "D9" ? "hit" : attack.includes("D9") && sendShip3 == "D9" ? "hit" : attack.includes("D9") && sendShip4 == "D9" ? "hit" : attack.includes("D9") ? "miss" : "" )
  setSquareE1(attack.includes("E1") && sendShips == "E1" ? "hit" : attack.includes ("E1") && sendShip1 == "E1" ? "hit" : attack.includes("E1") && sendShip2 == "E1" ? "hit" : attack.includes("E1") && sendShip3 == "E1" ? "hit" : attack.includes("E1") && sendShip4 == "E1" ? "hit" : attack.includes("E1") ? "miss" : "" )
  setSquareE2(attack.includes("E2") && sendShips == "E2" ? "hit" : attack.includes ("E2") && sendShip1 == "E2" ? "hit" : attack.includes("E2") && sendShip2 == "E2" ? "hit" : attack.includes("E2") && sendShip3 == "E2" ? "hit" : attack.includes("E2") && sendShip4 == "E2" ? "hit" : attack.includes("E2") ? "miss" : "" )
  setSquareE3(attack.includes("E3") && sendShips == "E3" ? "hit" : attack.includes ("E3") && sendShip1 == "E3" ? "hit" : attack.includes("E3") && sendShip2 == "E3" ? "hit" : attack.includes("E3") && sendShip3 == "E3" ? "hit" : attack.includes("E3") && sendShip4 == "E3" ? "hit" : attack.includes("E3") ? "miss" : "" )
  setSquareE4(attack.includes("E4") && sendShips == "E4" ? "hit" : attack.includes ("E4") && sendShip1 == "E4" ? "hit" : attack.includes("E4") && sendShip2 == "E4" ? "hit" : attack.includes("E4") && sendShip3 == "E4" ? "hit" : attack.includes("E4") && sendShip4 == "E4" ? "hit" : attack.includes("E4") ? "miss" : "" )
  setSquareE5(attack.includes("E5") && sendShips == "E5" ? "hit" : attack.includes ("E5") && sendShip1 == "E5" ? "hit" : attack.includes("E5") && sendShip2 == "E5" ? "hit" : attack.includes("E5") && sendShip3 == "E5" ? "hit" : attack.includes("E5") && sendShip4 == "E5" ? "hit" : attack.includes("E5") ? "miss" : "" )
  setSquareE6(attack.includes("E6") && sendShips == "E6" ? "hit" : attack.includes ("E6") && sendShip1 == "E6" ? "hit" : attack.includes("E6") && sendShip2 == "E6" ? "hit" : attack.includes("E6") && sendShip3 == "E6" ? "hit" : attack.includes("E6") && sendShip4 == "E6" ? "hit" : attack.includes("E6") ? "miss" : "" )
  setSquareE7(attack.includes("E7") && sendShips == "E7" ? "hit" : attack.includes ("E7") && sendShip1 == "E7" ? "hit" : attack.includes("E7") && sendShip2 == "E7" ? "hit" : attack.includes("E7") && sendShip3 == "E7" ? "hit" : attack.includes("E7") && sendShip4 == "E7" ? "hit" : attack.includes("E7") ? "miss" : "" )
  setSquareE8(attack.includes("E8") && sendShips == "E8" ? "hit" : attack.includes ("E8") && sendShip1 == "E8" ? "hit" : attack.includes("E8") && sendShip2 == "E8" ? "hit" : attack.includes("E8") && sendShip3 == "E8" ? "hit" : attack.includes("E8") && sendShip4 == "E8" ? "hit" : attack.includes("E8") ? "miss" : "" )
  setSquareE9(attack.includes("E9") && sendShips == "E9" ? "hit" : attack.includes ("E9") && sendShip1 == "E9" ? "hit" : attack.includes("E9") && sendShip2 == "E9" ? "hit" : attack.includes("E9") && sendShip3 == "E9" ? "hit" : attack.includes("E9") && sendShip4 == "E9" ? "hit" : attack.includes("E9") ? "miss" : "" )
  setSquareF1(attack.includes("F1") && sendShips == "F1" ? "hit" : attack.includes ("F1") && sendShip1 == "F1" ? "hit" : attack.includes("F1") && sendShip2 == "F1" ? "hit" : attack.includes("F1") && sendShip3 == "F1" ? "hit" : attack.includes("F1") && sendShip4 == "F1" ? "hit" : attack.includes("F1") ? "miss" : "" )
  setSquareF2(attack.includes("F2") && sendShips == "F2" ? "hit" : attack.includes ("F2") && sendShip1 == "F2" ? "hit" : attack.includes("F2") && sendShip2 == "F2" ? "hit" : attack.includes("F2") && sendShip3 == "F2" ? "hit" : attack.includes("F2") && sendShip4 == "F2" ? "hit" : attack.includes("F2") ? "miss" : "" )
  setSquareF3(attack.includes("F3") && sendShips == "F3" ? "hit" : attack.includes ("F3") && sendShip1 == "F3" ? "hit" : attack.includes("F3") && sendShip2 == "F3" ? "hit" : attack.includes("F3") && sendShip3 == "F3" ? "hit" : attack.includes("F3") && sendShip4 == "F3" ? "hit" : attack.includes("F3") ? "miss" : "" )
  setSquareF4(attack.includes("F4") && sendShips == "F4" ? "hit" : attack.includes ("F4") && sendShip1 == "F4" ? "hit" : attack.includes("F4") && sendShip2 == "F4" ? "hit" : attack.includes("F4") && sendShip3 == "F4" ? "hit" : attack.includes("F4") && sendShip4 == "F4" ? "hit" : attack.includes("F4") ? "miss" : "" )
  setSquareF5(attack.includes("F5") && sendShips == "F5" ? "hit" : attack.includes ("F5") && sendShip1 == "F5" ? "hit" : attack.includes("F5") && sendShip2 == "F5" ? "hit" : attack.includes("F5") && sendShip3 == "F5" ? "hit" : attack.includes("F5") && sendShip4 == "F5" ? "hit" : attack.includes("F5") ? "miss" : "" )
  setSquareF6(attack.includes("F6") && sendShips == "F6" ? "hit" : attack.includes ("F6") && sendShip1 == "F6" ? "hit" : attack.includes("F6") && sendShip2 == "F6" ? "hit" : attack.includes("F6") && sendShip3 == "F6" ? "hit" : attack.includes("F6") && sendShip4 == "F6" ? "hit" : attack.includes("F6") ? "miss" : "" )
  setSquareF7(attack.includes("F7") && sendShips == "F7" ? "hit" : attack.includes ("F7") && sendShip1 == "F7" ? "hit" : attack.includes("F7") && sendShip2 == "F7" ? "hit" : attack.includes("F7") && sendShip3 == "F7" ? "hit" : attack.includes("F7") && sendShip4 == "F7" ? "hit" : attack.includes("F7") ? "miss" : "" )
  setSquareF8(attack.includes("F8") && sendShips == "F8" ? "hit" : attack.includes ("F8") && sendShip1 == "F8" ? "hit" : attack.includes("F8") && sendShip2 == "F8" ? "hit" : attack.includes("F8") && sendShip3 == "F8" ? "hit" : attack.includes("F8") && sendShip4 == "F8" ? "hit" : attack.includes("F8") ? "miss" : "" )
  setSquareF9(attack.includes("F9") && sendShips == "F9" ? "hit" : attack.includes ("F9") && sendShip1 == "F9" ? "hit" : attack.includes("F9") && sendShip2 == "F9" ? "hit" : attack.includes("F9") && sendShip3 == "F9" ? "hit" : attack.includes("F9") && sendShip4 == "F9" ? "hit" : attack.includes("F9") ? "miss" : "" )
  setSquareG1(attack.includes("G1") && sendShips == "G1" ? "hit" : attack.includes ("G1") && sendShip1 == "G1" ? "hit" : attack.includes("G1") && sendShip2 == "G1" ? "hit" : attack.includes("G1") && sendShip3 == "G1" ? "hit" : attack.includes("G1") && sendShip4 == "G1" ? "hit" : attack.includes("G1") ? "miss" : "" )
  setSquareG2(attack.includes("G2") && sendShips == "G2" ? "hit" : attack.includes ("G2") && sendShip1 == "G2" ? "hit" : attack.includes("G2") && sendShip2 == "G2" ? "hit" : attack.includes("G2") && sendShip3 == "G2" ? "hit" : attack.includes("G2") && sendShip4 == "G2" ? "hit" : attack.includes("G2") ? "miss" : "" )
  setSquareG3(attack.includes("G3") && sendShips == "G3" ? "hit" : attack.includes ("G3") && sendShip1 == "G3" ? "hit" : attack.includes("G3") && sendShip2 == "G3" ? "hit" : attack.includes("G3") && sendShip3 == "G3" ? "hit" : attack.includes("G3") && sendShip4 == "G3" ? "hit" : attack.includes("G3") ? "miss" : "" )
  setSquareG4(attack.includes("G4") && sendShips == "G4" ? "hit" : attack.includes ("G4") && sendShip1 == "G4" ? "hit" : attack.includes("G4") && sendShip2 == "G4" ? "hit" : attack.includes("G4") && sendShip3 == "G4" ? "hit" : attack.includes("G4") && sendShip4 == "G4" ? "hit" : attack.includes("G4") ? "miss" : "" )
  setSquareG5(attack.includes("G5") && sendShips == "G5" ? "hit" : attack.includes ("G5") && sendShip1 == "G5" ? "hit" : attack.includes("G5") && sendShip2 == "G5" ? "hit" : attack.includes("G5") && sendShip3 == "G5" ? "hit" : attack.includes("G5") && sendShip4 == "G5" ? "hit" : attack.includes("G5") ? "miss" : "" )
  setSquareG6(attack.includes("G6") && sendShips == "G6" ? "hit" : attack.includes ("G6") && sendShip1 == "G6" ? "hit" : attack.includes("G6") && sendShip2 == "G6" ? "hit" : attack.includes("G6") && sendShip3 == "G6" ? "hit" : attack.includes("G6") && sendShip4 == "G6" ? "hit" : attack.includes("G6") ? "miss" : "" )
  setSquareG7(attack.includes("G7") && sendShips == "G7" ? "hit" : attack.includes ("G7") && sendShip1 == "G7" ? "hit" : attack.includes("G7") && sendShip2 == "G7" ? "hit" : attack.includes("G7") && sendShip3 == "G7" ? "hit" : attack.includes("G7") && sendShip4 == "G7" ? "hit" : attack.includes("G7") ? "miss" : "" )
  setSquareG8(attack.includes("G8") && sendShips == "G8" ? "hit" : attack.includes ("G8") && sendShip1 == "G8" ? "hit" : attack.includes("G8") && sendShip2 == "G8" ? "hit" : attack.includes("G8") && sendShip3 == "G8" ? "hit" : attack.includes("G8") && sendShip4 == "G8" ? "hit" : attack.includes("G8") ? "miss" : "" )
  setSquareG9(attack.includes("G9") && sendShips == "G9" ? "hit" : attack.includes ("G9") && sendShip1 == "G9" ? "hit" : attack.includes("G9") && sendShip2 == "G9" ? "hit" : attack.includes("G9") && sendShip3 == "G9" ? "hit" : attack.includes("G9") && sendShip4 == "G9" ? "hit" : attack.includes("G9") ? "miss" : "" )
  setSquareH1(attack.includes("H1") && sendShips == "H1" ? "hit" : attack.includes ("H1") && sendShip1 == "H1" ? "hit" : attack.includes("H1") && sendShip2 == "H1" ? "hit" : attack.includes("H1") && sendShip3 == "H1" ? "hit" : attack.includes("H1") && sendShip4 == "H1" ? "hit" : attack.includes("H1") ? "miss" : "" )
  setSquareH2(attack.includes("H2") && sendShips == "H2" ? "hit" : attack.includes ("H2") && sendShip1 == "H2" ? "hit" : attack.includes("H2") && sendShip2 == "H2" ? "hit" : attack.includes("H2") && sendShip3 == "H2" ? "hit" : attack.includes("H2") && sendShip4 == "H2" ? "hit" : attack.includes("H2") ? "miss" : "" )
  setSquareH3(attack.includes("H3") && sendShips == "H3" ? "hit" : attack.includes ("H3") && sendShip1 == "H3" ? "hit" : attack.includes("H3") && sendShip2 == "H3" ? "hit" : attack.includes("H3") && sendShip3 == "H3" ? "hit" : attack.includes("H3") && sendShip4 == "H3" ? "hit" : attack.includes("H3") ? "miss" : "" )
  setSquareH4(attack.includes("H4") && sendShips == "H4" ? "hit" : attack.includes ("H4") && sendShip1 == "H4" ? "hit" : attack.includes("H4") && sendShip2 == "H4" ? "hit" : attack.includes("H4") && sendShip3 == "H4" ? "hit" : attack.includes("H4") && sendShip4 == "H4" ? "hit" : attack.includes("H4") ? "miss" : "" )
  setSquareH5(attack.includes("H5") && sendShips == "H5" ? "hit" : attack.includes ("H5") && sendShip1 == "H5" ? "hit" : attack.includes("H5") && sendShip2 == "H5" ? "hit" : attack.includes("H5") && sendShip3 == "H5" ? "hit" : attack.includes("H5") && sendShip4 == "H5" ? "hit" : attack.includes("H5") ? "miss" : "" )
  setSquareH6(attack.includes("H6") && sendShips == "H6" ? "hit" : attack.includes ("H6") && sendShip1 == "H6" ? "hit" : attack.includes("H6") && sendShip2 == "H6" ? "hit" : attack.includes("H6") && sendShip3 == "H6" ? "hit" : attack.includes("H6") && sendShip4 == "H6" ? "hit" : attack.includes("H6") ? "miss" : "" )
  setSquareH7(attack.includes("H7") && sendShips == "H7" ? "hit" : attack.includes ("H7") && sendShip1 == "H7" ? "hit" : attack.includes("H7") && sendShip2 == "H7" ? "hit" : attack.includes("H7") && sendShip3 == "H7" ? "hit" : attack.includes("H7") && sendShip4 == "H7" ? "hit" : attack.includes("H7") ? "miss" : "" )
  setSquareH8(attack.includes("H8") && sendShips == "H8" ? "hit" : attack.includes ("H8") && sendShip1 == "H8" ? "hit" : attack.includes("H8") && sendShip2 == "H8" ? "hit" : attack.includes("H8") && sendShip3 == "H8" ? "hit" : attack.includes("H8") && sendShip4 == "H8" ? "hit" : attack.includes("H8") ? "miss" : "" )
  setSquareH9(attack.includes("H9") && sendShips == "H9" ? "hit" : attack.includes ("H9") && sendShip1 == "H9" ? "hit" : attack.includes("H9") && sendShip2 == "H9" ? "hit" : attack.includes("H9") && sendShip3 == "H9" ? "hit" : attack.includes("H9") && sendShip4 == "H9" ? "hit" : attack.includes("H9") ? "miss" : "" )
  setSquareI1(attack.includes("I1") && sendShips == "I1" ? "hit" : attack.includes ("I1") && sendShip1 == "I1" ? "hit" : attack.includes("I1") && sendShip2 == "I1" ? "hit" : attack.includes("I1") && sendShip3 == "I1" ? "hit" : attack.includes("I1") && sendShip4 == "I1" ? "hit" : attack.includes("I1") ? "miss" : "" )
  setSquareI2(attack.includes("I2") && sendShips == "I2" ? "hit" : attack.includes ("I2") && sendShip1 == "I2" ? "hit" : attack.includes("I2") && sendShip2 == "I2" ? "hit" : attack.includes("I2") && sendShip3 == "I2" ? "hit" : attack.includes("I2") && sendShip4 == "I2" ? "hit" : attack.includes("I2") ? "miss" : "" )
  setSquareI3(attack.includes("I3") && sendShips == "I3" ? "hit" : attack.includes ("I3") && sendShip1 == "I3" ? "hit" : attack.includes("I3") && sendShip2 == "I3" ? "hit" : attack.includes("I3") && sendShip3 == "I3" ? "hit" : attack.includes("I3") && sendShip4 == "I3" ? "hit" : attack.includes("I3") ? "miss" : "" )
  setSquareI4(attack.includes("I4") && sendShips == "I4" ? "hit" : attack.includes ("I4") && sendShip1 == "I4" ? "hit" : attack.includes("I4") && sendShip2 == "I4" ? "hit" : attack.includes("I4") && sendShip3 == "I4" ? "hit" : attack.includes("I4") && sendShip4 == "I4" ? "hit" : attack.includes("I4") ? "miss" : "" )
  setSquareI5(attack.includes("I5") && sendShips == "I5" ? "hit" : attack.includes ("I5") && sendShip1 == "I5" ? "hit" : attack.includes("I5") && sendShip2 == "I5" ? "hit" : attack.includes("I5") && sendShip3 == "I5" ? "hit" : attack.includes("I5") && sendShip4 == "I5" ? "hit" : attack.includes("I5") ? "miss" : "" )
  setSquareI6(attack.includes("I6") && sendShips == "I6" ? "hit" : attack.includes ("I6") && sendShip1 == "I6" ? "hit" : attack.includes("I6") && sendShip2 == "I6" ? "hit" : attack.includes("I6") && sendShip3 == "I6" ? "hit" : attack.includes("I6") && sendShip4 == "I6" ? "hit" : attack.includes("I6") ? "miss" : "" )
  setSquareI7(attack.includes("I7") && sendShips == "I7" ? "hit" : attack.includes ("I7") && sendShip1 == "I7" ? "hit" : attack.includes("I7") && sendShip2 == "I7" ? "hit" : attack.includes("I7") && sendShip3 == "I7" ? "hit" : attack.includes("I7") && sendShip4 == "I7" ? "hit" : attack.includes("I7") ? "miss" : "" )
  setSquareI8(attack.includes("I8") && sendShips == "I8" ? "hit" : attack.includes ("I8") && sendShip1 == "I8" ? "hit" : attack.includes("I8") && sendShip2 == "I8" ? "hit" : attack.includes("I8") && sendShip3 == "I8" ? "hit" : attack.includes("I8") && sendShip4 == "I8" ? "hit" : attack.includes("I8") ? "miss" : "" )
  setSquareI9(attack.includes("I9") && sendShips == "I9" ? "hit" : attack.includes ("I9") && sendShip1 == "I9" ? "hit" : attack.includes("I9") && sendShip2 == "I9" ? "hit" : attack.includes("I9") && sendShip3 == "I9" ? "hit" : attack.includes("I9") && sendShip4 == "I9" ? "hit" : attack.includes("I9") ? "miss" : "" )
  saveAttacked()
}

////guardar barcos del jugador hundidos****************************//

const saveAttacked = () => {
  setMyShips(attack.includes("A1") && sendShips == "A1" ? "hit" :
  attack.includes("A2") && sendShips == "A2" ? "hit" : 
  attack.includes("A3") && sendShips == "A3" ? "hit" : 
  attack.includes("A4") && sendShips == "A4" ? "hit" : 
  attack.includes("A5") && sendShips == "A5" ? "hit" : 
  attack.includes("A6") && sendShips == "A6" ? "hit" : 
  attack.includes("A7") && sendShips == "A7" ? "hit" : 
  attack.includes("A8") && sendShips == "A8" ? "hit" : 
  attack.includes("A9") && sendShips == "A9" ? "hit" : 
  attack.includes("B1") && sendShips == "B1" ? "hit" : 
  attack.includes("B2") && sendShips == "B2" ? "hit" : 
  attack.includes("B3") && sendShips == "B3" ? "hit" : 
  attack.includes("B4") && sendShips == "B4" ? "hit" : 
  attack.includes("B5") && sendShips == "B5" ? "hit" : 
  attack.includes("B6") && sendShips == "B6" ? "hit" : 
  attack.includes("B7") && sendShips == "B7" ? "hit" : 
  attack.includes("B8") && sendShips == "B8" ? "hit" : 
  attack.includes("B9") && sendShips == "B9" ? "hit" : 
  attack.includes("C1") && sendShips == "C1" ? "hit" : 
  attack.includes("C2") && sendShips == "C2" ? "hit" : 
  attack.includes("C3") && sendShips == "C3" ? "hit" : 
  attack.includes("C4") && sendShips == "C4" ? "hit" : 
  attack.includes("C5") && sendShips == "C5" ? "hit" : 
  attack.includes("C6") && sendShips == "C6" ? "hit" : 
  attack.includes("C7") && sendShips == "C7" ? "hit" : 
  attack.includes("C8") && sendShips == "C8" ? "hit" : 
  attack.includes("C9") && sendShips == "C9" ? "hit" : 
  attack.includes("D1") && sendShips == "D1" ? "hit" : 
  attack.includes("D2") && sendShips == "D2" ? "hit" : 
  attack.includes("D3") && sendShips == "D3" ? "hit" : 
  attack.includes("D4") && sendShips == "D4" ? "hit" : 
  attack.includes("D5") && sendShips == "D5" ? "hit" : 
  attack.includes("D6") && sendShips == "D6" ? "hit" : 
  attack.includes("D7") && sendShips == "D7" ? "hit" : 
  attack.includes("D8") && sendShips == "D8" ? "hit" : 
  attack.includes("D9") && sendShips == "D9" ? "hit" : 
  attack.includes("E1") && sendShips == "E1" ? "hit" : 
  attack.includes("E2") && sendShips == "E2" ? "hit" : 
  attack.includes("E3") && sendShips == "E3" ? "hit" : 
  attack.includes("E4") && sendShips == "E4" ? "hit" : 
  attack.includes("E5") && sendShips == "E5" ? "hit" : 
  attack.includes("E6") && sendShips == "E6" ? "hit" : 
  attack.includes("E7") && sendShips == "E7" ? "hit" : 
  attack.includes("E8") && sendShips == "E8" ? "hit" : 
  attack.includes("E9") && sendShips == "E9" ? "hit" : 
  attack.includes("F1") && sendShips == "F1" ? "hit" : 
  attack.includes("F2") && sendShips == "F2" ? "hit" : 
  attack.includes("F3") && sendShips == "F3" ? "hit" : 
  attack.includes("F4") && sendShips == "F4" ? "hit" : 
  attack.includes("F5") && sendShips == "F5" ? "hit" : 
  attack.includes("F6") && sendShips == "F6" ? "hit" : 
  attack.includes("F7") && sendShips == "F7" ? "hit" : 
  attack.includes("F8") && sendShips == "F8" ? "hit" : 
  attack.includes("F9") && sendShips == "F9" ? "hit" : 
  attack.includes("G1") && sendShips == "G1" ? "hit" : 
  attack.includes("G2") && sendShips == "G2" ? "hit" : 
  attack.includes("G3") && sendShips == "G3" ? "hit" : 
  attack.includes("G4") && sendShips == "G4" ? "hit" : 
  attack.includes("G5") && sendShips == "G5" ? "hit" : 
  attack.includes("G6") && sendShips == "G6" ? "hit" : 
  attack.includes("G7") && sendShips == "G7" ? "hit" : 
  attack.includes("G8") && sendShips == "G8" ? "hit" : 
  attack.includes("G9") && sendShips == "G9" ? "hit" : 
  attack.includes("H1") && sendShips == "H1" ? "hit" : 
  attack.includes("H2") && sendShips == "H2" ? "hit" : 
  attack.includes("H3") && sendShips == "H3" ? "hit" : 
  attack.includes("H4") && sendShips == "H4" ? "hit" : 
  attack.includes("H5") && sendShips == "H5" ? "hit" : 
  attack.includes("H6") && sendShips == "H6" ? "hit" : 
  attack.includes("H7") && sendShips == "H7" ? "hit" : 
  attack.includes("H8") && sendShips == "H8" ? "hit" : 
  attack.includes("H9") && sendShips == "H9" ? "hit" : 
  attack.includes("I1") && sendShips == "I1" ? "hit" : 
  attack.includes("I2") && sendShips == "I2" ? "hit" : 
  attack.includes("I3") && sendShips == "I3" ? "hit" : 
  attack.includes("I4") && sendShips == "I4" ? "hit" : 
  attack.includes("I5") && sendShips == "I5" ? "hit" : 
  attack.includes("I6") && sendShips == "I6" ? "hit" : 
  attack.includes("I7") && sendShips == "I7" ? "hit" : 
  attack.includes("I8") && sendShips == "I8" ? "hit" : 
  attack.includes("I9") && sendShips == "I9" ? "hit" : myShips)
  setMyShips1(attack.includes("A1") && sendShip1 == "A1" ? "hit" :
  attack.includes("A2") && sendShip1 == "A2" ? "hit" :
  attack.includes("A3") && sendShip1 == "A3" ? "hit" : 
  attack.includes("A4") && sendShip1 == "A4" ? "hit" : 
  attack.includes("A5") && sendShip1 == "A5" ? "hit" : 
  attack.includes("A6") && sendShip1 == "A6" ? "hit" : 
  attack.includes("A7") && sendShip1 == "A7" ? "hit" : 
  attack.includes("A8") && sendShip1 == "A8" ? "hit" : 
  attack.includes("A9") && sendShip1 == "A9" ? "hit" : 
  attack.includes("B1") && sendShip1 == "B1" ? "hit" : 
  attack.includes("B2") && sendShip1 == "B2" ? "hit" : 
  attack.includes("B3") && sendShip1 == "B3" ? "hit" : 
  attack.includes("B4") && sendShip1 == "B4" ? "hit" : 
  attack.includes("B5") && sendShip1 == "B5" ? "hit" : 
  attack.includes("B6") && sendShip1 == "B6" ? "hit" : 
  attack.includes("B7") && sendShip1 == "B7" ? "hit" : 
  attack.includes("B8") && sendShip1 == "B8" ? "hit" : 
  attack.includes("B9") && sendShip1 == "B9" ? "hit" : 
  attack.includes("C1") && sendShip1 == "C1" ? "hit" : 
  attack.includes("C2") && sendShip1 == "C2" ? "hit" : 
  attack.includes("C3") && sendShip1 == "C3" ? "hit" : 
  attack.includes("C4") && sendShip1 == "C4" ? "hit" : 
  attack.includes("C5") && sendShip1 == "C5" ? "hit" : 
  attack.includes("C6") && sendShip1 == "C6" ? "hit" : 
  attack.includes("C7") && sendShip1 == "C7" ? "hit" : 
  attack.includes("C8") && sendShip1 == "C8" ? "hit" : 
  attack.includes("C9") && sendShip1 == "C9" ? "hit" : 
  attack.includes("D1") && sendShip1 == "D1" ? "hit" : 
  attack.includes("D2") && sendShip1 == "D2" ? "hit" : 
  attack.includes("D3") && sendShip1 == "D3" ? "hit" : 
  attack.includes("D4") && sendShip1 == "D4" ? "hit" : 
  attack.includes("D5") && sendShip1 == "D5" ? "hit" : 
  attack.includes("D6") && sendShip1 == "D6" ? "hit" : 
  attack.includes("D7") && sendShip1 == "D7" ? "hit" : 
  attack.includes("D8") && sendShip1 == "D8" ? "hit" : 
  attack.includes("D9") && sendShip1 == "D9" ? "hit" : 
  attack.includes("E1") && sendShip1 == "E1" ? "hit" : 
  attack.includes("E2") && sendShip1 == "E2" ? "hit" : 
  attack.includes("E3") && sendShip1 == "E3" ? "hit" : 
  attack.includes("E4") && sendShip1 == "E4" ? "hit" : 
  attack.includes("E5") && sendShip1 == "E5" ? "hit" : 
  attack.includes("E6") && sendShip1 == "E6" ? "hit" : 
  attack.includes("E7") && sendShip1 == "E7" ? "hit" : 
  attack.includes("E8") && sendShip1 == "E8" ? "hit" : 
  attack.includes("E9") && sendShip1 == "E9" ? "hit" : 
  attack.includes("F1") && sendShip1 == "F1" ? "hit" : 
  attack.includes("F2") && sendShip1 == "F2" ? "hit" : 
  attack.includes("F3") && sendShip1 == "F3" ? "hit" : 
  attack.includes("F4") && sendShip1 == "F4" ? "hit" : 
  attack.includes("F5") && sendShip1 == "F5" ? "hit" : 
  attack.includes("F6") && sendShip1 == "F6" ? "hit" : 
  attack.includes("F7") && sendShip1 == "F7" ? "hit" : 
  attack.includes("F8") && sendShip1 == "F8" ? "hit" : 
  attack.includes("F9") && sendShip1 == "F9" ? "hit" : 
  attack.includes("G1") && sendShip1 == "G1" ? "hit" : 
  attack.includes("G2") && sendShip1 == "G2" ? "hit" : 
  attack.includes("G3") && sendShip1 == "G3" ? "hit" : 
  attack.includes("G4") && sendShip1 == "G4" ? "hit" : 
  attack.includes("G5") && sendShip1 == "G5" ? "hit" : 
  attack.includes("G6") && sendShip1 == "G6" ? "hit" : 
  attack.includes("G7") && sendShip1 == "G7" ? "hit" : 
  attack.includes("G8") && sendShip1 == "G8" ? "hit" : 
  attack.includes("G9") && sendShip1 == "G9" ? "hit" : 
  attack.includes("H1") && sendShip1 == "H1" ? "hit" : 
  attack.includes("H2") && sendShip1 == "H2" ? "hit" : 
  attack.includes("H3") && sendShip1 == "H3" ? "hit" : 
  attack.includes("H4") && sendShip1 == "H4" ? "hit" : 
  attack.includes("H5") && sendShip1 == "H5" ? "hit" : 
  attack.includes("H6") && sendShip1 == "H6" ? "hit" : 
  attack.includes("H7") && sendShip1 == "H7" ? "hit" : 
  attack.includes("H8") && sendShip1 == "H8" ? "hit" : 
  attack.includes("H9") && sendShip1 == "H9" ? "hit" : 
  attack.includes("I1") && sendShip1 == "I1" ? "hit" : 
  attack.includes("I2") && sendShip1 == "I2" ? "hit" : 
  attack.includes("I3") && sendShip1 == "I3" ? "hit" : 
  attack.includes("I4") && sendShip1 == "I4" ? "hit" : 
  attack.includes("I5") && sendShip1 == "I5" ? "hit" : 
  attack.includes("I6") && sendShip1 == "I6" ? "hit" : 
  attack.includes("I7") && sendShip1 == "I7" ? "hit" : 
  attack.includes("I8") && sendShip1 == "I8" ? "hit" : 
  attack.includes("I9") && sendShip1 == "I9" ? "hit" : myShips1)
  setMyShips2(attack.includes("A1") && sendShip2 == "A1" ? "hit"  :
  attack.includes("A2") && sendShip2 == "A2" ? "hit" :
  attack.includes("A3") && sendShip2 == "A3" ? "hit" :
  attack.includes("A4") && sendShip2 == "A4" ? "hit" :
  attack.includes("A5") && sendShip2 == "A5" ? "hit" :
  attack.includes("A6") && sendShip2 == "A6" ? "hit" :
  attack.includes("A7") && sendShip2 == "A7" ? "hit" :
  attack.includes("A8") && sendShip2 == "A8" ? "hit" :
  attack.includes("A9") && sendShip2 == "A9" ? "hit" :
  attack.includes("B1") && sendShip2 == "B1" ? "hit" :
  attack.includes("B2") && sendShip2 == "B2" ? "hit" :
  attack.includes("B3") && sendShip2 == "B3" ? "hit" :
  attack.includes("B4") && sendShip2 == "B4" ? "hit" :
  attack.includes("B5") && sendShip2 == "B5" ? "hit" :
  attack.includes("B6") && sendShip2 == "B6" ? "hit" :
  attack.includes("B7") && sendShip2 == "B7" ? "hit" :
  attack.includes("B8") && sendShip2 == "B8" ? "hit" :
  attack.includes("B9") && sendShip2 == "B9" ? "hit" :
  attack.includes("C1") && sendShip2 == "C1" ? "hit" :
  attack.includes("C2") && sendShip2 == "C2" ? "hit" :
  attack.includes("C3") && sendShip2 == "C3" ? "hit" :
  attack.includes("C4") && sendShip2 == "C4" ? "hit" :
  attack.includes("C5") && sendShip2 == "C5" ? "hit" :
  attack.includes("C6") && sendShip2 == "C6" ? "hit" :
  attack.includes("C7") && sendShip2 == "C7" ? "hit" :
  attack.includes("C8") && sendShip2 == "C8" ? "hit" :
  attack.includes("C9") && sendShip2 == "C9" ? "hit" :
  attack.includes("D1") && sendShip2 == "D1" ? "hit" :
  attack.includes("D2") && sendShip2 == "D2" ? "hit" :
  attack.includes("D3") && sendShip2 == "D3" ? "hit" :
  attack.includes("D4") && sendShip2 == "D4" ? "hit" :
  attack.includes("D5") && sendShip2 == "D5" ? "hit" :
  attack.includes("D6") && sendShip2 == "D6" ? "hit" :
  attack.includes("D7") && sendShip2 == "D7" ? "hit" :
  attack.includes("D8") && sendShip2 == "D8" ? "hit" :
  attack.includes("D9") && sendShip2 == "D9" ? "hit" :
  attack.includes("E1") && sendShip2 == "E1" ? "hit" :
  attack.includes("E2") && sendShip2 == "E2" ? "hit" :
  attack.includes("E3") && sendShip2 == "E3" ? "hit" :
  attack.includes("E4") && sendShip2 == "E4" ? "hit" :
  attack.includes("E5") && sendShip2 == "E5" ? "hit" :
  attack.includes("E6") && sendShip2 == "E6" ? "hit" :
  attack.includes("E7") && sendShip2 == "E7" ? "hit" :
  attack.includes("E8") && sendShip2 == "E8" ? "hit" :
  attack.includes("E9") && sendShip2 == "E9" ? "hit" :
  attack.includes("F1") && sendShip2 == "F1" ? "hit" :
  attack.includes("F2") && sendShip2 == "F2" ? "hit" :
  attack.includes("F3") && sendShip2 == "F3" ? "hit" :
  attack.includes("F4") && sendShip2 == "F4" ? "hit" :
  attack.includes("F5") && sendShip2 == "F5" ? "hit" :
  attack.includes("F6") && sendShip2 == "F6" ? "hit" :
  attack.includes("F7") && sendShip2 == "F7" ? "hit" :
  attack.includes("F8") && sendShip2 == "F8" ? "hit" :
  attack.includes("F9") && sendShip2 == "F9" ? "hit" :
  attack.includes("G1") && sendShip2 == "G1" ? "hit" :
  attack.includes("G2") && sendShip2 == "G2" ? "hit" :
  attack.includes("G3") && sendShip2 == "G3" ? "hit" :
  attack.includes("G4") && sendShip2 == "G4" ? "hit" :
  attack.includes("G5") && sendShip2 == "G5" ? "hit" :
  attack.includes("G6") && sendShip2 == "G6" ? "hit" :
  attack.includes("G7") && sendShip2 == "G7" ? "hit" :
  attack.includes("G8") && sendShip2 == "G8" ? "hit" :
  attack.includes("G9") && sendShip2 == "G9" ? "hit" :
  attack.includes("H1") && sendShip2 == "H1" ? "hit" :
  attack.includes("H2") && sendShip2 == "H2" ? "hit" :
  attack.includes("H3") && sendShip2 == "H3" ? "hit" :
  attack.includes("H4") && sendShip2 == "H4" ? "hit" :
  attack.includes("H5") && sendShip2 == "H5" ? "hit" :
  attack.includes("H6") && sendShip2 == "H6" ? "hit" :
  attack.includes("H7") && sendShip2 == "H7" ? "hit" :
  attack.includes("H8") && sendShip2 == "H8" ? "hit" :
  attack.includes("H9") && sendShip2 == "H9" ? "hit" :
  attack.includes("I1") && sendShip2 == "I1" ? "hit" :
  attack.includes("I2") && sendShip2 == "I2" ? "hit" :
  attack.includes("I3") && sendShip2 == "I3" ? "hit" :
  attack.includes("I4") && sendShip2 == "I4" ? "hit" :
  attack.includes("I5") && sendShip2 == "I5" ? "hit" :
  attack.includes("I6") && sendShip2 == "I6" ? "hit" :
  attack.includes("I7") && sendShip2 == "I7" ? "hit" :
  attack.includes("I8") && sendShip2 == "I8" ? "hit" :
  attack.includes("I9") && sendShip2 == "I9" ? "hit" : myShips2)
  setMyShips3(attack.includes("A1") && sendShip3 == "A1" ? "hit"  :
  attack.includes("A2") && sendShip3 == "A2" ? "hit" :
  attack.includes("A3") && sendShip3 == "A3" ? "hit" :
  attack.includes("A4") && sendShip3 == "A4" ? "hit" :
  attack.includes("A5") && sendShip3 == "A5" ? "hit" :
  attack.includes("A6") && sendShip3 == "A6" ? "hit" :
  attack.includes("A7") && sendShip3 == "A7" ? "hit" :
  attack.includes("A8") && sendShip3 == "A8" ? "hit" :
  attack.includes("A9") && sendShip3 == "A9" ? "hit" :
  attack.includes("B1") && sendShip3 == "B1" ? "hit" :
  attack.includes("B2") && sendShip3 == "B2" ? "hit" :
  attack.includes("B3") && sendShip3 == "B3" ? "hit" :
  attack.includes("B4") && sendShip3 == "B4" ? "hit" :
  attack.includes("B5") && sendShip3 == "B5" ? "hit" :
  attack.includes("B6") && sendShip3 == "B6" ? "hit" :
  attack.includes("B7") && sendShip3 == "B7" ? "hit" :
  attack.includes("B8") && sendShip3 == "B8" ? "hit" :
  attack.includes("B9") && sendShip3 == "B9" ? "hit" :
  attack.includes("C1") && sendShip3 == "C1" ? "hit" :
  attack.includes("C2") && sendShip3 == "C2" ? "hit" :
  attack.includes("C3") && sendShip3 == "C3" ? "hit" :
  attack.includes("C4") && sendShip3 == "C4" ? "hit" :
  attack.includes("C5") && sendShip3 == "C5" ? "hit" :
  attack.includes("C6") && sendShip3 == "C6" ? "hit" :
  attack.includes("C7") && sendShip3 == "C7" ? "hit" :
  attack.includes("C8") && sendShip3 == "C8" ? "hit" :
  attack.includes("C9") && sendShip3 == "C9" ? "hit" :
  attack.includes("D1") && sendShip3 == "D1" ? "hit" :
  attack.includes("D2") && sendShip3 == "D2" ? "hit" :
  attack.includes("D3") && sendShip3 == "D3" ? "hit" :
  attack.includes("D4") && sendShip3 == "D4" ? "hit" :
  attack.includes("D5") && sendShip3 == "D5" ? "hit" :
  attack.includes("D6") && sendShip3 == "D6" ? "hit" :
  attack.includes("D7") && sendShip3 == "D7" ? "hit" :
  attack.includes("D8") && sendShip3 == "D8" ? "hit" :
  attack.includes("D9") && sendShip3 == "D9" ? "hit" :
  attack.includes("E1") && sendShip3 == "E1" ? "hit" :
  attack.includes("E2") && sendShip3 == "E2" ? "hit" :
  attack.includes("E3") && sendShip3 == "E3" ? "hit" :
  attack.includes("E4") && sendShip3 == "E4" ? "hit" :
  attack.includes("E5") && sendShip3 == "E5" ? "hit" :
  attack.includes("E6") && sendShip3 == "E6" ? "hit" :
  attack.includes("E7") && sendShip3 == "E7" ? "hit" :
  attack.includes("E8") && sendShip3 == "E8" ? "hit" :
  attack.includes("E9") && sendShip3 == "E9" ? "hit" :
  attack.includes("F1") && sendShip3 == "F1" ? "hit" :
  attack.includes("F2") && sendShip3 == "F2" ? "hit" :
  attack.includes("F3") && sendShip3 == "F3" ? "hit" :
  attack.includes("F4") && sendShip3 == "F4" ? "hit" :
  attack.includes("F5") && sendShip3 == "F5" ? "hit" :
  attack.includes("F6") && sendShip3 == "F6" ? "hit" :
  attack.includes("F7") && sendShip3 == "F7" ? "hit" :
  attack.includes("F8") && sendShip3 == "F8" ? "hit" :
  attack.includes("F9") && sendShip3 == "F9" ? "hit" :
  attack.includes("G1") && sendShip3 == "G1" ? "hit" :
  attack.includes("G2") && sendShip3 == "G2" ? "hit" :
  attack.includes("G3") && sendShip3 == "G3" ? "hit" :
  attack.includes("G4") && sendShip3 == "G4" ? "hit" :
  attack.includes("G5") && sendShip3 == "G5" ? "hit" :
  attack.includes("G6") && sendShip3 == "G6" ? "hit" :
  attack.includes("G7") && sendShip3 == "G7" ? "hit" :
  attack.includes("G8") && sendShip3 == "G8" ? "hit" :
  attack.includes("G9") && sendShip3 == "G9" ? "hit" :
  attack.includes("H1") && sendShip3 == "H1" ? "hit" :
  attack.includes("H2") && sendShip3 == "H2" ? "hit" :
  attack.includes("H3") && sendShip3 == "H3" ? "hit" :
  attack.includes("H4") && sendShip3 == "H4" ? "hit" :
  attack.includes("H5") && sendShip3 == "H5" ? "hit" :
  attack.includes("H6") && sendShip3 == "H6" ? "hit" :
  attack.includes("H7") && sendShip3 == "H7" ? "hit" :
  attack.includes("H8") && sendShip3 == "H8" ? "hit" :
  attack.includes("H9") && sendShip3 == "H9" ? "hit" :
  attack.includes("I1") && sendShip3 == "I1" ? "hit" :
  attack.includes("I2") && sendShip3 == "I2" ? "hit" :
  attack.includes("I3") && sendShip3 == "I3" ? "hit" :
  attack.includes("I4") && sendShip3 == "I4" ? "hit" :
  attack.includes("I5") && sendShip3 == "I5" ? "hit" :
  attack.includes("I6") && sendShip3 == "I6" ? "hit" :
  attack.includes("I7") && sendShip3 == "I7" ? "hit" :
  attack.includes("I8") && sendShip3 == "I8" ? "hit" :
  attack.includes("I9") && sendShip3 == "I9" ? "hit" : myShips3)
  setMyShips4(attack.includes("A1") && sendShip4 == "A1" ? "hit" :
  attack.includes("A2") && sendShip4 == "A2" ? "hit" :
  attack.includes("A3") && sendShip4 == "A3" ? "hit" :
  attack.includes("A4") && sendShip4 == "A4" ? "hit" :
  attack.includes("A5") && sendShip4 == "A5" ? "hit" : 
  attack.includes("A6") && sendShip4 == "A6" ? "hit" :
  attack.includes("A7") && sendShip4 == "A7" ? "hit" :
  attack.includes("A8") && sendShip4 == "A8" ? "hit" :
  attack.includes("A9") && sendShip4 == "A9" ? "hit" :
  attack.includes("B1") && sendShip4 == "B1" ? "hit" :
  attack.includes("B2") && sendShip4 == "B2" ? "hit" :
  attack.includes("B3") && sendShip4 == "B3" ? "hit" :
  attack.includes("B4") && sendShip4 == "B4" ? "hit" :
  attack.includes("B5") && sendShip4 == "B5" ? "hit" :
  attack.includes("B6") && sendShip4 == "B6" ? "hit" :
  attack.includes("B7") && sendShip4 == "B7" ? "hit" :
  attack.includes("B8") && sendShip4 == "B8" ? "hit" :
  attack.includes("B9") && sendShip4 == "B9" ? "hit" :
  attack.includes("C1") && sendShip4 == "C1" ? "hit" :
  attack.includes("C2") && sendShip4 == "C2" ? "hit" :
  attack.includes("C3") && sendShip4 == "C3" ? "hit" :
  attack.includes("C4") && sendShip4 == "C4" ? "hit" :
  attack.includes("C5") && sendShip4 == "C5" ? "hit" :
  attack.includes("C6") && sendShip4 == "C6" ? "hit" :
  attack.includes("C7") && sendShip4 == "C7" ? "hit" :
  attack.includes("C8") && sendShip4 == "C8" ? "hit" :
  attack.includes("C9") && sendShip4 == "C9" ? "hit" :
  attack.includes("D1") && sendShip4 == "D1" ? "hit" :
  attack.includes("D2") && sendShip4 == "D2" ? "hit" :
  attack.includes("D3") && sendShip4 == "D3" ? "hit" :
  attack.includes("D4") && sendShip4 == "D4" ? "hit" :
  attack.includes("D5") && sendShip4 == "D5" ? "hit" :
  attack.includes("D6") && sendShip4 == "D6" ? "hit" :
  attack.includes("D7") && sendShip4 == "D7" ? "hit" :
  attack.includes("D8") && sendShip4 == "D8" ? "hit" :
  attack.includes("D9") && sendShip4 == "D9" ? "hit" :
  attack.includes("E1") && sendShip4 == "E1" ? "hit" :
  attack.includes("E2") && sendShip4 == "E2" ? "hit" :
  attack.includes("E3") && sendShip4 == "E3" ? "hit" :
  attack.includes("E4") && sendShip4 == "E4" ? "hit" :
  attack.includes("E5") && sendShip4 == "E5" ? "hit" :
  attack.includes("E6") && sendShip4 == "E6" ? "hit" :
  attack.includes("E7") && sendShip4 == "E7" ? "hit" :
  attack.includes("E8") && sendShip4 == "E8" ? "hit" :
  attack.includes("E9") && sendShip4 == "E9" ? "hit" :
  attack.includes("F1") && sendShip4 == "F1" ? "hit" :
  attack.includes("F2") && sendShip4 == "F2" ? "hit" :
  attack.includes("F3") && sendShip4 == "F3" ? "hit" :
  attack.includes("F4") && sendShip4 == "F4" ? "hit" :
  attack.includes("F5") && sendShip4 == "F5" ? "hit" :
  attack.includes("F6") && sendShip4 == "F6" ? "hit" :
  attack.includes("F7") && sendShip4 == "F7" ? "hit" :
  attack.includes("F8") && sendShip4 == "F8" ? "hit" :
  attack.includes("F9") && sendShip4 == "F9" ? "hit" :
  attack.includes("G1") && sendShip4 == "G1" ? "hit" :
  attack.includes("G2") && sendShip4 == "G2" ? "hit" :
  attack.includes("G3") && sendShip4 == "G3" ? "hit" :
  attack.includes("G4") && sendShip4 == "G4" ? "hit" :
  attack.includes("G5") && sendShip4 == "G5" ? "hit" :
  attack.includes("G6") && sendShip4 == "G6" ? "hit" :
  attack.includes("G7") && sendShip4 == "G7" ? "hit" :
  attack.includes("G8") && sendShip4 == "G8" ? "hit" :
  attack.includes("G9") && sendShip4 == "G9" ? "hit" :
  attack.includes("H1") && sendShip4 == "H1" ? "hit" :
  attack.includes("H2") && sendShip4 == "H2" ? "hit" :
  attack.includes("H3") && sendShip4 == "H3" ? "hit" :
  attack.includes("H4") && sendShip4 == "H4" ? "hit" :
  attack.includes("H5") && sendShip4 == "H5" ? "hit" :
  attack.includes("H6") && sendShip4 == "H6" ? "hit" :
  attack.includes("H7") && sendShip4 == "H7" ? "hit" :
  attack.includes("H8") && sendShip4 == "H8" ? "hit" :
  attack.includes("H9") && sendShip4 == "H9" ? "hit" :
  attack.includes("I1") && sendShip4 == "I1" ? "hit" :
  attack.includes("I2") && sendShip4 == "I2" ? "hit" :
  attack.includes("I3") && sendShip4 == "I3" ? "hit" :
  attack.includes("I4") && sendShip4 == "I4" ? "hit" :
  attack.includes("I5") && sendShip4 == "I5" ? "hit" :
  attack.includes("I6") && sendShip4 == "I6" ? "hit" :
  attack.includes("I7") && sendShip4 == "I7" ? "hit" :
  attack.includes("I8") && sendShip4 == "I8" ? "hit" :
  attack.includes("I9") && sendShip4 == "I9" ? "hit" : myShips4)
}


//posicionar Mis barcos*************************************************************************************//
const placeMyShips = (e) => {

setMyShips(e.target.value)
} 
const placeMyShips1 = (e) => {
  setMyShips1(e.target.value)
  } 
const placeMyShips2 = (e) => {
    setMyShips2(e.target.value)
    } 
const placeMyShips3 = (e) => {
  setMyShips3(e.target.value)
  } 
const placeMyShips4 = (e) => {
    setMyShips4(e.target.value)
}
const sendMyShips = () => {
setSendShips([myShips])
}
const sendMyShip1 = () => {
  setSendShip1([myShips1])
  }
const sendMyShip2 = () => {
  setSendShip2([myShips2])
  }
const sendMyShip3 = () => {
  setSendShip3([myShips3])
 }
const sendMyShip4 = () => {
  setSendShip4([myShips4])
 }



let letter = ['A','B','C','D','E','F','G','H','I'];
let number = ['1','2','3','4','5','6','7','8','9'];
let ships = [];
let enemyAttacks = [];

  ships += letter[Math.floor(Math.random() * letter.length)] + number[Math.floor(Math.random() * number.length)];

  enemyAttacks += letter[Math.floor(Math.random() * letter.length)] + number[Math.floor(Math.random() * number.length)];


// gameover situations******************************* */
const gameover = () => {
  setGameOver(attackedEnemies.length >= 4 ? "YouWin" : myShips ==("hit") && myShips1==("hit") && myShips2 == ("hit") && myShips3 == ("hit") && myShips4 == ("hit") ? "YouLose": "")


}


console.log(myShips)
console.log(myShips1)
console.log(myShips2)
console.log(myShips3)
console.log(myShips4)
console.log(enemyShips)
console.log(attack)
console.log(sendShips)
console.log(sendShip1)
console.log(sendShip2)
console.log(sendShip3)
console.log(sendShip4)
console.log(gameOver)
console.log(attackedEnemies)
console.log(attackedShips)
//en orden descendente://
//inputs para colocar los barcos del jugador con sus botones//
//botón para colocar los barcos enemigos//
//tablero del jugador//
//tablero enemigo//
  return (<div>
    <div className='instrucciones'>Ingresa una coordenada para cada barco en cada input y presiona el botón para poner el barco. <br></br>
     Presiona el botón de enmigos hasta 5 veces para agregar enemigos que serán invisibles hasta que los reveles con tu click en los cuadros de coordenadas.  <br></br>
     Cuando descubras un enemigo, hazle click una vez más para destruirlo.<br></br>
     Ganarás cuando destruyas los barcos enemigos, pero perderás si el enmigo destruye los tuyos.

     </div>
    <input placeholder='Ej: A1' onChange={placeMyShips}></input>
    <button onClick={sendMyShips}>poner barco</button>
    <input placeholder='Ej: A2' onChange={placeMyShips1}></input>
    <button onClick={sendMyShip1}>poner barco</button>
    <input placeholder='Ej: A3' onChange={placeMyShips2}></input>
    <button onClick={sendMyShip2}>poner barco</button>
    <input placeholder='Ej: A4' onChange={placeMyShips3}></input>
    <button onClick={sendMyShip3}>poner barco</button>
    <input placeholder='Ej: A5' onChange={placeMyShips4}></input>
    <button onClick={sendMyShip4}>poner barco</button>

    <button onClick={placeEnemyShips}>Enemigos</button>

    <div className="container d-flex">
      <div className="row row-cols-3">
        <div className="col-1 gridborder top side"></div>
        <div className="col-1 gridborder top">1</div>
        <div className="col-1 gridborder top">2</div>
        <div className="col-1 gridborder top">3</div>
        <div className="col-1 gridborder top">4</div>
        <div className="col-1 gridborder top">5</div>
        <div className="col-1 gridborder top">6</div>
        <div className="col-1 gridborder top">7</div>
        <div className="col-1 gridborder top">8</div>
        <div className="col-1 gridborder top">9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">A</div>
          <div className={"col-1 A1" + (sendShips == "A1" ? " ship" : sendShip1 == "A1" ? " ship" : sendShip2 == "A1" ? " ship" : sendShip3 == "A1" ? " ship" : sendShip4 == "A1" ? " ship" :   "") + (squareA1 == "hit" ? " hit" : squareA1 == "miss" ? " miss" : "")}>A1</div>
          <div className={"col-1 A2" + (sendShips == "A2" ? " ship" : sendShip1 == "A2" ? " ship" : sendShip2 == "A2" ? " ship" : sendShip3 == "A2" ? " ship" : sendShip4 == "A2" ? " ship" :   "") + (squareA2 == "hit" ? " hit" : squareA2 == "miss" ? " miss" : "")}>A2</div>
          <div className={"col-1 A3" + (sendShips == "A3" ? " ship" : sendShip1 == "A3" ? " ship" : sendShip2 == "A3" ? " ship" : sendShip3 == "A3" ? " ship" : sendShip4 == "A3" ? " ship" :   "") + (squareA3 == "hit" ? " hit" : squareA3 == "miss" ? " miss" : "")}>A3</div>
          <div className={"col-1 A4" + (sendShips == "A4" ? " ship" : sendShip1 == "A4" ? " ship" : sendShip2 == "A4" ? " ship" : sendShip3 == "A4" ? " ship" : sendShip4 == "A4" ? " ship" :   "") + (squareA4 == "hit" ? " hit" : squareA4 == "miss" ? " miss" : "")}>A4</div>
          <div className={"col-1 A5" + (sendShips == "A5" ? " ship" : sendShip1 == "A5" ? " ship" : sendShip2 == "A5" ? " ship" : sendShip3 == "A5" ? " ship" : sendShip4 == "A5" ? " ship" :   "") + (squareA5 == "hit" ? " hit" : squareA5 == "miss" ? " miss" : "")}>A5</div>
          <div className={"col-1 A6" + (sendShips == "A6" ? " ship" : sendShip1 == "A6" ? " ship" : sendShip2 == "A6" ? " ship" : sendShip3 == "A6" ? " ship" : sendShip4 == "A6" ? " ship" :   "") + (squareA6 == "hit" ? " hit" : squareA6 == "miss" ? " miss" : "")}>A6</div>
          <div className={"col-1 A7" + (sendShips == "A7" ? " ship" : sendShip1 == "A7" ? " ship" : sendShip2 == "A7" ? " ship" : sendShip3 == "A7" ? " ship" : sendShip4 == "A7" ? " ship" :   "") + (squareA7 == "hit" ? " hit" : squareA7 == "miss" ? " miss" : "")}>A7</div>
          <div className={"col-1 A8" + (sendShips == "A8" ? " ship" : sendShip1 == "A8" ? " ship" : sendShip2 == "A8" ? " ship" : sendShip3 == "A8" ? " ship" : sendShip4 == "A8" ? " ship" :   "") + (squareA8 == "hit" ? " hit" : squareA8 == "miss" ? " miss" : "")}>A8</div>
          <div className={"col-1 A9" + (sendShips == "A9" ? " ship" : sendShip1 == "A9" ? " ship" : sendShip2 == "A9" ? " ship" : sendShip3 == "A9" ? " ship" : sendShip4 == "A9" ? " ship" :   "") + (squareA9 == "hit" ? " hit" : squareA9 == "miss" ? " miss" : "")}>A9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">B</div>
          <div className={"col-1 B1" + (sendShips == "B1" ? " ship" : sendShip1 == "B1" ? " ship" : sendShip2 == "B1" ? " ship" : sendShip3 == "B1" ? " ship" : sendShip4 == "B1" ? " ship" :   "") + (squareB1 == "hit" ? " hit" : squareB1 == "miss" ? " miss" : "")}>B1</div>
          <div className={"col-1 B2" + (sendShips == "B2" ? " ship" : sendShip1 == "B2" ? " ship" : sendShip2 == "B2" ? " ship" : sendShip3 == "B2" ? " ship" : sendShip4 == "B2" ? " ship" :   "") + (squareB2 == "hit" ? " hit" : squareB2 == "miss" ? " miss" : "")}>B2</div>
          <div className={"col-1 B3" + (sendShips == "B3" ? " ship" : sendShip1 == "B3" ? " ship" : sendShip2 == "B3" ? " ship" : sendShip3 == "B3" ? " ship" : sendShip4 == "B3" ? " ship" :   "") + (squareB3 == "hit" ? " hit" : squareB3 == "miss" ? " miss" : "")}>B3</div>
          <div className={"col-1 B4" + (sendShips == "B4" ? " ship" : sendShip1 == "B4" ? " ship" : sendShip2 == "B4" ? " ship" : sendShip3 == "B4" ? " ship" : sendShip4 == "B4" ? " ship" :   "") + (squareB4 == "hit" ? " hit" : squareB4 == "miss" ? " miss" : "")}>B4</div>
          <div className={"col-1 B5" + (sendShips == "B5" ? " ship" : sendShip1 == "B5" ? " ship" : sendShip2 == "B5" ? " ship" : sendShip3 == "B5" ? " ship" : sendShip4 == "B5" ? " ship" :   "") + (squareB5 == "hit" ? " hit" : squareB5 == "miss" ? " miss" : "")}>B5</div>
          <div className={"col-1 B6" + (sendShips == "B6" ? " ship" : sendShip1 == "B6" ? " ship" : sendShip2 == "B6" ? " ship" : sendShip3 == "B6" ? " ship" : sendShip4 == "B6" ? " ship" :   "") + (squareB6 == "hit" ? " hit" : squareB6 == "miss" ? " miss" : "")}>B6</div>
          <div className={"col-1 B7" + (sendShips == "B7" ? " ship" : sendShip1 == "B7" ? " ship" : sendShip2 == "B7" ? " ship" : sendShip3 == "B7" ? " ship" : sendShip4 == "B7" ? " ship" :   "") + (squareB7 == "hit" ? " hit" : squareB7 == "miss" ? " miss" : "")}>B7</div>
          <div className={"col-1 B8" + (sendShips == "B8" ? " ship" : sendShip1 == "B8" ? " ship" : sendShip2 == "B8" ? " ship" : sendShip3 == "B8" ? " ship" : sendShip4 == "B8" ? " ship" :   "") + (squareB8 == "hit" ? " hit" : squareB8 == "miss" ? " miss" : "")}>B8</div>
          <div className={"col-1 B9" + (sendShips == "B9" ? " ship" : sendShip1 == "B9" ? " ship" : sendShip2 == "B9" ? " ship" : sendShip3 == "B9" ? " ship" : sendShip4 == "B9" ? " ship" :   "") + (squareB9 == "hit" ? " hit" : squareB9 == "miss" ? " miss" : "")}>B9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">C</div>
          <div className={"col-1 C1" + (sendShips == "C1" ? " ship" : sendShip1 == "C1" ? " ship" : sendShip2 == "C1" ? " ship" : sendShip3 == "C1" ? " ship" : sendShip4 == "C1" ? " ship" :   "") + (squareC1 == "hit" ? " hit" : squareC1 == "miss" ? " miss" : "")}>C1</div>
          <div className={"col-1 C2" + (sendShips == "C2" ? " ship" : sendShip1 == "C2" ? " ship" : sendShip2 == "C2" ? " ship" : sendShip3 == "C2" ? " ship" : sendShip4 == "C2" ? " ship" :   "") + (squareC2 == "hit" ? " hit" : squareC2 == "miss" ? " miss" : "")}>C2</div>
          <div className={"col-1 C3" + (sendShips == "C3" ? " ship" : sendShip1 == "C3" ? " ship" : sendShip2 == "C3" ? " ship" : sendShip3 == "C3" ? " ship" : sendShip4 == "C3" ? " ship" :   "") + (squareC3 == "hit" ? " hit" : squareC3 == "miss" ? " miss" : "")}>C3</div>
          <div className={"col-1 C4" + (sendShips == "C4" ? " ship" : sendShip1 == "C4" ? " ship" : sendShip2 == "C4" ? " ship" : sendShip3 == "C4" ? " ship" : sendShip4 == "C4" ? " ship" :   "") + (squareC4 == "hit" ? " hit" : squareC4 == "miss" ? " miss" : "")}>C4</div>
          <div className={"col-1 C5" + (sendShips == "C5" ? " ship" : sendShip1 == "C5" ? " ship" : sendShip2 == "C5" ? " ship" : sendShip3 == "C5" ? " ship" : sendShip4 == "C5" ? " ship" :   "") + (squareC5 == "hit" ? " hit" : squareC5 == "miss" ? " miss" : "")}>C5</div>
          <div className={"col-1 C6" + (sendShips == "C6" ? " ship" : sendShip1 == "C6" ? " ship" : sendShip2 == "C6" ? " ship" : sendShip3 == "C6" ? " ship" : sendShip4 == "C6" ? " ship" :   "") + (squareC6 == "hit" ? " hit" : squareC6 == "miss" ? " miss" : "")}>C6</div>
          <div className={"col-1 C7" + (sendShips == "C7" ? " ship" : sendShip1 == "C7" ? " ship" : sendShip2 == "C7" ? " ship" : sendShip3 == "C7" ? " ship" : sendShip4 == "C7" ? " ship" :   "") + (squareC7 == "hit" ? " hit" : squareC7 == "miss" ? " miss" : "")}>C7</div>
          <div className={"col-1 C8" + (sendShips == "C8" ? " ship" : sendShip1 == "C8" ? " ship" : sendShip2 == "C8" ? " ship" : sendShip3 == "C8" ? " ship" : sendShip4 == "C8" ? " ship" :   "") + (squareC8 == "hit" ? " hit" : squareC8 == "miss" ? " miss" : "")}>C8</div>
          <div className={"col-1 C9" + (sendShips == "C9" ? " ship" : sendShip1 == "C9" ? " ship" : sendShip2 == "C9" ? " ship" : sendShip3 == "C9" ? " ship" : sendShip4 == "C9" ? " ship" :   "") + (squareC9 == "hit" ? " hit" : squareC9 == "miss" ? " miss" : "")}>C9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">D</div>
          <div className={"col-1 D1" + (sendShips == "D1" ? " ship" : sendShip1 == "D1" ? " ship" : sendShip2 == "D1" ? " ship" : sendShip3 == "D1" ? " ship" : sendShip4 == "D1" ? " ship" :   "") + (squareD1 == "hit" ? " hit" : squareD1 == "miss" ? " miss" : "")}>D1</div>
          <div className={"col-1 D2" + (sendShips == "D2" ? " ship" : sendShip1 == "D2" ? " ship" : sendShip2 == "D2" ? " ship" : sendShip3 == "D2" ? " ship" : sendShip4 == "D2" ? " ship" :   "") + (squareD2 == "hit" ? " hit" : squareD2 == "miss" ? " miss" : "")}>D2</div>
          <div className={"col-1 D3" + (sendShips == "D3" ? " ship" : sendShip1 == "D3" ? " ship" : sendShip2 == "D3" ? " ship" : sendShip3 == "D3" ? " ship" : sendShip4 == "D3" ? " ship" :   "") + (squareD3 == "hit" ? " hit" : squareD3 == "miss" ? " miss" : "")}>D3</div>
          <div className={"col-1 D4" + (sendShips == "D4" ? " ship" : sendShip1 == "D4" ? " ship" : sendShip2 == "D4" ? " ship" : sendShip3 == "D4" ? " ship" : sendShip4 == "D4" ? " ship" :   "") + (squareD4 == "hit" ? " hit" : squareD4 == "miss" ? " miss" : "")}>D4</div>
          <div className={"col-1 D5" + (sendShips == "D5" ? " ship" : sendShip1 == "D5" ? " ship" : sendShip2 == "D5" ? " ship" : sendShip3 == "D5" ? " ship" : sendShip4 == "D5" ? " ship" :   "") + (squareD5 == "hit" ? " hit" : squareD5 == "miss" ? " miss" : "")}>D5</div>
          <div className={"col-1 D6" + (sendShips == "D6" ? " ship" : sendShip1 == "D6" ? " ship" : sendShip2 == "D6" ? " ship" : sendShip3 == "D6" ? " ship" : sendShip4 == "D6" ? " ship" :   "") + (squareD6 == "hit" ? " hit" : squareD6 == "miss" ? " miss" : "")}>D6</div>
          <div className={"col-1 D7" + (sendShips == "D7" ? " ship" : sendShip1 == "D7" ? " ship" : sendShip2 == "D7" ? " ship" : sendShip3 == "D7" ? " ship" : sendShip4 == "D7" ? " ship" :   "") + (squareD7 == "hit" ? " hit" : squareD7 == "miss" ? " miss" : "")}>D7</div>
          <div className={"col-1 D8" + (sendShips == "D8" ? " ship" : sendShip1 == "D8" ? " ship" : sendShip2 == "D8" ? " ship" : sendShip3 == "D8" ? " ship" : sendShip4 == "D8" ? " ship" :   "") + (squareD8 == "hit" ? " hit" : squareD8 == "miss" ? " miss" : "")}>D8</div>
          <div className={"col-1 D9" + (sendShips == "D9" ? " ship" : sendShip1 == "D9" ? " ship" : sendShip2 == "D9" ? " ship" : sendShip3 == "D9" ? " ship" : sendShip4 == "D9" ? " ship" :   "") + (squareD9 == "hit" ? " hit" : squareD9 == "miss" ? " miss" : "")}>D9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">E</div>
          <div className={"col-1 E1" + (sendShips == "E1" ? " ship" : sendShip1 == "E1" ? " ship" : sendShip2 == "E1" ? " ship" : sendShip3 == "E1" ? " ship" : sendShip4 == "E1" ? " ship" :   "") + (squareE1 == "hit" ? " hit" : squareE1 == "miss" ? " miss" : "")}>E1</div>
          <div className={"col-1 E2" + (sendShips == "E2" ? " ship" : sendShip1 == "E2" ? " ship" : sendShip2 == "E2" ? " ship" : sendShip3 == "E2" ? " ship" : sendShip4 == "E2" ? " ship" :   "") + (squareE2 == "hit" ? " hit" : squareE2 == "miss" ? " miss" : "")}>E2</div>
          <div className={"col-1 E3" + (sendShips == "E3" ? " ship" : sendShip1 == "E3" ? " ship" : sendShip2 == "E3" ? " ship" : sendShip3 == "E3" ? " ship" : sendShip4 == "E3" ? " ship" :   "") + (squareE3 == "hit" ? " hit" : squareE3 == "miss" ? " miss" : "")}>E3</div>
          <div className={"col-1 E4" + (sendShips == "E4" ? " ship" : sendShip1 == "E4" ? " ship" : sendShip2 == "E4" ? " ship" : sendShip3 == "E4" ? " ship" : sendShip4 == "E4" ? " ship" :   "") + (squareE4 == "hit" ? " hit" : squareE4 == "miss" ? " miss" : "")}>E4</div>
          <div className={"col-1 E5" + (sendShips == "E5" ? " ship" : sendShip1 == "E5" ? " ship" : sendShip2 == "E5" ? " ship" : sendShip3 == "E5" ? " ship" : sendShip4 == "E5" ? " ship" :   "") + (squareE5 == "hit" ? " hit" : squareE5 == "miss" ? " miss" : "")}>E5</div>
          <div className={"col-1 E6" + (sendShips == "E6" ? " ship" : sendShip1 == "E6" ? " ship" : sendShip2 == "E6" ? " ship" : sendShip3 == "E6" ? " ship" : sendShip4 == "E6" ? " ship" :   "") + (squareE6 == "hit" ? " hit" : squareE6 == "miss" ? " miss" : "")}>E6</div>
          <div className={"col-1 E7" + (sendShips == "E7" ? " ship" : sendShip1 == "E7" ? " ship" : sendShip2 == "E7" ? " ship" : sendShip3 == "E7" ? " ship" : sendShip4 == "E7" ? " ship" :   "") + (squareE7 == "hit" ? " hit" : squareE7 == "miss" ? " miss" : "")}>E7</div>
          <div className={"col-1 E8" + (sendShips == "E8" ? " ship" : sendShip1 == "E8" ? " ship" : sendShip2 == "E8" ? " ship" : sendShip3 == "E8" ? " ship" : sendShip4 == "E8" ? " ship" :   "") + (squareE8 == "hit" ? " hit" : squareE8 == "miss" ? " miss" : "")}>E8</div>
          <div className={"col-1 E9" + (sendShips == "E9" ? " ship" : sendShip1 == "E9" ? " ship" : sendShip2 == "E9" ? " ship" : sendShip3 == "E9" ? " ship" : sendShip4 == "E9" ? " ship" :   "") + (squareE9 == "hit" ? " hit" : squareE9 == "miss" ? " miss" : "")}>E9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">F</div>
          <div className={"col-1 F1" + (sendShips == "F1" ? " ship" : sendShip1 == "F1" ? " ship" : sendShip2 == "F1" ? " ship" : sendShip3 == "F1" ? " ship" : sendShip4 == "F1" ? " ship" :   "") + (squareF1 == "hit" ? " hit" : squareF1 == "miss" ? " miss" : "")}>F1</div>
          <div className={"col-1 F2" + (sendShips == "F2" ? " ship" : sendShip1 == "F2" ? " ship" : sendShip2 == "F2" ? " ship" : sendShip3 == "F2" ? " ship" : sendShip4 == "F2" ? " ship" :   "") + (squareF2 == "hit" ? " hit" : squareF2 == "miss" ? " miss" : "")}>F2</div>
          <div className={"col-1 F3" + (sendShips == "F3" ? " ship" : sendShip1 == "F3" ? " ship" : sendShip2 == "F3" ? " ship" : sendShip3 == "F3" ? " ship" : sendShip4 == "F3" ? " ship" :   "") + (squareF3 == "hit" ? " hit" : squareF3 == "miss" ? " miss" : "")}>F3</div>
          <div className={"col-1 F4" + (sendShips == "F4" ? " ship" : sendShip1 == "F4" ? " ship" : sendShip2 == "F4" ? " ship" : sendShip3 == "F4" ? " ship" : sendShip4 == "F4" ? " ship" :   "") + (squareF4 == "hit" ? " hit" : squareF4 == "miss" ? " miss" : "")}>F4</div>
          <div className={"col-1 F5" + (sendShips == "F5" ? " ship" : sendShip1 == "F5" ? " ship" : sendShip2 == "F5" ? " ship" : sendShip3 == "F5" ? " ship" : sendShip4 == "F5" ? " ship" :   "") + (squareF5 == "hit" ? " hit" : squareF5 == "miss" ? " miss" : "")}>F5</div>
          <div className={"col-1 F6" + (sendShips == "F6" ? " ship" : sendShip1 == "F6" ? " ship" : sendShip2 == "F6" ? " ship" : sendShip3 == "F6" ? " ship" : sendShip4 == "F6" ? " ship" :   "") + (squareF6 == "hit" ? " hit" : squareF6 == "miss" ? " miss" : "")}>F6</div>
          <div className={"col-1 F7" + (sendShips == "F7" ? " ship" : sendShip1 == "F7" ? " ship" : sendShip2 == "F7" ? " ship" : sendShip3 == "F7" ? " ship" : sendShip4 == "F7" ? " ship" :   "") + (squareF7 == "hit" ? " hit" : squareF7 == "miss" ? " miss" : "")}>F7</div>
          <div className={"col-1 F8" + (sendShips == "F8" ? " ship" : sendShip1 == "F8" ? " ship" : sendShip2 == "F8" ? " ship" : sendShip3 == "F8" ? " ship" : sendShip4 == "F8" ? " ship" :   "") + (squareF8 == "hit" ? " hit" : squareF8 == "miss" ? " miss" : "")}>F8</div>
          <div className={"col-1 F9" + (sendShips == "F9" ? " ship" : sendShip1 == "F9" ? " ship" : sendShip2 == "F9" ? " ship" : sendShip3 == "F9" ? " ship" : sendShip4 == "F9" ? " ship" :   "") + (squareF9 == "hit" ? " hit" : squareF9 == "miss" ? " miss" : "")}>F9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">G</div>
          <div className={"col-1 G1" + (sendShips == "G1" ? " ship" : sendShip1 == "G1" ? " ship" : sendShip2 == "G1" ? " ship" : sendShip3 == "G1" ? " ship" : sendShip4 == "G1" ? " ship" :   "") + (squareG1 == "hit" ? " hit" : squareG1 == "miss" ? " miss" : "")}>G1</div>
          <div className={"col-1 G2" + (sendShips == "G2" ? " ship" : sendShip1 == "G2" ? " ship" : sendShip2 == "G2" ? " ship" : sendShip3 == "G2" ? " ship" : sendShip4 == "G2" ? " ship" :   "") + (squareG2 == "hit" ? " hit" : squareG2 == "miss" ? " miss" : "")}>G2</div>
          <div className={"col-1 G3" + (sendShips == "G3" ? " ship" : sendShip1 == "G3" ? " ship" : sendShip2 == "G3" ? " ship" : sendShip3 == "G3" ? " ship" : sendShip4 == "G3" ? " ship" :   "") + (squareG3 == "hit" ? " hit" : squareG3 == "miss" ? " miss" : "")}>G3</div>
          <div className={"col-1 G4" + (sendShips == "G4" ? " ship" : sendShip1 == "G4" ? " ship" : sendShip2 == "G4" ? " ship" : sendShip3 == "G4" ? " ship" : sendShip4 == "G4" ? " ship" :   "") + (squareG4 == "hit" ? " hit" : squareG4 == "miss" ? " miss" : "")}>G4</div>
          <div className={"col-1 G5" + (sendShips == "G5" ? " ship" : sendShip1 == "G5" ? " ship" : sendShip2 == "G5" ? " ship" : sendShip3 == "G5" ? " ship" : sendShip4 == "G5" ? " ship" :   "") + (squareG5 == "hit" ? " hit" : squareG5 == "miss" ? " miss" : "")}>G5</div>
          <div className={"col-1 G6" + (sendShips == "G6" ? " ship" : sendShip1 == "G6" ? " ship" : sendShip2 == "G6" ? " ship" : sendShip3 == "G6" ? " ship" : sendShip4 == "G6" ? " ship" :   "") + (squareG6 == "hit" ? " hit" : squareG6 == "miss" ? " miss" : "")}>G6</div>
          <div className={"col-1 G7" + (sendShips == "G7" ? " ship" : sendShip1 == "G7" ? " ship" : sendShip2 == "G7" ? " ship" : sendShip3 == "G7" ? " ship" : sendShip4 == "G7" ? " ship" :   "") + (squareG7 == "hit" ? " hit" : squareG7 == "miss" ? " miss" : "")}>G7</div>
          <div className={"col-1 G8" + (sendShips == "G8" ? " ship" : sendShip1 == "G8" ? " ship" : sendShip2 == "G8" ? " ship" : sendShip3 == "G8" ? " ship" : sendShip4 == "G8" ? " ship" :   "") + (squareG8 == "hit" ? " hit" : squareG8 == "miss" ? " miss" : "")}>G8</div>
          <div className={"col-1 G9" + (sendShips == "G9" ? " ship" : sendShip1 == "G9" ? " ship" : sendShip2 == "G9" ? " ship" : sendShip3 == "G9" ? " ship" : sendShip4 == "G9" ? " ship" :   "") + (squareG9 == "hit" ? " hit" : squareG9 == "miss" ? " miss" : "")}>G9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">H</div>
          <div className={"col-1 H1" + (sendShips == "H1" ? " ship" : sendShip1 == "H1" ? " ship" : sendShip2 == "H1" ? " ship" : sendShip3 == "H1" ? " ship" : sendShip4 == "H1" ? " ship" :   "") + (squareH1 == "hit" ? " hit" : squareH1 == "miss" ? " miss" : "")}>H1</div>
          <div className={"col-1 H2" + (sendShips == "H2" ? " ship" : sendShip1 == "H2" ? " ship" : sendShip2 == "H2" ? " ship" : sendShip3 == "H2" ? " ship" : sendShip4 == "H2" ? " ship" :   "") + (squareH2 == "hit" ? " hit" : squareH2 == "miss" ? " miss" : "")}>H2</div>
          <div className={"col-1 H3" + (sendShips == "H3" ? " ship" : sendShip1 == "H3" ? " ship" : sendShip2 == "H3" ? " ship" : sendShip3 == "H3" ? " ship" : sendShip4 == "H3" ? " ship" :   "") + (squareH3 == "hit" ? " hit" : squareH3 == "miss" ? " miss" : "")}>H3</div>
          <div className={"col-1 H4" + (sendShips == "H4" ? " ship" : sendShip1 == "H4" ? " ship" : sendShip2 == "H4" ? " ship" : sendShip3 == "H4" ? " ship" : sendShip4 == "H4" ? " ship" :   "") + (squareH4 == "hit" ? " hit" : squareH4 == "miss" ? " miss" : "")}>H4</div>
          <div className={"col-1 H5" + (sendShips == "H5" ? " ship" : sendShip1 == "H5" ? " ship" : sendShip2 == "H5" ? " ship" : sendShip3 == "H5" ? " ship" : sendShip4 == "H5" ? " ship" :   "") + (squareH5 == "hit" ? " hit" : squareH5 == "miss" ? " miss" : "")}>H5</div>
          <div className={"col-1 H6" + (sendShips == "H6" ? " ship" : sendShip1 == "H6" ? " ship" : sendShip2 == "H6" ? " ship" : sendShip3 == "H6" ? " ship" : sendShip4 == "H6" ? " ship" :   "") + (squareH6 == "hit" ? " hit" : squareH6 == "miss" ? " miss" : "")}>H6</div>
          <div className={"col-1 H7" + (sendShips == "H7" ? " ship" : sendShip1 == "H7" ? " ship" : sendShip2 == "H7" ? " ship" : sendShip3 == "H7" ? " ship" : sendShip4 == "H7" ? " ship" :   "") + (squareH7 == "hit" ? " hit" : squareH7 == "miss" ? " miss" : "")}>H7</div>
          <div className={"col-1 H8" + (sendShips == "H8" ? " ship" : sendShip1 == "H8" ? " ship" : sendShip2 == "H8" ? " ship" : sendShip3 == "H8" ? " ship" : sendShip4 == "H8" ? " ship" :   "") + (squareH8 == "hit" ? " hit" : squareH8 == "miss" ? " miss" : "")}>H8</div>
          <div className={"col-1 H9" + (sendShips == "H9" ? " ship" : sendShip1 == "H9" ? " ship" : sendShip2 == "H9" ? " ship" : sendShip3 == "H9" ? " ship" : sendShip4 == "H9" ? " ship" :   "") + (squareH9 == "hit" ? " hit" : squareH9 == "miss" ? " miss" : "")}>H9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">I</div>
          <div className={"col-1 I1" + (sendShips == "I1" ? " ship" : sendShip1 == "I1" ? " ship" : sendShip2 == "I1" ? " ship" : sendShip3 == "I1" ? " ship" : sendShip4 == "I1" ? " ship" :   "") + (squareI1 == "hit" ? " hit" : squareI1 == "miss" ? " miss" : "")}>I1</div>
          <div className={"col-1 I2" + (sendShips == "I2" ? " ship" : sendShip1 == "I2" ? " ship" : sendShip2 == "I2" ? " ship" : sendShip3 == "I2" ? " ship" : sendShip4 == "I2" ? " ship" :   "") + (squareI2 == "hit" ? " hit" : squareI2 == "miss" ? " miss" : "")}>I2</div>
          <div className={"col-1 I3" + (sendShips == "I3" ? " ship" : sendShip1 == "I3" ? " ship" : sendShip2 == "I3" ? " ship" : sendShip3 == "I3" ? " ship" : sendShip4 == "I3" ? " ship" :   "") + (squareI3 == "hit" ? " hit" : squareI3 == "miss" ? " miss" : "")}>I3</div>
          <div className={"col-1 I4" + (sendShips == "I4" ? " ship" : sendShip1 == "I4" ? " ship" : sendShip2 == "I4" ? " ship" : sendShip3 == "I4" ? " ship" : sendShip4 == "I4" ? " ship" :   "") + (squareI4 == "hit" ? " hit" : squareI4 == "miss" ? " miss" : "")}>I4</div>
          <div className={"col-1 I5" + (sendShips == "I5" ? " ship" : sendShip1 == "I5" ? " ship" : sendShip2 == "I5" ? " ship" : sendShip3 == "I5" ? " ship" : sendShip4 == "I5" ? " ship" :   "") + (squareI5 == "hit" ? " hit" : squareI5 == "miss" ? " miss" : "")}>I5</div>
          <div className={"col-1 I6" + (sendShips == "I6" ? " ship" : sendShip1 == "I6" ? " ship" : sendShip2 == "I6" ? " ship" : sendShip3 == "I6" ? " ship" : sendShip4 == "I6" ? " ship" :   "") + (squareI6 == "hit" ? " hit" : squareI6 == "miss" ? " miss" : "")}>I6</div>
          <div className={"col-1 I7" + (sendShips == "I7" ? " ship" : sendShip1 == "I7" ? " ship" : sendShip2 == "I7" ? " ship" : sendShip3 == "I7" ? " ship" : sendShip4 == "I7" ? " ship" :   "") + (squareI7 == "hit" ? " hit" : squareI7 == "miss" ? " miss" : "")}>I7</div>
          <div className={"col-1 I8" + (sendShips == "I8" ? " ship" : sendShip1 == "I8" ? " ship" : sendShip2 == "I8" ? " ship" : sendShip3 == "I8" ? " ship" : sendShip4 == "I8" ? " ship" :   "") + (squareI8 == "hit" ? " hit" : squareI8 == "miss" ? " miss" : "")}>I8</div>
          <div className={"col-1 I9" + (sendShips == "I9" ? " ship" : sendShip1 == "I9" ? " ship" : sendShip2 == "I9" ? " ship" : sendShip3 == "I9" ? " ship" : sendShip4 == "I9" ? " ship" :   "") + (squareI9 == "hit" ? " hit" : squareI9 == "miss" ? " miss" : "")}>I9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
      </div>
      <div className="row row-cols-3">
        <div className="col-1 gridborder top side"></div>
        <div className="col-1 gridborder top">1</div>
        <div className="col-1 gridborder top">2</div>
        <div className="col-1 gridborder top">3</div>
        <div className="col-1 gridborder top">4</div>
        <div className="col-1 gridborder top">5</div>
        <div className="col-1 gridborder top">6</div>
        <div className="col-1 gridborder top">7</div>
        <div className="col-1 gridborder top">8</div>
        <div className="col-1 gridborder top">9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">A</div>
        <div className={"col-1 A1" + (shotA1 == "hit" ? " hit" : shotA1 == "miss" ? " miss": " ")} onClick={atacarA1}>A1</div>
        <div className={"col-1 A2" + (shotA2 == "hit" ? " hit" : shotA2 == "miss" ? " miss": " ")} onClick={atacarA2}>A2</div>
        <div className={"col-1 A3" + (shotA3 == "hit" ? " hit" : shotA3 == "miss" ? " miss": " ")} onClick={atacarA3}>A3</div>
        <div className={"col-1 A4" + (shotA4 == "hit" ? " hit" : shotA4 == "miss" ? " miss": " ")} onClick={atacarA4}>A4</div>
        <div className={"col-1 A5" + (shotA5 == "hit" ? " hit" : shotA5 == "miss" ? " miss": " ")} onClick={atacarA5}>A5</div>
        <div className={"col-1 A6" + (shotA6 == "hit" ? " hit" : shotA6 == "miss" ? " miss": " ")} onClick={atacarA6}>A6</div>
        <div className={"col-1 A7" + (shotA7 == "hit" ? " hit" : shotA7 == "miss" ? " miss": " ")} onClick={atacarA7}>A7</div>
        <div className={"col-1 A8" + (shotA8 == "hit" ? " hit" : shotA8 == "miss" ? " miss": " ")} onClick={atacarA8}>A8</div>
        <div className={"col-1 A9" + (shotA9 == "hit" ? " hit" : shotA9 == "miss" ? " miss": " ")} onClick={atacarA9}>A9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">B</div>
        <div className={"col-1 B1" + (shotB1 == "hit" ? " hit" : shotB1 == "miss" ? " miss": " ")} onClick={atacarB1}>B1</div>
        <div className={"col-1 B2" + (shotB2 == "hit" ? " hit" : shotB2 == "miss" ? " miss": " ")} onClick={atacarB2}>B2</div>
        <div className={"col-1 B3" + (shotB3 == "hit" ? " hit" : shotB3 == "miss" ? " miss": " ")} onClick={atacarB3}>B3</div>
        <div className={"col-1 B4" + (shotB4 == "hit" ? " hit" : shotB4 == "miss" ? " miss": " ")} onClick={atacarB4}>B4</div>
        <div className={"col-1 B5" + (shotB5 == "hit" ? " hit" : shotB5 == "miss" ? " miss": " ")} onClick={atacarB5}>B5</div>
        <div className={"col-1 B6" + (shotB6 == "hit" ? " hit" : shotB6 == "miss" ? " miss": " ")} onClick={atacarB6}>B6</div>
        <div className={"col-1 B7" + (shotB7 == "hit" ? " hit" : shotB7 == "miss" ? " miss": " ")} onClick={atacarB7}>B7</div>
        <div className={"col-1 B8" + (shotB8 == "hit" ? " hit" : shotB8 == "miss" ? " miss": " ")} onClick={atacarB8}>B8</div>
        <div className={"col-1 B9" + (shotB9 == "hit" ? " hit" : shotB9 == "miss" ? " miss": " ")} onClick={atacarB9}>B9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">C</div>
        <div className={"col-1 C1" + (shotC1 == "hit" ? " hit" : shotC1 == "miss" ? " miss": " ")} onClick={atacarC1}>C1</div>
        <div className={"col-1 C2" + (shotC2 == "hit" ? " hit" : shotC2 == "miss" ? " miss": " ")} onClick={atacarC2}>C2</div>
        <div className={"col-1 C3" + (shotC3 == "hit" ? " hit" : shotC3 == "miss" ? " miss": " ")} onClick={atacarC3}>C3</div>
        <div className={"col-1 C4" + (shotC4 == "hit" ? " hit" : shotC4 == "miss" ? " miss": " ")} onClick={atacarC4}>C4</div>
        <div className={"col-1 C5" + (shotC5 == "hit" ? " hit" : shotC5 == "miss" ? " miss": " ")} onClick={atacarC5}>C5</div>
        <div className={"col-1 C6" + (shotC6 == "hit" ? " hit" : shotC6 == "miss" ? " miss": " ")} onClick={atacarC6}>C6</div>
        <div className={"col-1 C7" + (shotC7 == "hit" ? " hit" : shotC7 == "miss" ? " miss": " ")} onClick={atacarC7}>C7</div>
        <div className={"col-1 C8" + (shotC8 == "hit" ? " hit" : shotC8 == "miss" ? " miss": " ")} onClick={atacarC8}>C8</div>
        <div className={"col-1 C9" + (shotC9 == "hit" ? " hit" : shotC9 == "miss" ? " miss": " ")} onClick={atacarC9}>C9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">D</div>
        <div className={"col-1 D1" + (shotD1 == "hit" ? " hit" : shotD1 == "miss" ? " miss": " ")} onClick={atacarD1}>D1</div>
        <div className={"col-1 D2" + (shotD2 == "hit" ? " hit" : shotD2 == "miss" ? " miss": " ")} onClick={atacarD2}>D2</div>
        <div className={"col-1 D3" + (shotD3 == "hit" ? " hit" : shotD3 == "miss" ? " miss": " ")} onClick={atacarD3}>D3</div>
        <div className={"col-1 D4" + (shotD4 == "hit" ? " hit" : shotD4 == "miss" ? " miss": " ")} onClick={atacarD4}>D4</div>
        <div className={"col-1 D5" + (shotD5 == "hit" ? " hit" : shotD5 == "miss" ? " miss": " ")} onClick={atacarD5}>D5</div>
        <div className={"col-1 D6" + (shotD6 == "hit" ? " hit" : shotD6 == "miss" ? " miss": " ")} onClick={atacarD6}>D6</div>
        <div className={"col-1 D7" + (shotD7 == "hit" ? " hit" : shotD7 == "miss" ? " miss": " ")} onClick={atacarD7}>D7</div>
        <div className={"col-1 D8" + (shotD8 == "hit" ? " hit" : shotD8 == "miss" ? " miss": " ")} onClick={atacarD8}>D8</div>
        <div className={"col-1 D9" + (shotD9 == "hit" ? " hit" : shotD9 == "miss" ? " miss": " ")} onClick={atacarD9}>D9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">E</div>
        <div className={"col-1 E1" + (shotE1 == "hit" ? " hit" : shotE1 == "miss" ? " miss": " ")} onClick={atacarE1}>E1</div>
        <div className={"col-1 E2" + (shotE2 == "hit" ? " hit" : shotE2 == "miss" ? " miss": " ")} onClick={atacarE2}>E2</div>
        <div className={"col-1 E3" + (shotE3 == "hit" ? " hit" : shotE3 == "miss" ? " miss": " ")} onClick={atacarE3}>E3</div>
        <div className={"col-1 E4" + (shotE4 == "hit" ? " hit" : shotE4 == "miss" ? " miss": " ")} onClick={atacarE4}>E4</div>
        <div className={"col-1 E5" + (shotE5 == "hit" ? " hit" : shotE5 == "miss" ? " miss": " ")} onClick={atacarE5}>E5</div>
        <div className={"col-1 E6" + (shotE6 == "hit" ? " hit" : shotE6 == "miss" ? " miss": " ")} onClick={atacarE6}>E6</div>
        <div className={"col-1 E7" + (shotE7 == "hit" ? " hit" : shotE7 == "miss" ? " miss": " ")} onClick={atacarE7}>E7</div>
        <div className={"col-1 E8" + (shotE8 == "hit" ? " hit" : shotE8 == "miss" ? " miss": " ")} onClick={atacarE8}>E8</div>
        <div className={"col-1 E9" + (shotE9 == "hit" ? " hit" : shotE9 == "miss" ? " miss": " ")} onClick={atacarE9}>E9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">F</div>
        <div className={"col-1 F1" + (shotF1 == "hit" ? " hit" : shotF1 == "miss" ? " miss": " ")} onClick={atacarF1}>F1</div>
        <div className={"col-1 F2" + (shotF2 == "hit" ? " hit" : shotF2 == "miss" ? " miss": " ")} onClick={atacarF2}>F2</div>
        <div className={"col-1 F3" + (shotF3 == "hit" ? " hit" : shotF3 == "miss" ? " miss": " ")} onClick={atacarF3}>F3</div>
        <div className={"col-1 F4" + (shotF4 == "hit" ? " hit" : shotF4 == "miss" ? " miss": " ")} onClick={atacarF4}>F4</div>
        <div className={"col-1 F5" + (shotF5 == "hit" ? " hit" : shotF5 == "miss" ? " miss": " ")} onClick={atacarF5}>F5</div>
        <div className={"col-1 F6" + (shotF6 == "hit" ? " hit" : shotF6 == "miss" ? " miss": " ")} onClick={atacarF6}>F6</div>
        <div className={"col-1 F7" + (shotF7 == "hit" ? " hit" : shotF7 == "miss" ? " miss": " ")} onClick={atacarF7}>F7</div>
        <div className={"col-1 F8" + (shotF8 == "hit" ? " hit" : shotF8 == "miss" ? " miss": " ")} onClick={atacarF8}>F8</div>
        <div className={"col-1 F9" + (shotF9 == "hit" ? " hit" : shotF9 == "miss" ? " miss": " ")} onClick={atacarF9}>F9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">G</div>
        <div className={"col-1 G1" + (shotG1 == "hit" ? " hit" : shotG1 == "miss" ? " miss": " ")} onClick={atacarG1}>G1</div>
        <div className={"col-1 G2" + (shotG2 == "hit" ? " hit" : shotG2 == "miss" ? " miss": " ")} onClick={atacarG2}>G2</div>
        <div className={"col-1 G3" + (shotG3 == "hit" ? " hit" : shotG3 == "miss" ? " miss": " ")} onClick={atacarG3}>G3</div>
        <div className={"col-1 G4" + (shotG4 == "hit" ? " hit" : shotG4 == "miss" ? " miss": " ")} onClick={atacarG4}>G4</div>
        <div className={"col-1 G5" + (shotG5 == "hit" ? " hit" : shotG5 == "miss" ? " miss": " ")} onClick={atacarG5}>G5</div>
        <div className={"col-1 G6" + (shotG6 == "hit" ? " hit" : shotG6 == "miss" ? " miss": " ")} onClick={atacarG6}>G6</div>
        <div className={"col-1 G7" + (shotG7 == "hit" ? " hit" : shotG7 == "miss" ? " miss": " ")} onClick={atacarG7}>G7</div>
        <div className={"col-1 G8" + (shotG8 == "hit" ? " hit" : shotG8 == "miss" ? " miss": " ")} onClick={atacarG8}>G8</div>
        <div className={"col-1 G9" + (shotG9 == "hit" ? " hit" : shotG9 == "miss" ? " miss": " ")} onClick={atacarG9}>G9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">H</div>
        <div className={"col-1 H1" + (shotH1 == "hit" ? " hit" : shotH1 == "miss" ? " miss": " ")} onClick={atacarH1}>H1</div>
        <div className={"col-1 H2" + (shotH2 == "hit" ? " hit" : shotH2 == "miss" ? " miss": " ")} onClick={atacarH2}>H2</div>
        <div className={"col-1 H3" + (shotH3 == "hit" ? " hit" : shotH3 == "miss" ? " miss": " ")} onClick={atacarH3}>H3</div>
        <div className={"col-1 H4" + (shotH4 == "hit" ? " hit" : shotH4 == "miss" ? " miss": " ")} onClick={atacarH4}>H4</div>
        <div className={"col-1 H5" + (shotH5 == "hit" ? " hit" : shotH5 == "miss" ? " miss": " ")} onClick={atacarH5}>H5</div>
        <div className={"col-1 H6" + (shotH6 == "hit" ? " hit" : shotH6 == "miss" ? " miss": " ")} onClick={atacarH6}>H6</div>
        <div className={"col-1 H7" + (shotH7 == "hit" ? " hit" : shotH7 == "miss" ? " miss": " ")} onClick={atacarH7}>H7</div>
        <div className={"col-1 H8" + (shotH8 == "hit" ? " hit" : shotH8 == "miss" ? " miss": " ")} onClick={atacarH8}>H8</div>
        <div className={"col-1 H9" + (shotH9 == "hit" ? " hit" : shotH9 == "miss" ? " miss": " ")} onClick={atacarH9}>H9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
        <div className="col-1 gridborder side">I</div>
        <div className={"col-1 I1" + (shotI1 == "hit" ? " hit" : shotI1 == "miss" ? " miss": " ")} onClick={atacarI1}>I1</div>
        <div className={"col-1 I2" + (shotI2 == "hit" ? " hit" : shotI2 == "miss" ? " miss": " ")} onClick={atacarI2}>I2</div>
        <div className={"col-1 I3" + (shotI3 == "hit" ? " hit" : shotI3 == "miss" ? " miss": " ")} onClick={atacarI3}>I3</div>
        <div className={"col-1 I4" + (shotI4 == "hit" ? " hit" : shotI4 == "miss" ? " miss": " ")} onClick={atacarI4}>I4</div>
        <div className={"col-1 I5" + (shotI5 == "hit" ? " hit" : shotI5 == "miss" ? " miss": " ")} onClick={atacarI5}>I5</div>
        <div className={"col-1 I6" + (shotI6 == "hit" ? " hit" : shotI6 == "miss" ? " miss": " ")} onClick={atacarI6}>I6</div>
        <div className={"col-1 I7" + (shotI7 == "hit" ? " hit" : shotI7 == "miss" ? " miss": " ")} onClick={atacarI7}>I7</div>
        <div className={"col-1 I8" + (shotI8 == "hit" ? " hit" : shotI8 == "miss" ? " miss": " ")} onClick={atacarI8}>I8</div>
        <div className={"col-1 I9" + (shotI9 == "hit" ? " hit" : shotI9 == "miss" ? " miss": " ")} onClick={atacarI9}>I9</div>
        <div className="col-1 blank"></div>
        <div className="col-1 blank"></div>
      </div>
      <div className={"gameover" + (gameOver == "YouWin" ? " YouWin" : "")}>Ganaste!</div>
      <div className={"gameover" + (gameOver == "YouLose" ? " YouLose" : "")}>Perdiste!</div>
    </div> 
  </div>);
}

export default App;
