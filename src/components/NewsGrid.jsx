import React, { Component } from 'react'
import News from './News'
import './News.css'
import Spinner from './Spinner';

export default class NewsGrid extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "independent",
    //             "name": "Independent"
    //         },
    //         "author": "Graig Graziosi",
    //         "title": "Why have conservatives turned on 'Rich Men North of Richmond' singer Oliver Anthony - The Independent",
    //         "description": "The right-wing darling praised America’s diversity in an interview, infuriating his supporters",
    //         "url": "https://www.independent.co.uk/news/world/americas/oliver-anthony-republican-accent-revealed-b2398458.html",
    //         "urlToImage": "https://static.independent.co.uk/2023/08/15/10/newFile-3.jpg?quality=75&width=1200&auto=webp",
    //         "publishedAt": "2023-08-24T04:38:14Z",
    //         "content": "Sign up to our Evening Headlines email for your daily guide to the latest news\r\nSign up to our free US Evening Headlines email\r\nAfter belting out his complaints about welfare recipients eating fudge … [+2919 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Amy B Wang, Dylan Wells, Hannah Knowles, Maeve Reston, Mariana Alfaro, Maegan Vazquez, Marisa Iati",
    //         "title": "Highlights, analysis from the first Republican presidential debate - The Washington Post",
    //         "description": "Republican presidential candidates faced off in their first debate.",
    //         "url": "https://www.washingtonpost.com/politics/2023/08/23/republican-presidential-debate/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-24-2023/t_9572799cce114226926cb8d0b55881ae_name_wrapthumb.jpg&w=1440",
    //         "publishedAt": "2023-08-24T04:11:45Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Taylor Romine, Josh Campbell",
    //         "title": "At least 3 dead, multiple wounded after mass shooting at California biker bar, police say - CNN",
    //         "description": "At least three people have been killed and five others were wounded by gunfire at a biker bar in Orange County, California, police said Wednesday night.",
    //         "url": "https://www.cnn.com/2023/08/23/us/orange-county-california-bar-shooting/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230823201924-01-cooks-corner-shooting-0823.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-08-24T04:11:03Z",
    //         "content": "At least three people have been killed and five others were wounded by gunfire at a biker bar in Orange County, California, police said Wednesday night.\r\nThe shooter is dead and an officer-involved s… [+508 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "financial-times",
    //             "name": "Financial Times"
    //         },
    //         "author": "Gary Jones, William Langley",
    //         "title": "Live news: India's Pragyan lunar rover rolls out on the Moon - Financial Times",
    //         "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
    //         "url": "https://www.ft.com/content/c935ab4e-efeb-4015-ae69-ae933903846b",
    //         "urlToImage": null,
    //         "publishedAt": "2023-08-24T04:09:38Z",
    //         "content": "What is included in my trial?\r\nDuring your trial you will have complete digital access to FT.com with everything in both of our Standard Digital and Premium Digital packages.\r\nStandard Digital includ… [+1494 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Emiko Jozuka, Jessie Yeung, Tara Subramaniam",
    //         "title": "Fukushima nuclear waste water: Japan to release treated water despite China's opposition - CNN",
    //         "description": "Japan on Thursday began releasing treated radioactive wastewater from its Fukushima nuclear plant, sparking a fiery tirade from China which described operation as a “selfish and irresponsible act”.",
    //         "url": "https://www.cnn.com/2023/08/23/asia/japan-fukushima-water-release-thursday-intl-hnk/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230414151213-01-japan-treated-wastewater-fukushima.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-08-24T04:09:00Z",
    //         "content": "Japan on Thursday began releasing treated radioactive wastewater from its Fukushima nuclear plant, sparking a fiery tirade from China which described operation as a selfish and irresponsible act.\r\nTh… [+4235 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Yoonjung Seo, Emiko Jozuka, Mohammed Tawfeeq",
    //         "title": "North Korea says its spy satellite launch has failed, again - CNN",
    //         "description": "North Korea’s second attempt to launch a spy satellite into orbit failed Thursday due to a malfunction in the third-stage of the rocket, the state-run Korean Central News Agency (KCNA) reported.",
    //         "url": "https://www.cnn.com/2023/08/23/asia/north-korea-second-satellite-launch-fails-intl-hnk/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230824092212-north-korea-rocket-launch-on-tv.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-08-24T02:52:00Z",
    //         "content": "North Koreas second attempt to launch a spy satellite into orbit failed Thursday due to a malfunction in the third-stage of the rocket, the state-run Korean Central News Agency (KCNA) reported.\r\nThe … [+4060 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "Yevgeny Prigozhin: Wagner defied Putin and now its leader may be dead - BBC",
    //         "description": "If Yevgeny Prigozhin's reported death is revenge, it sends a message to Russians, writes Steve Rosenberg.",
    //         "url": "https://www.bbc.com/news/world-europe-66601553",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E392/production/_130885285_gettyimages-1615749057.jpg",
    //         "publishedAt": "2023-08-24T02:48:57Z",
    //         "content": "When Yevgeny Prigozhin and his Wagner troops launched their insurrection two months ago, Vladimir Putin made his feelings more than clear. He called it \"treachery\" and a \"stab in the back\" of Russia.… [+2931 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "Lalee Ibssa, Soo Rin Kim, Meredith Deliso",
    //         "title": "Trump, in Tucker Carlson interview, says other GOP candidates shouldn't be running for president - ABC News",
    //         "description": "The pre-taped interview aired during the first GOP primary debate.",
    //         "url": "https://abcnews.go.com/Politics/donald-trump-tucker-carlson-interview/story?id=102508596",
    //         "urlToImage": "https://s.abcnews.com/images/US/trump-tucker-interview-ht-jt-230823_1692832174905_hpMain_16x9_992.jpg",
    //         "publishedAt": "2023-08-24T02:37:26Z",
    //         "content": "Former President Donald Trump wasted no time attacking other Republican candidates during his pre-taped interview with former Fox News host Tucker Carlson.\r\n\"I'm saying, do I sit there for an hour or… [+3291 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Jack Baer",
    //         "title": "Yankees GM Brian Cashman calls season 'a disaster' amid team's longest losing streak since 1982 - Yahoo Sports",
    //         "description": "The Yankees' longtime general manager admitted the obvious Wednesday.",
    //         "url": "https://sports.yahoo.com/yankees-gm-brian-cashman-calls-season-a-disaster-amid-teams-longest-losing-streak-since-1982-234154498.html",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/t7tmHp2fr52fTvVL1VTG0Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/8ef17bf0-420e-11ee-ab3e-6c372312648b",
    //         "publishedAt": "2023-08-24T02:19:00Z",
    //         "content": "New York Yankees general manager Brian Cashman admitted the obvious Wednesday.\r\nSpeaking with reporters while the team was on a nine-game losing streak, its longest since 1982, Cashman responded to t… [+3080 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn",
    //             "name": "ESPN"
    //         },
    //         "author": null,
    //         "title": "FC Cincinnati 3-3 Inter Miami CF (Aug 23, 2023) Game Analysis - ESPN",
    //         "description": "Expert recap and game analysis of the Inter Miami CF vs. FC Cincinnati U.s. Open Cup game from August 23, 2023 on ESPN.",
    //         "url": "https://www.espn.com/soccer/report/_/gameId/670651",
    //         "urlToImage": "https://a.espncdn.com/combiner/i?img=/i/espn/misc_logos/500/soccer.png",
    //         "publishedAt": "2023-08-24T02:15:00Z",
    //         "content": "Lionel Messi inspired a thrilling comeback to help Inter Miami overcome a 2-0 deficit and beat FC Cincinnati on penalties Wednesday to reach the final of the U.S. Open Cup after a dramatic night in O… [+4816 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "politico",
    //             "name": "Politico"
    //         },
    //         "author": null,
    //         "title": "Vivek Ramaswamy calls climate change a 'hoax' during debate - POLITICO",
    //         "description": "\"More people are dying of bad climate change policies than they are of actual climate change,\" he said.",
    //         "url": "https://www.politico.com/news/2023/08/23/candidates-clash-over-climate-change-00112637",
    //         "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1155968404/b70cb34e-24bd-4c82-bb3d-b0fcbc3c5f87/cf8937a8-0352-4e8c-8ebb-0ce594b8f2e9/1280x720/match/image.jpg",
    //         "publishedAt": "2023-08-24T02:04:40Z",
    //         "content": "The question stared when Fox moderator Martha MacCallum asked: Do you believe in human behavior causing climate change? Raise your hand if you do.\r\nBefore anyone could make a move, Florida Gov. Ron D… [+583 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MarketWatch"
    //         },
    //         "author": "Therese Poletti",
    //         "title": "Nvidia's jaw-dropping revenue forecast might not even be its peak - MarketWatch",
    //         "description": "CFO says company is seeing ‘tremendous demand’ and that it has visibility into very strong orders into 2024",
    //         "url": "https://www.marketwatch.com/story/nvidias-jaw-dropping-revenue-forecast-might-not-even-be-its-peak-438c9729",
    //         "urlToImage": "https://images.mktw.net/im-683956/social",
    //         "publishedAt": "2023-08-24T01:33:00Z",
    //         "content": "Nvidia Corp. stunned Wall Street with Wednesdays jaw-dropping forecast of $16 billion in revenue for the current quarter, and that may not even be the companys top-line peak, as its decades of work i… [+3942 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": "Valerie Insinna, David Shepardson",
    //         "title": "New Boeing 737 MAX supplier defect to delay aircraft deliveries - Reuters",
    //         "description": "Boeing has recently identified a new 737 MAX quality problem involving supplier Spirit AeroSystems(S…",
    //         "url": "https://www.reuters.com/business/aerospace-defense/new-boeing-737-max-supplier-defect-delay-aircraft-deliveries-2023-08-23/",
    //         "urlToImage": "https://www.reuters.com/resizer/MqsE-jWUPIUG_ma03UOiU-NAPfE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZKCI5ILP6NLSLMWDBHESABBABI.jpg",
    //         "publishedAt": "2023-08-24T00:58:00Z",
    //         "content": "Aug 23 (Reuters) - Boeing (BA.N) has recently identified a new 737 MAX quality problem involving supplier Spirit AeroSystems (SPR.N) that has resulted in improperly drilled holes on the aft pressure … [+1956 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": "",
    //         "title": "Sam Darnold named 49ers' No. 2 QB; Trey Lance given 'a big chance to win' backup spot, Kyle Shanahan says - CBS Sports",
    //         "description": "Lance, whose future with the team is in doubt, is still expected to see some action in Friday's preseason finale",
    //         "url": "https://www.cbssports.com/nfl/news/sam-darnold-named-49ers-no-2-qb-trey-lance-given-a-big-chance-to-win-backup-spot-kyle-shanahan-says/",
    //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/28/aed33d27-0867-43c6-895c-a2a82dc18469/thumbnail/1200x675/8e0d7fbb8a7e6c44bc6f25e7d81d8638/getty-trey-lance-sam-darnold-49ers.jpg",
    //         "publishedAt": "2023-08-24T00:58:00Z",
    //         "content": "A year ago, Trey Lance was on the precipice of being the San Francisco 49ers' new starting quarterback. Now, Lance's future with the team is in doubt after the team named Sam Darnold as the team's No… [+2992 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": "Jack Queen",
    //         "title": "Giuliani surrenders in Trump election subversion case, $150000 bond set - Reuters",
    //         "description": "Donald Trump's former personal lawyer Rudolph Giuliani surrendered on Wednesday at an Atlanta jail to face state charges arising from actions he was accused of taking to overturn the former U.S. president's 2020 election loss.",
    //         "url": "https://www.reuters.com/legal/trump-ex-attorney-rudy-giuliani-heads-georgia-face-election-charges-2023-08-23/",
    //         "urlToImage": "https://www.reuters.com/resizer/yr42QcDvy9nttMfM7YlS0VaXwHo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PW24FUSLVNMAHNRSJN75QTTYSQ.jpg",
    //         "publishedAt": "2023-08-24T00:52:00Z",
    //         "content": "ATLANTA, Aug 23 (Reuters) - Donald Trump's former personal lawyer Rudolph Giuliani surrendered on Wednesday at an Atlanta jail to face state charges arising from actions he was accused of taking to o… [+3339 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Deadline"
    //         },
    //         "author": "Armando Tinoco",
    //         "title": "‘Rebel Moon’: Zack Snyder’s Cut Of Netflix Film To Have “Close To An Hour Of Extra Content” - Deadline",
    //         "description": "Netflix is releasing a director’s cut of the Zack Snyder film that will have “close to an hour of extra content” and fans don’t have to campaign for it to see the light of d…",
    //         "url": "https://deadline.com/2023/08/rebel-moon-zack-snyder-cut-netflix-film-1235526670/",
    //         "urlToImage": "https://deadline.com/wp-content/uploads/2023/08/rebel-moon-netflix.jpg?w=1024",
    //         "publishedAt": "2023-08-24T00:45:00Z",
    //         "content": "Netflix is releasing a director’s cut of the Zack Snyder film that will have “close to an hour of extra content” and fans don’t have to campaign for it to see the light of day.\r\nIn contrast to the Sn… [+1728 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "New PlayStation Portal Details, Pricing and More Revealed - IGN Daily Fix - IGN",
    //         "description": "On today's Daily Fix:After teasing the device at the last State of Play showcase, Sony officially announced its handheld device's new name, previously codena...",
    //         "url": "https://www.youtube.com/watch?v=QZ8s_IHY0E8",
    //         "urlToImage": "https://i.ytimg.com/vi/QZ8s_IHY0E8/maxresdefault.jpg",
    //         "publishedAt": "2023-08-24T00:18:18Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Kif Leswing",
    //         "title": "Nvidia's blowout earnings report shows chipmaker is gobbling up all the profit in AI - CNBC",
    //         "description": "Nvidia's prodigious cashflow contrasts with its top customers, which are spending heavily on AI hardware and building multi-million dollar AI models.",
    //         "url": "https://www.cnbc.com/2023/08/23/nvidia-blowout-earnings-report-shows-chipmaker-grabbing-all-ai-profits.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107072705-1654689317450-gettyimages-1041948482-87192795.jpeg?v=1692835116&w=1920&h=1080",
    //         "publishedAt": "2023-08-23T23:58:36Z",
    //         "content": "Nvidia is on a tear, and it doesn't seem to have an expiration date.\r\nNvidia makes the graphics processors, or GPUs, that are needed to build AI applications like ChatGPT. In particular, there's extr… [+3874 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "SciTechDaily"
    //         },
    //         "author": null,
    //         "title": "Long COVID Brain Fog Treatment Breakthrough: Key Biological Pathway Discovered - SciTechDaily",
    //         "description": "The identification of a metabolic pathway could lead to answers and new treatments for those experiencing brain fog because of long COVID. Researchers from the University of New South Wales (UNSW Sydney) and St. Vincent’s Hospital have identified a key pathwa…",
    //         "url": "https://scitechdaily.com/long-covid-brain-fog-treatment-breakthrough-key-biological-pathway-discovered/",
    //         "urlToImage": "https://scitechdaily.com/images/Woman-Brain-Fog-Smoke-Art-Concept.jpg",
    //         "publishedAt": "2023-08-23T23:03:14Z",
    //         "content": "ByUniversity of New South WalesAugust 23, 2023\r\nResearchers link long COVIDs brain fog to the kynurenine pathway, suggesting a biological basis for the cognitive challenges experienced by patients, p… [+8163 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Athletic"
    //         },
    //         "author": "Nicole Auerbach",
    //         "title": "ACC brass meeting this week as conference seriously considers adding Stanford, Cal, SMU: Sources - The Athletic",
    //         "description": "A group of ACC presidents met Wednesday morning to discuss finances, one of the sources said.",
    //         "url": "https://theathletic.com/4800635/2023/08/23/acc-cal-stanford-smu-expansion/",
    //         "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/08/07153423/ACC-scaled.jpg",
    //         "publishedAt": "2023-08-23T22:29:40Z",
    //         "content": "The ACC is seriously considering adding Stanford, Cal and SMU, multiple sources briefed on the discussions said Wednesday. There have been discussions periodically over the past month. Heres what you… [+3078 chars]"
    //     }
    // ]
    dot = ".............................................................";
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async pageUpdate() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6adcf3f30114fe5b6fbe763394441d7&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        console.log(this.state.page)
    }

    async componentDidMount() {
        this.pageUpdate()
    }

    nextChange = async () => {
        this.setState({ page: this.state.page + 1 })
        setTimeout(() => {
            this.pageUpdate()
        }, 300);
    }
    prevChange = async () => {
        this.setState({ page: this.state.page - 1 })
        setTimeout(() => {
            this.pageUpdate()
        }, 300);
    }
    home = async () => {
        this.setState({ page: 1 })
        setTimeout(() => {
            this.pageUpdate()
        }, 300);
    }

    render() {
        document.title = `NewsMonk: ${this.props.name} news - Get latest news daily`
        return (
            <div className="container my-3" style={{ minHeight: '100vh' }}>
                <div className="text-center bg-danger text-white rounded">
                    <h4 className='p-2'>{this.props.name} News</h4>
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type='button' className='mx-1 btn btn-danger' onClick={this.prevChange}>&laquo; Previous</button>
                    {/* {this.state.loading && <Spinner />} */}
                    <button disabled={this.state.page === 1} type='button' className='mx-1 btn btn-danger' onClick={this.home}>&laquo; Home &raquo;</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='mx-1 btn btn-danger' onClick={this.nextChange}>Next &raquo;</button>
                </div>
                <div className='row'>
                    {!this.state.loading ? (this.state.articles.map((elements) => {
                        return <div className="col-sm-6 col-lg-4" key={elements.url} >
                            <News title={elements.title ? elements.title.slice(0, 65) : ""} description={elements.description ? elements.description.slice(0, 90) : "Description is not available  " + this.dot} newsUrl={elements.url} time={elements.publishedAt.replace('T', ' at ').slice(0, 19)} />
                        </div>
                    })) : <Spinner />}
                </div>
            </div>
        )
    }
}