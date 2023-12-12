import {useState} from "react";
import Square from "../Square/index.jsx";
import Row from "../Row/index.jsx";

function Game() {

    const initialState = {
        game: Array(9).fill(''),
        player: false,
        message: 'Premier joueur : O',
        isRunning: true
    }

    const [game, setGame] = useState(initialState.game);
    const [player, setPlayer] = useState(initialState.player);
    const [message, setMessage] = useState(initialState.message);
    const [isRunning, setIsRunning] = useState(initialState.isRunning);

    const reset = () => {
        setGame(initialState.game)
        setPlayer(initialState.player)
        setMessage(initialState.message)
        setIsRunning(initialState.isRunning)
    }
    const changePlayer = () => {
        setPlayer(!player)
    }

    const onClick = (index) => {
        const newGame = [...game]

        if(game[index] !== '' || !isRunning  || !equality(game)) {
            return
        }

        if(player) {
            newGame[index] = 'X';
        } else {
            newGame[index] = 'O';
        }

        setGame(newGame)
        changePlayer()

        const theWinner = winner(newGame)
        if(theWinner) {
            setMessage(`Le gagnant est : ${theWinner}`)
        } else {
            if(!equality(newGame)) {
                setMessage(`Match null`)
                return
            }
            setMessage(`Prochain joueur : ${player ? 'O' : 'X'}`)
        }
    }

    const equality = (game) => {
        if (game.includes('')) {
            return true
        }
        setIsRunning(false)
        return false
    }

    const winner = (game) => {
        const winLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for (let i = 0; i < winLines.length; i++) {
            const [a, b, c] = winLines[i]
            if (game[a] !== "" && game[a] === game[b] && game[b] === game[c]) {
                setIsRunning(false)
                return game[a];
            }
        }
        return null
    }

    return (
        <>
            <span style={{color: 'orange'}}>{message}</span>
            <Row rowNumber={0} values={game} handleClick={onClick} />
            <Row rowNumber={1} values={game} handleClick={onClick} />
            <Row rowNumber={2} values={game} handleClick={onClick} />
            {
                !isRunning && <button onClick={reset}>Reset</button>
            }
        </>
    )
}

export default Game;