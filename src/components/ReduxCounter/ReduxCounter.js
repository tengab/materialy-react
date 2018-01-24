import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {incCounter} from "../../state/reduxCounter";
import {decCounter} from "../../state/reduxCounter";
import {connect} from 'react-redux'

class ReduxCounter extends React.Component {


    render() {
        return (

            <div>
                <div>{this.props.incrementation}</div>
                <RaisedButton
                    onClick={() => this.props.incAfterClick()}>
                    +
                </RaisedButton>
                <RaisedButton
                    onClick={() => this.props.decAfterClick()}>
                    -
                </RaisedButton>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    incrementation: state.reduxCounter.incrementation
})

const mapDispatchToProps = dispatch => ({
    incAfterClick: () => dispatch(incCounter()),
    decAfterClick: () => dispatch(decCounter())

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCounter)