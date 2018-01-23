import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import {connect} from 'react-redux'
import {changeText} from '../../state/text'

class ReduxSimpleText extends Component {
    state = {
        currentText: ''
    }

    render() {
        return (
            <div>
                <h1>{this.props.displayedText}</h1>
                <TextField
                    onChange={
                        (ev, val) => this.setState({
                            currentText: val
                        })
                    }
                    value={this.state.currentText}
                    fullWidth={true}
                    name="currentText"
                />
                <RaisedButton
                    fullWidth={true}
                    label={'Change text!'}
                    onClick={() => this.props.handleButtonClick(this.state.currentText)}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    displayedText: state.text.text
})

const mapDispatchToProps = dispatch => ({
    handleButtonClick: (newText) => dispatch(changeText(newText))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxSimpleText)
