import React, { Component } from 'react'

export default class Discussion extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Discussion",
            currentTime: String(new Date())
        }
    }

    componentDidMount() {
        this.lifeTime = setInterval(() => {
            console.log("changed state")
            this.setState({ currentTime: String(new Date()) })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.lifeTime)
    }

    render () {
        const { pageTitle, currentTime } = this.state;
        return (
            <div>
                <h1>{pageTitle}</h1>
                <p>{currentTime}</p>
            </div>
        )
    }
}