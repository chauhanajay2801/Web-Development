import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsKing - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
        <NewsItem title ="mtTitle" description= "mydesc" imageUrl = "https://ichef.bbci.co.uk/news/1024/branded_news/04BD/production/_128431210_screenshot2023-01-26at6.38.50pm.png" newsUrl="todo"/>
        </div>
          <div className="col-md-4">
        <NewsItem title ="mtTitle" description= "mydesc"/>
        </div>
          <div className="col-md-4">
        <NewsItem title ="mtTitle" description= "mydesc"/>
        </div>
     
        
        </div>
      </div>
    )
  }
}

export default News