import React, { useState } from "react";


const Inicio = (props) => {
  
    const [state, setState] = useState({
        player1: "",
        player2: "",
    });
    

    const handleChange = e => {

        setState({
            ...state, 
            [e.target.name]: e.target.value 
        })
    }
    const handleClick = e => {
        if (state.player1 !== "" && state.player2 !== "") {
            if (e.target.className === "btn btn1" || e.target.className === "fas fa-times") {
                
                props.startPlayer1()
            } else {
                
                props.startPlayer2()
            }
        }
        
    }

    
    return (
        <>
            <div className={"contenedor " + (props.ocultar ? "d-none" : " ")}>
                <h3>Choose your Weapon</h3>

                <div className="row">
                    <div className="contenedorIn">
                        <input type="text" className="form-control" name="player1" id="player1" placeholder="Player 1" onChange={(e) => handleChange(e)} />
                        <input type="text" className="form-control ml-1" name="player2" id="player2" placeholder="Player 2" onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="button row">
                    <button className="btn btn1" onClick={(e) => handleClick(e)}><i onClick={(e) => handleClick(e)} className="fas fa-times" ></i></button>
                    <button className="btn btn2" onClick={(e) => handleClick(e)}><i onClick={(e) => handleClick(e)} className="far fa-circle" ></i></button>
                </div>
            </div>
        </>
    )
}

export default Inicio;