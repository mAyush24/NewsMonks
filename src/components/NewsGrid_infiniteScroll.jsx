import React, { Component } from 'react'
import News from './News'
import './News.css'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class NewsGrid extends Component {
    dot = ".............................................................";
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    async pageUpdate() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }

    async componentDidMount() {
        this.pageUpdate()
    }

    fetchData = async () => {
        this.props.setProgress(10)
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        setTimeout(() => {
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loading: false
            })
        }, 300);
        this.props.setProgress(100)
    }

    render() {
        document.title = `NewsMonk: ${this.props.name} news - Get latest news daily`
        return (
            <div className="my-3">
                <div className=" container text-center bg-danger text-white rounded mb-2">
                    <h4 className='p-2'>{this.props.name} News</h4>
                </div>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading ? <Spinner /> : ""}
                >
                    <div className="container my-3">
                        <div className='row'>
                            {(this.state.articles.map((elements) => {
                                if (elements.title || elements.description || elements.newsUrl || elements.publishedAt)
                                    return <div className="col-sm-6 col-lg-4" key={elements.url} >
                                        <News title={elements.title ? elements.title.slice(0, 65) : ""} description={elements.description ? elements.description.slice(0, 90) : "Description is not available  " + this.dot} newsUrl={elements.url} time={elements.publishedAt.replace('T', ' at ').slice(0, 19)} />
                                    </div>
                            }))}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
