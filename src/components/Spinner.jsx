import React, { Component } from 'react'
import '../css/Spinner.css'

export default class Spinner extends Component {
    
    render() {
        return (
            <div className='my-5'>
                <div class="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
