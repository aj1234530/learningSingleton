import { loggerF } from "./logger";
import { gameManager } from "./store";

gameManager.addGame("id123");//adding a game to the games var of gameManager obj inst above
loggerF();

//gameManager once instantiated in the store and using in index and logger(so the state managed)