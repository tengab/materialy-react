import React from 'react'

class FetchingJSONFromPublic extends React.Component{
    state = {
        data: null
    }

    componentWillMount(){
        fetch(
            `${process.env.PUBLIC_URL}/database.json`
        )
            .then(response => response.json())
            .then(parsedJSONData => {
                this.setState({
                    data: parsedJSONData
                })
            })
    }

    render(){
        return (
            <div>
                {
                    this.state.data && JSON.stringify(
                        this.state.data
                    )
                }
            </div>
        )
    }
}


export default FetchingJSONFromPublic