import React from 'react'
import CardList from './CardList'
import { robots } from './Robots'

const App = () => {
    return(
        <div>
        <CardList robots={robots}/>
        </div>
    )
}

export default App;