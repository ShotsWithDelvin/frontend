import {useState} from 'react'

function ShowcaseCards(props){
   

    return (
        <div className=''>
            <div className=''>
                <img className='rounded-md ' src={props.img} alt="oh no!" />
                <div className=''>
                <h1 class='text-3xl font-primary bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent animate-bounce'>{props.name}</h1>
                </div>
            </div>
            </div>
    )
}

export default ShowcaseCards