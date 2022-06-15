import java.util.Scanner;
public class PawnWars {
    public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);
                int whiteCurrRow = 0;
                int whiteCurrCol = 0;
                int blackCurrRow = 0;
                int blackCurrCol = 0;
                char[][] matrix = new char[8][8];
                for (int i = 0; i < 8; i++) {
                    char[] input = scanner.nextLine().toCharArray();
                    for (int j = 0; j < 8; j++) {
                        matrix[i][j] = input[j];
                        if (input[j] == 'w') {
                            whiteCurrRow = i;
                            whiteCurrCol = j;
                        }
                        if (input[j] == 'b') {
                            blackCurrRow = i;
                            blackCurrCol = j;
                        }
                    }
                }
                while (true) {
                    if (IsInMatrix(whiteCurrRow - 1, whiteCurrCol - 1) && matrix[whiteCurrRow - 1][whiteCurrCol - 1] =='b') {
                        String position = SetPosition(whiteCurrRow - 1, whiteCurrCol - 1);
                        System.out.printf("Game over! White capture on %s.", position);
                        break;
                    }
                    else if (IsInMatrix(whiteCurrRow - 1, whiteCurrCol + 1) && matrix[whiteCurrRow - 1][whiteCurrCol + 1] == 'b') {
                        String position = SetPosition(whiteCurrRow - 1, whiteCurrCol + 1);
                        System.out.printf("Game over! White capture on %s.", position);
                        break;
                    } else {
                        matrix[whiteCurrRow][whiteCurrCol] = '-';
                        whiteCurrRow -= 1;
                        matrix[whiteCurrRow][whiteCurrCol] ='w';
                        if (whiteCurrRow == 0) {
                            String position = SetPosition(whiteCurrRow, whiteCurrCol);
                            System.out.printf("Game over! White pawn is promoted to a queen at %s.", position);
                            break;
                        }
                    }
                    if (IsInMatrix(blackCurrRow + 1, blackCurrCol - 1) && matrix[blackCurrRow + 1][blackCurrCol - 1] =='w')
                    {
                        String position = SetPosition(blackCurrRow + 1, blackCurrCol - 1);
                        System.out.printf("Game over! Black capture on %s.", position);
                        break;
                    }
                    else if (IsInMatrix(blackCurrRow + 1, blackCurrCol + 1) && matrix[blackCurrRow + 1][blackCurrCol + 1] == 'w' )
                    {
                        String position = SetPosition(blackCurrRow + 1, blackCurrCol + 1);
                        System.out.printf("Game over! Black capture on %s.", position);
                        break;
                    } else {
                        matrix[blackCurrRow][ blackCurrCol] ='-';
                        blackCurrRow += 1;
                        matrix[blackCurrRow][blackCurrCol] ='b';
                        if (blackCurrRow == 7) {
                            String position = SetPosition(blackCurrRow, blackCurrCol);

                            System.out.printf("Game over! Black pawn is promoted to a queen at %s.", position);

                            break;
                        }
                    }
                }
            }
            private static boolean IsInMatrix(int row,int col) {
                return row >= 0 && row <= 7 && col >= 0 && col <= 7;
            }
            private static String SetPosition(int row, int col) {
                StringBuilder sb = new StringBuilder();
                for (int i = 8; i >= 0; i--) {
                    if (col == i) {
                        sb.append((char)(i + 97));
                    }
                }
                int counter = 8;
                for (int i = 0; i < 8; i++) {
                    if (row == i) {
                        sb.append(counter);
                    }
                    counter--;
                }
                return sb.toString();
            }
        }


