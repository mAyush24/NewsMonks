import React, { Component } from 'react'
import './News.css'
// import img from '../img/img.jpg'


export default class News extends Component {
    boxShadow = {
        boxShadow: "0px 0px 10px gray"
    }
    render() {
        let { title, description, newsUrl, time } = this.props;
        return (
            <div>
                {/* <div className="card mb-3" style={this.boxShadow}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={imgUrl} className="img-fluid " alt="noImage" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}...</h5>
                                <hr />
                                <p className="card-text">{description}...</p>
                                <p className="card-text"><small className="text-muted">Last updated: {time}</small></p>
                            </div>
                        </div>
                        <a href={newsUrl} target='_blank' className="btn btn-outline-danger btn-sm">Read More</a>
                    </div>
                </div> */}

                <div className="card mb-3" style={{boxShadow: "0px 0px 10px gray"}} >
                    {/* <div className="imgContain">
                        <img src={!(imgUrl === null)? imgUrl: img} className="img-fluid " alt="" />
                        <img src={img} className="img-fluid " alt="" />
                    </div> */}
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5> <hr />
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">Last updated: {time}</small></p> <hr />
                        <a href={newsUrl} target='_blank' className="btn btn-outline-danger btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
