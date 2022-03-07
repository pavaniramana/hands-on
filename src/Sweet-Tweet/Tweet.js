import React from 'react'
import Photo from './Photo';
import Author from './Author';
import Message from './Message';
import Options from './Options';
import './index.css'

const Tweet = ({data}) => {
    console.log(data);
  return (
    <>
        <div className='tweet'>
            <Photo pic = {data.image}/>
            <div className='author'>
                <Author author = {data.author}/>
                <Message text = {data.message}/>
                <div className='button'>
                    <Options />
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Tweet;