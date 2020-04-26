import React from 'react'
import Card from "./components/Card"
import MediaCard from './components/MediaCard'



const CardList = ({ robots } ) => {

    const cardComponent = robots.map((user, i ) =>{
        return  (<MediaCard 
         key={i} 
         name={robots[i].name} 
         id={robots[i].id}  
         email={robots[i].email} />
        )
     })
        return (
            <div>
                { cardComponent }
            </div> 
    )
}

export default CardList;