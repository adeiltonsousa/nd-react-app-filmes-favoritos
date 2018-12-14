import React, { Component } from 'react'

class ListFrase extends Component {  
	render() {
      return (
             <ul>
              <h3> LISTANDO FILMES PREFERIDOS </h3>
                        { this.props.frases.map((frase) => (
                            <li>          
                                <p>{frase}</p>
                            </li>
                        ))}
             </ul>
       )
	}
}

export default ListFrase