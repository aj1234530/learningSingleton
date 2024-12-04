import { GameManager } from "./store";
import { gameManager } from ".";

export const loggerF = ()=>{
    setInterval(()=>{
        console.log(gameManager.games);
    },2000)
}
