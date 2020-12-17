import React from 'react'

import BlockAboutQuiz from './components/BlockAboutQuiz'
import Question from './components/Question'

import './index.scss'

class createRoom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            questions: [1]
        }
    }
    render(){
        return (
            <div className="createRoom">
                <header className="header-createRoom">
                    <div className="logo">
                        <a href="/" className="homeLink">Yakoot!</a>
                    </div>

                    <BlockAboutQuiz />

                    <div className="finishQuiz">
                        <button type="button" class="btn btn-success">Finish</button>
                    </div>
                </header>

                <main className="question-choosed">
                    <button 
                        id="addQuestion" 
                        className="btn btn-success" 
                        onClick={ () => {
                            this.setState({ questions: [...this.state.questions, this.state.questions.length+1 ] })
                            console.log(this.state)
                            }
                        }
                    >
                        + ADD QUESTION
                    </button>

                    {/* Block of Questions */}
                    {this.state.questions.map( print => <Question  number={print} /> )} 
                </main>  
            </div>
        )
    }
}

export default createRoom