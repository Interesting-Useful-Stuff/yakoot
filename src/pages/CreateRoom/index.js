import React from 'react'

import BlockAboutQuiz from './components/BlockAboutQuiz'
import Question from './components/Question'

import './index.scss'

function createRoom(){
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
               <button id="addQuestion" className="btn btn-success">+ ADD QUESTION</button>
               <Question />
            </main>

            
        </div>
    )
}

export default createRoom