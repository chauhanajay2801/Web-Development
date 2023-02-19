import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  
    constructor(){
        super();
        this.state = {
            articles:[],
            loading: true,
            page:1
        }
    }

   
  async componentDidMount() { 
    console.log("cdm")
    let url = 
     `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b0fa06f152dc4ffe9ade560a229c9405&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
    totalResults: parsedData.totalResults,
    loading:false})
   }

   handleNextClick = async()=>{
    console.log("Next Click");
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b0fa06f152dc4ffe9ade560a229c9405&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            
            page: this.state.page +1,
            articles: parsedData.articles,
            loading:false
        })
    }
    
}

handlePreviousClick = async()=>{
    console.log("Previous Click");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b0fa06f152dc4ffe9ade560a229c9405&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading:false
    })
   }

  render() {
    console.log("render")
    return (
      <div className = "container my-3">
        <h2 className='text-center'>NewsBaba - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem  title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} />
            </div>
        })}
        </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>	&larr; Previous</button> 
       <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}> Next &rarr;</button>
       </div>
    </div>
    )
  }
}

export default News

