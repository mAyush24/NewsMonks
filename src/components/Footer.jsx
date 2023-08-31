import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            // <div style={{ position: 'absolute', bottom: '1px', width: '100vw'}}>
            <div>
                <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright :
                    <span className="text-dark"> NewsMonk</span>
                </div>
            </footer>
            </div>
        )
    }
}
