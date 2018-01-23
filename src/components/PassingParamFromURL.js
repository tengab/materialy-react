import React from 'react'

class PassingParamFromURL extends React.Component{
    render(){
        return (
            <div>
                {
                    JSON.stringify(
                        this.props.match.params
                    )
                }
            </div>
        )
    }
}

export default PassingParamFromURL