import {useState} from 'react'

function ShowcaseCards(props){
   

    return (
        <div className='px-8 grid grid-cols-3 '>
            <div className=''>
                <img className='rounded-md ' src={props.img} alt="oh no!" />
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-[40%] transition-all'>
                <h1 class='text-3xl font-primary bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent animate-bounce'>{props.name}</h1>
                </div>
            </div>
            </div>
    )
}

export default ShowcaseCards