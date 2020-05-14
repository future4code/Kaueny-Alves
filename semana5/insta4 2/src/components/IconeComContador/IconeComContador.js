import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	console.log (props.valorContador)
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>

	</div>
	
}
