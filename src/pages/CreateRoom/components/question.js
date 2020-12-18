import React from 'react'

import './Question.scss'

class Question extends React.Component {
    render(){
        return(
            <div className="block-question">
                <section className="number">
                    <h2>{this.props.number}</h2> 
                    <button className="remove-question"
                        onClick={ i => this.props.removeBlock(this.props.number) }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                        </svg>
                    </button>
                </section>
                <section className="main">
                    <div className="question">
                        <textarea placeholder="Question..."></textarea>
                    </div>
                    <div className="answers">
                        <div className="triangle">
                            <input type="text">
                            </input>
                        </div>
                        <div className="lozenge">
                            <input type="text"></input>
                        </div>
                        <div className="circle">
                            <input type="text"></input>
                        </div>
                        <div className="square">
                            <input type="text"></input>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Question