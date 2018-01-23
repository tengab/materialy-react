import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import {lime500} from 'material-ui/styles/colors';

import {database} from '../firebase'

const styles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

const Task = (props) => (
    <ListItem
        primaryText={props.taskName}
        rightIcon={
            <ActionDelete
                onClick={() => props.deleteTask(props.taskId)}
            />
        }
    />
)

class FirebaseToDo extends React.Component {
    state = {
        tasks: null,
        newTaskName: 'zupa'
    }

    componentWillMount() {
        database.ref('/firebaseToDoList')
            .on('value', (snapshot) => {

                console.log('Dane : ', snapshot.val())

                const tasksArray1 = Object.entries(
                    snapshot.val() || {}
                )

                console.log('Po Object.entries: ', tasksArray1)

                const tasksArray2 = tasksArray1.map(([key, value]) => {
                    value.key = key
                    return value
                })

                console.log('Po .map : ', tasksArray2)

                this.setState({
                    tasks: tasksArray2
                })
            })
    }

    deleteTask = (taskId) => {
        database.ref(`/firebaseToDoList/${taskId}`).remove()
    }

    addTask = () => {
        if(!this.state.newTaskName){
            alert('Nie można zapisać pustego taska!')
            return
        }

        database.ref('/firebaseToDoList')
            .push({
                name: this.state.newTaskName
            })

        this.setState({
            newTaskName: ''
        })
    }

    render() {
        return (
            <Paper style={styles}>
                <TextField
                    value={this.state.newTaskName}
                    onChange={(e, value)=> this.setState({newTaskName: value})}
                    hintText={"Nowe zadanie"}
                    fullWidth={true}
                    underlineFocusStyle={{borderColor: lime500}}
                />
                <RaisedButton
                    onClick={this.addTask}
                    label={"Dodaj!"}
                    primary={true}
                    fullWidth={true}
                />
                <List style={{textAlign: 'left'}}>
                    {
                        this.state.tasks
                        &&
                        this.state.tasks.map((task) => (
                            <Task
                                key={task.key}
                                taskName={task.name}
                                taskId={task.key}
                                deleteTask={this.deleteTask}
                            />
                        ))
                    }
                </List>
            </Paper>
        )
    }
}

export default FirebaseToDo