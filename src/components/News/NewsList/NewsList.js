import React from 'react'
import NewsItem from '../NewsItem/NewsItem'

const NewsList = ({newsBlock}) => {


  return(
    <div className='news__list'>
      {
        newsBlock.map((block, index) => {
          return (
            <NewsItem
              key = {index}
              id = {block.id}
              title = {block.title}
              date = {block.date}
              src = {block.src}
            />
          )
        })
      }
    </div>
  )
}

export default NewsList