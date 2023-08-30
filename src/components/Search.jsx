import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <div className='container mt-4'>
                    <form className="d-flex my-2 mb-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="City" aria-label="Search" name='city'/>
                        <input className="form-control me-2" type="search" placeholder="Topic" aria-label="Search" name='topic'/>
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form>
                    <div className="text-center">
                        <button className='mx-1 btn btn-danger'>India</button>
                        <button className='mx-1 btn btn-danger'>America</button>
                        <button className='mx-1 btn btn-danger'>Africa</button>
                        <button className='mx-1 btn btn-danger'>Asia</button>
                        <button className='mx-1 btn btn-danger'>China</button>
                        <button className='mx-1 btn btn-danger'>Japan</button>
                        <button className='mx-1 btn btn-danger'>Australia</button>
                        <button className='mx-1 btn btn-danger'>Russia</button>
                    </div>
                </div>
            </div>
        )
    }
}
