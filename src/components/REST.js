import React from 'react'

class REST extends React.Component{
    state = {
        data: 'Ładowanie...'
    }

    componentWillMount(){
        fetch('https://ad-snadbox.firebaseio.com/.json')
            .then(response => response.json())
            .then(dataFromDatabase => this.setState({
                data: dataFromDatabase
            }))
    }

    render() {
        return (
            <div>{this.state.data}</div>
        )
    }
}

export default REST