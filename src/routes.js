import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home/index';
import CreateRoom from './pages/CreateRoom/index'
import Quiz from './pages/Quiz/index'

function routes(params) {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/newroom" exact component={CreateRoom}/>
            <Route path="/quiz" exact component={Quiz}/>
        </BrowserRouter>
    )
}

export default routes