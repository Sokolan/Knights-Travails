import { GameBoard, getPath } from "./GameBoard";
import findShortestPath from "./knightTraversal"

const start = [1,4];
const end = [7,6];
const gameBoard = GameBoard();
findShortestPath(gameBoard, start, end);
console.log(`start ${start}`);
console.log(getPath(gameBoard, start,end).reverse());
console.log(`end ${end}`);
