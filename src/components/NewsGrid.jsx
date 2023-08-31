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
