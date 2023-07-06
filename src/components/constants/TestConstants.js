export const TestConstants = {
    TITLE: "Tic Tac Toe",
    NO_OF_TILES_IN_THE_BOARD : 9,
    EMPTY: "",
    PLAYER_X: "X",
    PLAYER_O: "O",
    NEXT_PLAYER_TURN_MESSAGE: "Next Player : ",
    DECLARE_WINNER_MESSAGE: 'The Winner is : ',
    FIRST_ROW_WINNING_POSITION: [0,1,2],
    SECOND_ROW_WINNING_POSITION: [3,4,5],
    THIRD_ROW_WINNING_POSITION: [6,7,8]
    
};

export const WINNING_COMBINATIONS = [
    TestConstants.FIRST_ROW_WINNING_POSITION,
    TestConstants.SECOND_ROW_WINNING_POSITION,
    TestConstants.THIRD_ROW_WINNING_POSITION

];

export const tilePositionsToDeclareWinner = {

    winningMovesFirstRow_X : {
        WINING_POSITIONS : [0,3,1,6,2],
        WINNER : TestConstants.PLAYER_X
    },

    winningMovesFirstRow_O : {
        WINING_POSITIONS : [3,0,6,1,4,2],
        WINNER : TestConstants.PLAYER_O
    },

    winningMovesSecondRow_X : {
        WINING_POSITIONS : [3,6,4,1,5],
        WINNER : TestConstants.PLAYER_X
    },

    winningMovesSecondRow_O : {
        WINING_POSITIONS : [1,3,6,4,2,5],
        WINNER : TestConstants.PLAYER_O
    },

    winningMovesThirdRow_X : {
        WINING_POSITIONS : [6,1,7,2,8],
        WINNER : TestConstants.PLAYER_X
    },

    winningMovesThirdRow_O : {
        WINING_POSITIONS : [1,6,5,7,2,8],
        WINNER : TestConstants.PLAYER_O
    },

    winningMovesFirstCol_X : {
        WINING_POSITIONS : [0,4,3,2,6],
        WINNER : TestConstants.PLAYER_X
    },

    winningMovesFirstCol_O : {
        WINING_POSITIONS : [1,0,5,3,7,6],
        WINNER : TestConstants.PLAYER_O
    },

}