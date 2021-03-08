import React from 'react'
import './NewsItem.css'
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';


const NewsItem = ( {id, title, date, src} ) => {

  let match = useRouteMatch();

  const toggleCardHandler = event => {
    // console.log(event.target, event.clientY);
  }

  return(
      <Link to={`${match.url}/${id}`} className="news__item">
        <h2 className='news__title'>{title}</h2>
        <div className="news__date_shade"> </div>
        <time className='news__date' dateTime='2020-03-10'>{date}</time>
        <img onMouseMove={event => toggleCardHandler(event)} className='news__bg-img' src={src} alt={title}/>
      </Link>
  )
}
export default NewsItem