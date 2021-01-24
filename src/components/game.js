import React, { useState } from "react";
import Square from "./square";
import { WinningLogic } from './helper';
import Inicio from "./inicio";


function Game() {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [isXNext, setXNext] = useState(true);
    

    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [ocultar, setOcultar] = useState(false);

    function PrimerPlayer() {
            setOcultar(true)
            setPlayer1(setXNext(isXNext));
    }
    function SegundoPlayer() {
        
            setOcultar(true)
            setPlayer2(setXNext(!isXNext));
       
    }

    const winningInfo = WinningLogic(squares);
    const winner = winningInfo.winner;
    const isGameOver = winningInfo.gameOver;
    const winnerHighlight = winningInfo.line;
    let status;
    if (winner) {
        status = "The Winner is: " + winner;
    }
    else if (winningInfo.isDraw) {
        status = "It´s a Draw"
    }
    else {
        status = "Next Player is: " + (isXNext ? "X" : "O");
    }

    function renderSquare(i) {
        return (
            <Square
                onClick={() => {
                    if (isGameOver ===false ){
                        if (squares[i] === null){
                            const nextSquare = squares.slice();
                            nextSquare[i] = isXNext ? "X" : "O";
                            setSquare(nextSquare);
                            setXNext(!isXNext);
                        } else{ 
                            alert("Movimiento inválido, no seas tramposo :D")

                    }
                    } else {
                        alert("Game over, start another game :)")
                    }
                }}
                value={squares[i]}
                highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
            />
        );
    }


    return (
        <>
            <div className="titulo">
                <h1>Tic Tac Toe</h1>
            </div>
            <div className="subtitulo">
                <p></p>
            </div>
            <Inicio startPlayer1={PrimerPlayer} startPlayer2={SegundoPlayer} ocultar={ocultar} />
            {ocultar ? <div className="botones">
                <div className="status"> {status} </div>


                <div className="container2 text-center">

                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>

                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>

                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>

                </div>
            </div> : null
            }
        </>
    )
}



export default Game;