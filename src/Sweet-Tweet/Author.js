import React from 'react'

const Author = ({author}) => {
    console.log(author);
    let {name,handle} = author
  return (
    <span>
        <span className='name'>{name}</span>
        <span className='name'>@{handle}</span>
    </span>
  )
}

export default Author