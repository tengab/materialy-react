import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import {connect} from 'react-redux'
import {toggleRect} from "../../state/rectangle";

class ReduxRectangle extends React.Component {


    render() {


        return (
            <div>
                {this.props.isRectVisible ?
                    <div style={{
                        width: 200,
                        height: 200,
                        backgroundColor: 'red'
                    }}></div>
                    :
                    null

                }
                <RaisedButton
                    label={this.props.isRectVisible ? 'POKAZ' : 'UKRYJ'}
                    onClick={()=>this.props.handleToggleRect()}
                />
                <RaisedButton
                    label='wlacz miganie'
                    onClick={()=>setInterval(this.props.handleToggleRect, 1000)}
                />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    isRectVisible: state.rectangle.isRectVisible
})

const mapDispatchToProps = dispatch => ({
    handleToggleRect: () => dispatch(toggleRect())

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxRectangle)

