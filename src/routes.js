import Counter from './components/Counter'
import DefaultPropsComponent from './components/DefaultPropsComponent'
import FetchingJSONFromPublic from './components/FetchingJSONFromPublic'
import PassingParamFromURL from './components/PassingParamFromURL'
import REST from './components/REST'
import RestToDoList from './components/RestToDoList'
import FirebaseComponent from './components/FirebaseComponent'
import FirebaseCounter from './components/FirebaseCounter'
import FirebaseToDo from './components/FirebaseToDo'
import FirebaseLogIn from './components/FirebaseLogIn'
import ReduxToDo from './components/ReduxToDo'
import ReduxSimpleText from './components/ReduxSimpleText'
import ReduxRectangle from "./components/ReduxRectangle/";

const routes = [
    {
        path: '/component/counter', // passed to Route component as path props
        text: 'Counter', // text to be displayed on SideBars MenuItem
        component: Counter // component to be passed as Routes component props
    },
    {
        path: '/component/default-props',
        text: 'defaultProps example',
        component: DefaultPropsComponent
    },
    {
        path: '/component/fetch-public',
        text: 'Fetching JSON from public folder',
        component: FetchingJSONFromPublic
    },
    {
        path: '/component/passing-params/:uid/:secondParam',
        to: '/component/passing-params/12345/someRandomString', // if you want to be redirected to different path than in path above
        text: 'Passing params from URL',
        component: PassingParamFromURL
    },
    {
        path: '/component/rest',
        text: 'Simple REST GET data',
        component: REST
    },
    {
        path: '/component/rest-to-do',
        text: 'REST To Do List',
        component: RestToDoList
    },
    {
        path: '/component/firebase',
        text: 'Firebase Basics',
        component: FirebaseComponent
    },
    {
        path: '/component/firebase-counter',
        text: 'Firebase Counter',
        component: FirebaseCounter
    },
    {
        path: '/component/firebase-to-do',
        text: 'Firebase To Do',
        component: FirebaseToDo
    },
    {
        path: '/component/firebase-login',
        text: 'Firebase Login',
        component: FirebaseLogIn
    },
    {
        path: '/component/redux-to-do',
        text: 'Redux ToDo',
        component: ReduxToDo
    },
    {
        path: '/component/redux-simple-text',
        text: 'Redux Simple Text',
        component: ReduxSimpleText
    },
    {
        path: '/component/redux-rectangle',
        text: 'Redux Rectangle',
        component: ReduxRectangle
    }

]

export default routes