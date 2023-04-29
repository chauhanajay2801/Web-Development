import React from 'react'

const NewsItem =(props) => {

    let {title, description,imageUrl, newsUrl,author,date,source} = props;
    return (
      <div className = "my-3">
        <div className="card" style={{width: " "}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{left: '90%', zIndex: '1'}}> {source}</span>
         <img src={!imageUrl?"https://deadline.com/wp-content/uploads/2023/02/Deadline-Contenders-Film-Nominees-2022-Causeway-1920-x-1080.jpg?w=1024":imageUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">{title} </h5>
         <p className="card-text">{description}</p>
         <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {date}</small></p>
         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a> 
        </div>
        </div>
      </div>
    )
  }


export default NewsItem