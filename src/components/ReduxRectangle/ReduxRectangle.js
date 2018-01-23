import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import {connect} from 'react-redux'

class ReduxRectangle extends React.Component {

    state = {
        isRectVisible: true
    }

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
                        <div>

                        </div>
                        }

                <RaisedButton
                    label='TOGGLE'
                />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    isRectVisible: state.isRectVisible
})

const mapDispatchToProps = state => ({
    //TU SKONCZYLEM

})

export default connect(
    mapDispatchToProps,
    mapDispatchToProps
)(ReduxRectangle)

