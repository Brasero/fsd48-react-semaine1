import {useState} from "react";
import Square from "../Square/index.jsx";
import Row from "../Row/index.jsx";

function Game() {

    const [game, setGame] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState(false);
    const [message, setMessage] = useState('Premier joueur : O');
    const disabled = false

    const changePlayer = () => {
        setPlayer(!player)
    }

    const onClick = (index) => {
        const newGame = [...game]

        if(game[index] !== '') {
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
            setMessage(`Prochain joueur : ${player ? 'O' : 'X'}`)
        }
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
                disabled && <span>Je m'affiche</span>
            }
        </>
    )
}

export default Game;