import React from 'react';
import './Competencias.css'

function Competencias(props) {
    return (
        <div className="novo-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao[0] }</p>
                <p>{ props.descricao[1] }</p>
                <p>{ props.descricao[2] }</p>
                <p>{ props.descricao[3] }</p>
            </div>
        </div>
    )
}

export default Competencias;