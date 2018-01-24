import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {fetchData} from "../../state/asyncActions";

class ReduxAsyncActions extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.randomUserData ?
                        this.props.randomUserData.name.first
                        :
                        'NIE PODANO IMIENIA'
                    }


                    {this.props.randomUserData ?
                        this.props.randomUserData.name.last
                        :
                        "NIE PODANO NAZWISKA"
                    }
                </div>
                <RaisedButton
                    label='Fetch Data'
                    onClick={this.props.getRandomUserData}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    randomUserData: state.asyncActions.randomUserData
})

const mapDispatchToProps = (dispatch) => ({
    getRandomUserData: () => dispatch(fetchData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxAsyncActions)