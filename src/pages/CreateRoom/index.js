import React from 'react'

import BlockAboutQuiz from './components/BlockAboutQuiz'
import Question from './components/Question'

import './index.scss'

class createRoom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            blocks: [1]
        }

        this.removeBlock = this.removeBlock.bind(this)
    }
    removeBlock(numberOfBlock){
        const newArray = this.state.blocks.filter( block => block!==numberOfBlock )
        this.setState({ blocks: newArray })
    }
    render(){
        return (
            <div className="createRoom">
                <header className="header-createRoom">
                    <div className="logo">
                        <a href="/" className="homeLink">Yakoot!</a>
                    </div>

                    <BlockAboutQuiz numberQuestions={this.state.blocks.length} />

                    <div className="finishQuiz">
                        <button type="button" class="btn btn-success">Finish</button>
                    </div>
                </header>

                <main className="question-choosed">
                    <button 
                        id="addQuestion" 
                        className="btn btn-success" 
                        onClick={ () => {
                            this.setState({ blocks: [...this.state.blocks, this.state.blocks.length+1 ] })
                            console.log(this.state)
                            }
                        }
                    >
                        + ADD QUESTION
                    </button>

                    {/* Block of Questions */}
                    {this.state.blocks.map( numberOfBlock => <Question  number={numberOfBlock} removeBlock={this.removeBlock} /> )} 
                </main>  
            </div>
        )
    }
}

export default createRoom