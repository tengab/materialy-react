import React from 'react'
import LogIn from './LogIn'

import {auth, googleProvider} from '../../firebase'

class FirebaseLogIn extends React.Component {
    state = {
        email: '',
        password: '',
        isLoggedIn: false
    }

    componentWillMount(){
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log('Zalogowani!')
                this.setState({
                    isLoggedIn: true
                })
            }else{
                console.log('Wylogowani!')
                this.setState({
                    isLoggedIn: false
                })
            }
        })
    }

    onEmailChange = (event, value) => {
        this.setState({
            email: value
        })
    }
    onPasswordChange = (event, value) => {
        this.setState({
            password: value
        })
    }

    onLogInClick = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => console.log('Zalogowano!'))
    }

    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
    }

    render() {
        return (
            this.state.isLoggedIn ?
                <div>
                    Cześć zalogowany userze!
                    <button onClick={()=> auth.signOut()}>
                        Wyloguj
                    </button>
                </div>
                :
                <LogIn
                    onEmailChange={this.onEmailChange}
                    onPasswordChange={this.onPasswordChange}
                    onLogInClick={this.onLogInClick}
                    onLogInByGoogleClick={this.onLogInByGoogleClick}
                />
        )
    }
}

export default FirebaseLogIn