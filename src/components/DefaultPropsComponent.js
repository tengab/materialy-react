import React from 'react'

// const DefaultPropsComponent = (props) => (
//     <div>{props.name}</div>
// )
//
// DefaultPropsComponent.defaultProps = {
//     name: 'Tadeusz'
// }

class DefaultPropsComponent extends React.Component{
    static defaultProps = {
        name: 'Tadeusz'
    }

    render(){
        return (
            <div>{this.props.name}</div>
        )
    }
}

// the same as with function will work with class

// DefaultPropsComponent.defaultProps = {
//     name: 'Tadeusz'
// }

export default DefaultPropsComponent