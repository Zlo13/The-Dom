import React from 'react'
import NewsList from './NewsList/NewsList'
import './News.css'
import {newses} from './newsData'
import Footer from "../Footer/Footer";

const News = () => {


  return(
    <main className="news">
      <NewsList
        newsBlock = {newses}
      />
      <Footer/>
    </main>
  )
}

export default News