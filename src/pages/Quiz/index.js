import React from 'react'

import './index.scss'

import img from '../../assets/photo_quiz.jpg'

class Quiz extends React.Component {
    render(){
        return (
            <div className="Quiz">
                <div className="question">
                    <div>
                        <p>
                            2 + 2 = ?
                        </p>
                    </div>
                </div>

                <div className="time">
                    <span>30</span>
                </div>
                <div  className="photo">
                    <img src={img}></img>
                </div>
                <div className="replied">
                    <h3>0</h3>
                    <span>Answers</span>
                </div>

                <div className="answers">
                    <button className="option-triangle">Resposta1</button>
                    <button className="option-lozenge">Resposta2</button>
                    <button className="option-circle">Resposta3</button>
                    <button className="option-square">Resposta4</button>
                </div>

            </div>
        )
    }
}

export default Quiz