import React from 'react'

const SearchBox = ({ searchfield , searchChange }) =>{
    return(
        <div>
        <input
        className='pa3 ba b--green bg-lightest-blue tc'
        type='search' 
        placeholder='Search for Robo'
        onChange = { searchChange }
        />
        </div>
    )
}

export default SearchBox;