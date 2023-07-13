const boardSize = 8;

const compareCells = (cellA, cellB) =>
  cellA[0] === cellB[0] && cellA[1] === cellB[1];

const getCell = (gameBoard, cell) => gameBoard[cell[0]][cell[1]]

const initiateBoard = (board) => {
  for (let row = 0; row < boardSize; row += 1) {
    board.push([]);
    for (let column = 0; column < boardSize; column += 1) {
      board[row].push({
        visited: false,
        prevCell: null,
      });
    }
  }
};

export const getPath = (gameBoard, start, finish) => {
  const row = 0;
  const column = 1;

  if (!getCell(gameBoard, finish).visited) {
    return [];
  }

  const path = [];
  let iterator = finish;
  while (!compareCells(iterator, start)) {
    path.push(iterator);
    iterator = getCell(gameBoard, iterator).prevCell;
  }
  path.push(start);
  return path;
};

export const getPossibleMoves = (gameBoard, cell) => {
  const cellRow = cell[0];
  const cellColumn = cell[1];
  const possibleMoves = [];
  for (let row = -2; row <= 2; row += 1) {
    for (let column = -2; column <= 2; column += 1) {
      if (
        Math.abs(row) + Math.abs(column) !== 3 ||
        cellRow + row >= boardSize ||
        cellRow + row < 0 ||
        cellColumn + column >= boardSize ||
        cellColumn + column < 0
      ) {
        // eslint-disable-next-line no-continue
        continue;
      }
      possibleMoves.push([cellRow + row, cellColumn + column]);
    }
  }
  return possibleMoves;
};

export const GameBoard = () => {
  const gameBoard = [];
  initiateBoard(gameBoard);

  return gameBoard;
};
