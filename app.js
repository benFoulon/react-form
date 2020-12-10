class App extends React.Component{

    state = {
        name: "",
        message: "",
        comment : []
    }

    handleName = (event) =>{
        console.log(event.target.value)

        this.setState({
            name : event.target.value
        })
    }

    handleMessage = (event) =>{
        console.log(event.target.value)

        this.setState({
            message : event.target.value
        })
    }

    incrementArr =(event) =>{
        event.preventDefault()
        const tmp = this.state.comment.concat(this.state.name, this.state.message)

        this.setState({
            comment : tmp
        })
    }

    render(){
        return(
            <div className="container">
                <p>Say something</p>
                <form onSubmit={this.incrementArr}>
                    <input type="text" value={this.state.name} placeholder="Your name"
                    onChange={this.handleName}>
                    </input>
                    <textarea cols="30" rows="10" value={this.state.message} placeholder="Your message"
                    onChange={this.handleMessage}>
                    </textarea>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));