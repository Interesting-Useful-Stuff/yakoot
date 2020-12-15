import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/App';
import CreateRoom from './components/createRoom'

function routes(params) {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/newroom" exact component={CreateRoom}/>
        </BrowserRouter>
    )
}

export default routes