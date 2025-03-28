import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    //this hook will get call if our app error
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }
    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good.</h1>
        }
        return this.props.children
    }



}

export default ErrorBoundry;