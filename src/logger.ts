import { games } from "./store";

export const loggerF = ()=>{
    setInterval(()=>{
        console.log(games);
    },2000)
}
