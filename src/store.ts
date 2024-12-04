//thing to learn is store
//how to introduce classes and then how to intruduce singleton on top of that
interface Game{
    id: string,
    player1: string,
    player2: string,
    moves: string []
}
//not exporting GameManager to avoid mistake of instaniating it anywhere else than store
 class GameManager {
    games: Game[] = []; //saying games is an array of time Game(defined above) array
    constructor(){
        this.games = []
    }
    addMove(gameId:string, move:string){
        const game = this.games.find(game =>game.id === gameId) //findig a particular game
        game?.moves.push(move) //push if this game exist
    }
    addGame(gameId:string){
        const game = {
            id: gameId,
            player1: "krishna",//hard coded for now
            player2: "chaitynya",////hard coded for now
            moves:[]
        }
        this.games.push(game) //push a new game to the in memory games var with Game type
    }


}
export const gameManager = new GameManager()








//Notes - 
//1. what is work of this keyword