import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home/index';
import CreateRoom from './pages/CreateRoom/index'

function routes(params) {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/newroom" exact component={CreateRoom}/>
        </BrowserRouter>
    )
}

export default routes