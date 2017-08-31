/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
//with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var boardObj = new Board({n: n});
  var board = boardObj.rows();
  var rook = 0;
  // var row = new Array(n)
  // fill row array with 0's arr.fill()
  // rook count
  // build board
  // for each row, 
    // for each column in row
      // if there are no conflict in row, column
        // add rook
  //return soln
  
  board.forEach(function(row, x) {
    row.forEach(function(item, y) {
      board[x][y] = 1;
      if (boardObj.hasAnyRooksConflicts()) {
        board[x][y] = 0;
      } else {
        rook++;
      }
    });
  });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  
  
  return board;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var boardObj = new Board({n: n});
  //var board = boardObj.rows();
  
  var findSolutions = function (numRows) {    
    for (var i = 0; i < n; i++) {
      boardObj.togglePiece(numRows, i);
      if (boardObj.hasAnyRooksConflicts()) {
        //boardObj.togglePiece(numRows, i);
      } else if (numRows === n - 1) {
        solutionCount++;
        //boardObj.togglePiece(numRows - 1, i);
      } else {
        findSolutions(numRows + 1);
      }
      boardObj.togglePiece(numRows, i);
    }
  };

  findSolutions(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var boardObj = new Board({n: n}); 
  var board = boardObj.rows();
  var solutionFound = false;
  if (n === 0) {
    return [];
  }
  var findSolutions = function(numRows, queen) {
    // if queen === n stop recursion
    for (var i = 0; i < n; i++) {
      boardObj.togglePiece(numRows, i);
      if (boardObj.hasAnyQueenConflictsOn(numRows, i)) {
        // toggle back 
        boardObj.togglePiece(numRows, i);
      } else if (numRows === n - 1 && queen === n - 1) {
        solutionFound = true;
      } else {
        findSolutions(numRows + 1, queen + 1);
        if (solutionFound) {
          return;
        }
        boardObj.togglePiece(numRows, i);
      }
    }
  };

  findSolutions(0, 0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(board));
  return board;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
