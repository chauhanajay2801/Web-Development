import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =  [
        {
          "source": { "id": null, "name": "DW (English)" },
          "author": "Deutsche Welle",
          "title": "Munich Security Conference: Zelenskyy urges speedier support – DW – 02/18/2023 - DW (English)",
          "description": "Ukraine's president said there is \"no alternative\" to victory. Representatives from 96 different countries are attending the summit. The IMF has hinted at further support for Kyiv.",
          "url": "https://www.dw.com/en/munich-security-conference-zelenskyy-urges-speedier-support/a-64739355",
          "urlToImage": "https://static.dw.com/image/64748423_6.jpg",
          "publishedAt": "2023-02-18T03:33:41Z",
          "content": "The annual Munich Security Conference (MSC) began on Friday against the backdrop of Russia's invasion of Ukraine, which is top of the agenda at this year's high-level meeting.\r\nUkrainian President Vo… [+7922 chars]"
        },
        {
          "source": { "id": null, "name": "Page Six" },
          "author": "Nicki Cox",
          "title": "Paul Wesley officially files for divorce from Ines de Ramon - Page Six",
          "description": "The pair announced their separation in September 2022, despite having actually broken up around May. Both de Ramon and Wesley have since moved on.",
          "url": "https://pagesix.com/2023/02/17/paul-wesley-officially-files-for-divorce-from-ines-de-ramon/",
          "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/02/Paul-Wesley-divorce-Ines-de-Ramon-2.jpg?quality=75&strip=all&w=1200",
          "publishedAt": "2023-02-18T02:47:00Z",
          "content": "It’s officially over between Paul Wesley and Ines de Ramon despite both of them already moving on. \r\nThe “Vampire Diaries” star filed for divorce from his estranged wife on Friday after five years of… [+1836 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Guardian staff reporter",
          "title": "Russia-Ukraine war at a glance: what we know on day 360 of the invasion - The Guardian",
          "description": "Volodymyr Zelenskiy urges west to speed up its support as world leaders gather at Munich security conference",
          "url": "https://www.theguardian.com/world/2023/feb/18/russia-ukraine-war-at-a-glance-what-we-know-on-day-360-of-the-invasion",
          "urlToImage": "https://i.guim.co.uk/img/media/ca8455bfe45010c2b007e54640105084d97daf2d/0_94_6000_3601/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=af209ee2ad225547b12aca6cd2e6f68c",
          "publishedAt": "2023-02-18T02:33:00Z",
          "content": "<li>European powers vowed to intensify support for Ukraine as world leaders, military officers and diplomats gathered in Germany for the Munich security conference to discuss Europes security situati… [+4281 chars]"
        },
        {
          "source": { "id": null, "name": "ESPN" },
          "author": null,
          "title": "DK Metcalf wins MVP for Team Dwayne in Celebrity Game - ESPN",
          "description": "Seahawks WR DK Metcalf won MVP as Team Dwyane survived a waved off half-court buzzer beater to win the NBA All-Star Celebrity Game on Friday night.",
          "url": "https://www.espn.com/nba/story/_/id/35683531/dk-metcalf-wins-mvp-team-dwayne-celebrity-game",
          "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0218%2Fr1133023_1024x576_16%2D9.jpg",
          "publishedAt": "2023-02-18T02:23:52Z",
          "content": "Team Dwyane rallied in the fourth quarter to beat Team Ryan 81-78 in the NBA All-Star Celebrity Game on Friday night after a half-court shot at the buzzer was waved off.\r\nUtah Jazz owner Ryan Smith a… [+1540 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": "Steve Karnowski",
          "title": "Meat plant cleaning service fined $1.5M for hiring minors - The Associated Press - en Español",
          "description": "MINNEAPOLIS (AP) — One of the country's largest cleaning services for food processing companies employed more than 100 children in dangerous jobs at 13 meatpacking plants across the country, the U.S.",
          "url": "https://apnews.com/article/grand-island-us-department-of-labor-health-business-children-3afa3ace009791b8cf29fa91f2a8e6e4",
          "urlToImage": "https://storage.googleapis.com/afs-prod/media/705aed0f7f39449b8490fecb7b4de961/3000.webp",
          "publishedAt": "2023-02-18T02:23:38Z",
          "content": "MINNEAPOLIS (AP) One of the countrys largest cleaning services for food processing companies employed more than 100 children in dangerous jobs at 13 meatpacking plants across the country, the U.S. De… [+4869 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Megan Thomas",
          "title": "Kyle Jacobs, songwriter and husband of singer Kellie Pickler, dead at 49 - CNN",
          "description": "Kyle Jacobs, a country music producer and songwriter, who co-starred with his wife, singer Kellie Pickler, in a CMT docuseries, has died, according to Nashville police. He was 49.",
          "url": "https://www.cnn.com/2023/02/17/entertainment/kyle-jacobs-death/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230217172356-kyle-jacobs-kellie-pickler.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-02-18T02:02:00Z",
          "content": "Editors Note: If you or someone you know is struggling with suicidal thoughts or mental health matters, please call or text the 988 Suicide &amp; Crisis Lifeline to connect with a trained counselor o… [+2318 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Brenda Goodman, Caroll Alvarado",
          "title": "East Palestine residents worry rashes, headaches and other symptoms may be tied to chemicals from train crash - CNN",
          "description": "Some residents of East Palestine, Ohio, say they have developed rashes, sore throats, nausea and headaches after returning to their homes this week, and they're worried these new symptoms are related to chemicals released after a train derailment two weeks ag…",
          "url": "https://www.cnn.com/2023/02/17/health/ohio-derailment-rashes-health-impacts/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230217195938-01-ohio-derailment-rashes-health-impacts.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-02-18T01:40:00Z",
          "content": "Some residents of East Palestine, Ohio, say they have developed rashes, sore throats, nausea and headaches after returning to their homes this week, and theyre worried these new symptoms are related … [+9718 chars]"
        },
        {
          "source": { "id": "the-washington-post", "name": "The Washington Post" },
          "author": "Nicki Jhabvala",
          "title": "Commanders hire Eric Bieniemy as assistant head coach, offensive coordinator - The Washington Post",
          "description": "In Washington, Bieniemy will, for the first time, have full say over an offense and the play-calling.",
          "url": "https://www.washingtonpost.com/sports/2023/02/17/eric-bieniemy-commanders-chiefs/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YRIXO4K5WA6KSXGBNLEH57XI6E.jpg&w=1440",
          "publishedAt": "2023-02-18T01:36:00Z",
          "content": "Comment on this story\r\nAfter a weeks-long search for a new offensive play caller, the Washington Commanders hired longtime Kansas City Chiefs assistant Eric Bieniemy to be their assistant head coach … [+7270 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "",
          "title": "Tiger Woods score: Legend makes cut despite inconsistent Round 2 at 2023 Genesis Invitational - CBS Sports",
          "description": "Finishing 3 over for the day, Woods needed some late help to avoid being cut at Riviera Country Club",
          "url": "https://www.cbssports.com/golf/news/tiger-woods-score-legend-makes-cut-despite-inconsistent-round-2-at-2023-genesis-invitational/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/02/17/20c2be75-d226-4b61-a615-4ca57966c108/thumbnail/1200x675/6ce415056c89b2fc4c3159f10387a981/woods.jpg",
          "publishedAt": "2023-02-18T01:04:00Z",
          "content": "Tiger Woods will be around for the weekend at the 2023 Genesis Invitational. Turning in a 3-over 74 on Friday was how Woods followed up his opening round of 2-under 69 from Thursday to remain inside … [+2398 chars]"
        },
        {
          "source": { "id": "abc-news", "name": "ABC News" },
          "author": "The Associated Press",
          "title": "Family: Boy, 11, dies of infection after sprained ankle - ABC News",
          "description": "Family members say an 11-year-old Florida boy has died just days after a sprained ankle led to a flesh-eating bacterial infection",
          "url": "https://abcnews.go.com/US/wireStory/family-boy-11-dies-infection-after-sprained-ankle-97300901",
          "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
          "publishedAt": "2023-02-18T00:53:58Z",
          "content": "WINTER PARK, Fla. -- An 11-year-old Florida boy died just days after a sprained ankle led to a flesh-eating bacterial infection, family members said.\r\nJesse Brown, a fifth grader at Lakemont Elementa… [+1197 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Gustaf Kilander",
          "title": "Trump news – live: Tucker Carlson said Trump was 'demonic force' after 2020 election, Fox News lawsuit shows - The Independent",
          "description": "Follow all the latest developments in Trumpworld",
          "url": "https://www.independent.co.uk/news/world/americas/us-politics/trump-fox-news-today-georgia-grand-jury-texts-b2284453.html",
          "urlToImage": "https://static.independent.co.uk/2023/02/12/19/GettyImages-1460359013.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2023-02-18T00:52:24Z",
          "content": "Trump ally Kari Lake loses election lawsuit \r\nAn Arizona appeals court has rejected Republican Kari Lakes challenge of her defeat in the Arizona governors race to Democrat Katie Hobbs, denying her re… [+1571 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Hannah Sarisohn, Melissa Alonso",
          "title": "Man arrested after 6 killed, including suspect's ex-wife, in series of shootings in Mississippi, sheriff says - CNN",
          "description": "Six people are dead and another was wounded Friday in a series of shootings in Tate County, Mississippi after a man opened fire on his ex-wife and potentially other family members, Tate County Sheriff Brad Lance told CNN.",
          "url": "https://www.cnn.com/2023/02/17/us/mississippi-arkabutla-road-shootings/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230217151457-02-ms-shooting-0215.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-02-18T00:47:00Z",
          "content": "Six people are dead and another was wounded Friday in a series of shootings in Tate County, Mississippi after a man opened fire on his ex-wife and potentially other family members, Tate County Sherif… [+2647 chars]"
        },
        {
          "source": { "id": "nfl-news", "name": "NFL News" },
          "author": "Bucky Brooks",
          "title": "NFL's eight biggest Super Bowl windows right now? Chiefs, Eagles and Bengals top list; Bills at No. 7 - NFL.com",
          "description": "With the 2022 NFL campaign in the books, it's time to look forward to next season -- and beyond. Who currently has the biggest Super Bowl window? Bucky Brooks provides his ranking of the top eight contenders for the next few Lombardi Trophies.",
          "url": "https://www.nfl.com/news/nfl-s-eight-biggest-super-bowl-windows-right-now-chiefs-eagles-and-bengals-top-l",
          "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/uanimanxasvhy9lrgid5",
          "publishedAt": "2023-02-18T00:13:00Z",
          "content": "The NFL is the undisputed king of American sports. This is at least partially due to league parity -- the promise that anything can happen on any given Sunday.\r\nBut does that parity extend all the wa… [+942 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Alta Spells, Dianne Gallagher, Christina Maxouris",
          "title": "Paul Murdaugh confronted his father about finding pills a month before he and his mom were killed, prosecutors say - CNN",
          "description": "Before prosecutors rested their case on Friday, they presented evidence in court showing Paul Murdaugh -- son of disgraced South Carolina attorney Alex Murdaugh -- confronted his father about pills about one month before both he and his mother were found fata…",
          "url": "https://www.cnn.com/2023/02/17/us/alex-murdaugh-trial-friday/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230217141325-05-murdaugh-0216.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-02-18T00:10:00Z",
          "content": "Editors Note: The HBO docuseries Low Country: The Murdaugh Dynasty chronicles the familys influence in South Carolina. It airs on CNN Sunday, February 19, at 8 p.m. ET.\r\nBefore prosecutors rested the… [+5354 chars]"
        },
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "Raechal Shewfelt",
          "title": "Jen Shah explains why it took her so long to apologize in pre-prison interview: 'I was absolutely in denial' - Yahoo Entertainment",
          "description": "The \"Real Housewives of Salt Lake City\" star entered the FPC Bryan, in Bryan, Tex., on Friday.",
          "url": "https://www.yahoo.com/entertainment/jen-shah-pre-prison-interview-apology-000635266.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-02/d8c78230-af0e-11ed-afd5-f1c8bfaa4567",
          "publishedAt": "2023-02-18T00:06:00Z",
          "content": "Jen Shah promotes The Real Housewives of Salt Lake City. (Photo: Chris Haston/Bravo via Getty Images)\r\nHours before reality TV star Jen Shahreported to federal prison on Friday, the Real Housewives o… [+3714 chars]"
        },
        {
          "source": { "id": null, "name": "Variety" },
          "author": "Manori Ravindran",
          "title": "Sean Penn Grills Zelenskyy, Braves Fox News and Enrolls Miles Teller to Rally Ukrainian Soldiers in Gonzo Documentary ‘Superpower’ - Variety",
          "description": "On the day that Russia invaded Ukraine on Feb. 24, 2022, Sean Penn and a gonzo documentary camera crew found themselves on the frontlines of war as they waited to see if they could interview Ukrain…",
          "url": "https://variety.com/2023/film/global/superpower-sean-penn-zelenskyy-ukraine-russia-1235526985/",
          "urlToImage": "https://variety.com/wp-content/uploads/2023/02/Zelenskyy-Sean-Penn.jpg?w=1000&h=563&crop=1",
          "publishedAt": "2023-02-17T23:52:00Z",
          "content": "On the day that Russia invaded Ukraine on Feb. 24, 2022, Sean Penn and a gonzo documentary camera crew found themselves on the frontlines of war as they waited to see if they could interview Ukrainia… [+2993 chars]"
        },
        {
          "source": { "id": null, "name": "Spaceflight Now" },
          "author": null,
          "title": "Watch live: SpaceX to complete Friday doubleheader with launch for Inmarsat – Spaceflight Now - Spaceflight Now",
          "description": null,
          "url": "https://spaceflightnow.com/2023/02/17/falcon-9-inmarsat-6-f2-coverage/",
          "urlToImage": null,
          "publishedAt": "2023-02-17T23:03:45Z",
          "content": "Watch our live coverage of the countdown and launch of a SpaceX Falcon 9 rocket from Space Launch Complex 40 at Cape Canaveral Space Force Station, Florida. The Falcon 9 rocket will launch the Inmars… [+13505 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Goldman Sachs, BofA expect three more U.S. rate hikes this year - Reuters.com",
          "description": "Goldman Sachs and Bank of America said they expect the U.S. Federal Reserve to raise interest rates three more times this year, lifting their estimates after data pointed to persistent inflation and a resilient labor market.",
          "url": "https://www.reuters.com/markets/us/goldman-sachs-now-expects-three-more-fed-rate-hikes-2023-2023-02-17/",
          "urlToImage": "https://www.reuters.com/resizer/QJNWDvem66Iphzb2Ud52ToWZNTM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RIYXDXZFSFP35O6XQY2XWZDZFY.jpg",
          "publishedAt": "2023-02-17T22:31:00Z",
          "content": "Feb 17 (Reuters) - Goldman Sachs and Bank of America said they expect the U.S. Federal Reserve to raise interest rates three more times this year, lifting their estimates after data pointed to persis… [+1904 chars]"
        },
        {
          "source": { "id": null, "name": "Live Science" },
          "author": "Brandon Specktor",
          "title": "Cosmic 'tadpole' points to ultra-rare black hole hiding near the Milky Way's center - Livescience.com",
          "description": "Scientists detected a cloud of gas sculpted into a wonky tadpole shape near the Milky Way's center, possibly pointing to a rare intermediate-mass black hole.",
          "url": "https://www.livescience.com/cosmic-tadpole-points-to-ultra-rare-black-hole-hiding-near-the-milky-ways-center",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/MwrcLZknXMYCRnatK57LkH-1200-80.jpg",
          "publishedAt": "2023-02-17T22:04:19Z",
          "content": "An enormous, deformed dust cloud that astronomers nicknamed \"the Tadpole\" could point to the location of an extremely rare type of black hole never confirmed to exist in our galaxy before.\r\nIn a stud… [+3316 chars]"
        },
        {
          "source": { "id": null, "name": "The Seattle Times" },
          "author": null,
          "title": "UW study: Catching COVID gives protection from its worst effects - The Seattle Times",
          "description": null,
          "url": "https://www.seattletimes.com/seattle-news/health/catching-covid-gives-you-durable-protection-from-virus-but-for-how-long/",
          "urlToImage": null,
          "publishedAt": "2023-02-17T20:36:14Z",
          "content": null
        }
      ]
    constructor(){
        super();
        console.log("Hello i am a constructor from news component")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

  render() {
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