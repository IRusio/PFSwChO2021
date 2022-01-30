import { Component, useState } from "react";

export default class HistoryComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/history')
            .then(response => response.json())
            .then(data => this.setState({ history: data }))
    }

    componentDidUpdate(){
        fetch('http://localhost:4000/api/history')
            .then(response => response.json())
            .then(data => this.setState({ history: data }))
    }

    render() {
        return(
            JSON.stringify(this.state)
        )
    }
} 