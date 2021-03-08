import React from 'react'
import classes from './NewsDetail.module.css'
import {useRouteMatch} from "react-router-dom";
import {newses} from '../newsData'

const NewsDetail = (props) => {

  // console.log(props)

  let match = useRouteMatch();
  const target = match.params.name - 1
  // console.log(window.title)

  document.title = newses[target].title

  return(
    <section className={classes.NewsDetail}>
      <div className={classes.left}>
          <h2 className={classes.title}>{newses[target].title}</h2>
          {
            newses[target].description.map((p, index) => {
              return(
                <p className={classes.subtitle} key={index}>{p}</p>
              )
            })
          }
        <time className={classes.date} dateTime='2020-03-10'>{newses[target].date}</time>
      </div>
      <div className={classes.right}>
        {newses[target].images.map((image,index) => {
          return (
            <img
              className={classes.picture}
              key={index}
              src={image}
              alt={index}
            />)
        })}
      </div>

    </section>
  )
}

export default NewsDetail