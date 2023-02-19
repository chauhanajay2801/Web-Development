import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    constructor(){
        super();
        this.state = {
            articles:[],
            loading: false
        }
    }

  async componentDidMount() { 
    console.log("cdm")
    let url = "https://newsapi.org/v2/everything?q=apple&from=2023-02-18&to=2023-02-18&sortBy=popularity&apiKey=b0fa06f152dc4ffe9ade560a229c9405";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
   }

  render() {
    console.log("render")
    return (
      <div className = "container my-3">
        <h2>NewsBaba - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem  title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} />
            </div>
        })}
        </div>
    
    </div>
    )
  }
}

export default News