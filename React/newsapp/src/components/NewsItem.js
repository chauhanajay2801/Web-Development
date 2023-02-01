import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  articles= [
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Ukraine war: Zelensky's government launches anti-corruption drive",
      "description": "The government in Kyiv is trying to tackle corruption head-on, but it’s a risky strategy.",
      "url": "http://www.bbc.co.uk/news/world-europe-64401190",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A264/production/_128427514_kyrylotymoshenko.jpg",
      "publishedAt": "2023-01-27T06:52:15.8807361Z",
      "content": "It's been a political reshuffle with a difference.\r\nAt the time of typing this, 11 officials have either resigned or been sacked as Kyiv tries to tackle government corruption. \r\nIt's led to some poli… [+4116 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Israel-Palestinian conflict: Fears of wider flare-up after deadly Jenin raid",
      "description": "What's behind the raid on the West Bank city, which led to nine Palestinian deaths on Thursday?",
      "url": "http://www.bbc.co.uk/news/64417822",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5FAC/production/_128429442_d6ed7e71-2391-465c-8df2-030be5fd8cb4.jpg",
      "publishedAt": "2023-01-27T05:37:22.8801476Z",
      "content": "This is the most deadly Israeli raid into Jenin refugee camp in nearly two decades. \r\nNine Palestinians were killed when troops reportedly encircled buildings amid a storm of gunfire, grenades and te… [+5843 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Cameras show tornado ripping through Texas town",
      "description": "The CCTV footage reveals the moment a tornado touched down and tore through Deer Creek.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64420943",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18300/production/_128427099_p0dz4q20.jpg",
      "publishedAt": "2023-01-27T04:22:23.0058815Z",
      "content": "With wind speeds reaching 140mph (225km/h), a tornado wreaked havoc across the Houston area. \r\nCCTV cameras in Deer Creek, Texas, caught some of the destruction."
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Woman arrested for enrolling as New Jersey high school student",
      "description": "The 29-year-old allegedly used a fake birth certificate to attend the high school in New Jersey.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64408449",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13F75/production/_128418718_gettyimages-1415424431.jpg",
      "publishedAt": "2023-01-27T04:22:20.1315967Z",
      "content": "A 29-year-old woman has been arrested in New Jersey for allegedly posing as a high school student.\r\nThe woman, identified by police as Hyejeong Shin, has been charged with using a fake identification… [+1880 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Tyre Nichols: Biden urges calm over Memphis police murder case",
      "description": "Video of the traffic stop arrest that led to Tyre Nichols' death is due to be released on Friday.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64421704",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/04BD/production/_128431210_screenshot2023-01-26at6.38.50pm.png",
      "publishedAt": "2023-01-27T03:37:20.2395801Z",
      "content": "President Joe Biden is urging protests in Tennessee to remain peaceful as officials plan to release video of an arrest that led to a motorist's death. \r\nFive Memphis police officers have been fired a… [+4544 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "George Santos: Drag queen claims embroil embattled congressman",
      "description": "A congressman who has criticised LGBT people becomes late-night comedy fodder after his apparent drag queen past emerges.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64388524",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F23D/production/_128431026_santos.png",
      "publishedAt": "2023-01-27T02:52:15.7085054Z",
      "content": "He admitted he was guilty of \"embellishing\" his biography and resume - but Republican lawmaker George Santos said he was definitely never a drag queen.\r\nOr at least that was until photos and videos o… [+5719 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "NYC bike path killer Sayfullo Saipov convicted of murder",
      "description": "The Uzbekistan native may face the death penalty for what was the city's deadliest terrorist attack since 9/11.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64421338",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/104E3/production/_98578766_mediaitem98578762.jpg",
      "publishedAt": "2023-01-27T00:37:23.693164Z",
      "content": "Media caption, New York truck attack: Who is Sayfullo Saipov?\r\nAn Islamic extremist who killed eight people when he intentionally sped a lorry down a New York City bike path in 2017 has been convicte… [+1437 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Asteroid 2023 BU: Space rock to pass closer than some satellites",
      "description": "About the size of a bus, the space rock will whip over the southern tip of South America.",
      "url": "http://www.bbc.co.uk/news/science-environment-64411469",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7FC8/production/_128421723_gettyimages-1365125730.jpg",
      "publishedAt": "2023-01-27T00:37:17.9433443Z",
      "content": "You definitely shouldn't panic but there is a biggish asteroid about to pass by Earth in the coming hours.\r\nAbout the size of a minibus, the space rock, known as 2023 BU, will whip over the southern … [+3507 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Haiti police riot after crime gangs kill 14 officers",
      "description": "Fourteen police officers have died since the start of 2023 amid a huge surge in gang violence.",
      "url": "http://www.bbc.co.uk/news/world-latin-america-64421308",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5CFB/production/_128430832_a8e1eff3b63c4e5600d43258c3609319e70352d60_573_5500_30941000x563.jpg",
      "publishedAt": "2023-01-26T23:07:23.5049616Z",
      "content": "Rebel police officers rioted in Haiti's capital Port-au-Prince on Thursday following the killing of more than a dozen colleagues by criminal gangs.\r\nThe rioting officers blame the government for not … [+2691 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Tennessee students build robotic hand for new classmate",
      "description": "Sergio Peralta, 15, says his classmates changed his life by making him a robotic hand.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-64418260",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/958A/production/_128428283_prosthetics_tennessee.jpg",
      "publishedAt": "2023-01-26T18:07:21.8035553Z",
      "content": "Starting at a new school this year, 15-year-old Sergio Peralta had all the typical teenage reasons to be nervous. \r\nHe was also trying to keep a secret: a hand that was not fully formed.\r\n\"In the fir… [+1731 chars]"
    }
]
  constructor(){
    super();
    console.log("nes comp constructor");
    this.state={
      articles:this.articles,
      loading: false
      
    }
  }

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;

    return (
      <div className='container my-3'>
        <div className="card" style= {{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newdetails/c." className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem