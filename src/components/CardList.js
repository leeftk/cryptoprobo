import React from 'react'
import Card from "./Card"
import MediaCard from './MediaCard'



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