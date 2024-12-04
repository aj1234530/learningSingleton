import { gameManager } from "./store";

export const loggerF = ()=>{
    setInterval(()=>{
        console.log(gameManager.games);
    },2000)
}
