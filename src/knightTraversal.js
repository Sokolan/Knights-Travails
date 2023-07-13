/* eslint-disable no-param-reassign */
import { getPossibleMoves } from "./GameBoard";

const row = 0;
const column = 1;

// Searching in gameBoard for a path to finish from start
// Will stop when a path is created
const breadthFirstSearch = (gameBoard, start, finish) => {
  const compareCells = (cellA, cellB) =>
    cellA[row] === cellB[row] && cellA[column] === cellB[column];
  let visitingQueue = [start];
  let pathFound = compareCells(start, finish);
  // console.log(start);
  // console.log(getPossibleMoves(gameBoard, start));
  while (!pathFound) {
    const currentPossibleMoves = getPossibleMoves(gameBoard, visitingQueue[0]);
    // eslint-disable-next-line no-loop-func
    currentPossibleMoves.every((cell) => {
      if (gameBoard[cell[row]][cell[column]].visited) return true;
      visitingQueue.push(cell);
      gameBoard[cell[row]][cell[column]] = {
        visited: true,
        prevCell: visitingQueue[0],
      };
      if (compareCells(cell, finish)) {
        pathFound = true;
        return false;
      }
      return true;
    });
    visitingQueue.splice(0, 1);
  }
};

const findShortestPath = (gameBoard, start, finish) => {
  gameBoard[start[row]][start[column]].visited = true;
  breadthFirstSearch(gameBoard, start, finish);
  console.log(gameBoard);
};

export default findShortestPath;
