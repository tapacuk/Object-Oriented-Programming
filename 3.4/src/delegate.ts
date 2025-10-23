export type MatrixDiagonal = (matrix: number[][]) => number[];

export const getMainDiagonal: MatrixDiagonal = (matrix) => {
  return matrix.map((row, i) => row[i]!);
};

export const getMainDiagonalAnonymus: MatrixDiagonal = function (matrix) {
  return matrix.map((row, i) => row[i]!);
};
