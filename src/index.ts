import { loggerF } from "./logger";
import { GameManager } from "./store";
export const gameManager = new GameManager();

gameManager.addGame("id123");//adding a game to the games var of gameManager obj inst above
loggerF();

//what we have done here -
//1. first created a class GameManager in store.ts - it has games in memory var, with contructor on in to initize on instationiation
    //i. addMove() and addGames() methods on in the class
    //ii. addMove finds a game and adds the moves to the specific game var in the in mem var
    //iii. add game -- adds a new game to the games var
//2. After class - we are instatiating it in the index.ts(not in logger)
//3. export this instatianted obj to logger
//4. we added game using the method and the obj inst has this game - same obj is exp to logger so loggin ther
//5. log fxn imported in the index to call
//Flow - one obj inst in index.ts > this obj exp to logger > logger export the loggerF to call
//so, state maintained with this naive CIRCULAR depencdecy approach
//CIRCULAR dependency(store to index to logger to index)