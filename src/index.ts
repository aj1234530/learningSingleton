import { loggerF } from "./logger";
import { games } from "./store";

games.push({
    id:Math.random().toString(),
    player1:"krisha",
    player2:"chaitnya",
    moves: ["a1"]
})
loggerF();