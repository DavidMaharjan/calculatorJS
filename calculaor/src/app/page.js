
'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

const Home = () => {
    const calcInput = [
        ['C','%','⌫','/'],
        ['7','8','9','*'],
        ['4','5','6','-'],
        ['1','2','3','+'],
        ['00','0','.','=']
    ]

    const whiteColorGang = ['C', '%', '⌫']
    const orangeColorGang = ['/', '*', '-', '+' , '=']
    let [number, setNumber] = useState('')
  
    const generateClassName = (val)=> {
        debugger;
        if(orangeColorGang.includes(val)){
            return 'p-2 bg-orange-400 m-2 w-18 rounded-xl'
        }else if(whiteColorGang.includes(val)){
            return 'p-2  bg-white m-2 w-18 rounded-xl'
        }else{
            return 'p-2 bg-gray-400  m-2 w-18 rounded-xl'
        }
    }
  return (
    <div className='m-12 justify-center items-center border-black bg-black w-[32%] rounded-xl'>   
        {calcInput.map((item)=>{
         return( <div className='flex m-2 p-2 '>
            {item.map((val)=>{
            return <Button className={generateClassName(val)}>{val}</Button>
           })}
        </div>)
           
        })}
    </div>
  )
}

export default Home