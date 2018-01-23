import React, {Component} from 'react'
import {database} from '../firebase'

class FirebaseCounter extends Component {
    // initial state of component
    state = {
        counter: null
    }



    componentWillMount() {
        database.ref('/counter').on(
            'value',
            (snapshot) => this.setState({
                counter: snapshot.val()
            })
        )
    }

    onMinusClickHandler = () => {
        if(this.state.counter !== null)
            database.ref('/counter').set(this.state.counter - 1)
    }

    onPlusClickHandler = () => {
        if(this.state.counter !== null)
            database.ref('/counter').set(this.state.counter + 1)
    }

    render() {
        console.log('Render!', this.state)
        return (
            <div>
                <h1>{
                    this.state.counter === null ?
                        'Ładuję...'
                        :
                        this.state.counter
                }
                </h1>
                <button onClick={this.onMinusClickHandler}>
                    -
                </button>
                <button onClick={this.onPlusClickHandler}>
                    +
                </button>
            </div>
        )
    }
}

export default FirebaseCounter
