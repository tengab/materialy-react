import React, {Component} from 'react'

const databaseUrl = 'https://ad-snadbox.firebaseio.com/JFDDL3/restToDo/grzegorz/'

class RestToDoList extends Component {
    state = {
        list: null,
        newTaskName: '',
        currentlyEditedTaskId: null,
        currentlyEditedTaskName: ''
    }

    componentWillMount() {
        this.getData()
    }

    getData = () => {
        fetch(databaseUrl + 'list/.json')
            .then(response => response.json())
            .then(dataFromDb => this.setState({
                list: dataFromDb,
                newTaskName: '',
                currentlyEditedTaskId: null,
                currentlyEditedTaskName: ''
            }))
    }

    deleteTask = (taskId) => {
        fetch(
            databaseUrl + 'list/' + taskId + '/.json',
            {method: 'DELETE'}
        )
            .then(() => this.getData())
    }

    handleInputChange = (e) => this.setState({
        newTaskName: e.target.value
    })

    handleButtonClick = () => {
        const newTaskObj = {name: this.state.newTaskName}

        fetch(
            databaseUrl + 'list/.json',
            {method: 'POST', body: JSON.stringify(newTaskObj)}
        )
            .then(() => this.getData())
            .catch((err) => alert('Coś poszło nie tak!'))
    }

    handleTaskNameClick = (taskId, taskName) => {
        this.setState({
            currentlyEditedTaskId: taskId,
            currentlyEditedTaskName: taskName
        })
    }

    handelEditInputChange = (e) => this.setState({
        currentlyEditedTaskName: e.target.value
    })

    handleSaveButtonClick = () => {
        const newTaskObj = {name: this.state.currentlyEditedTaskName}

        fetch(
            databaseUrl + 'list/' + this.state.currentlyEditedTaskId + '/.json',
            {method: 'PATCH', body: JSON.stringify(newTaskObj)}
        )
            .then(() => this.getData())
            .catch((err) => alert('Coś z edycją poszło nie tak!'))
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        value={this.state.newTaskName}
                    />
                    <button onClick={this.handleButtonClick}>
                        Zapisz!
                    </button>
                </div>
                {
                    Object.entries(this.state.list || {})
                        .map(([key, task]) => (
                            <Task
                                key={key}
                                taskId={key}
                                task={task}
                                handleTaskNameClick={this.handleTaskNameClick}
                                handelEditInputChange={this.handelEditInputChange}
                                handleSaveButtonClick={this.handleSaveButtonClick}
                                currentlyEditedTaskName={this.state.currentlyEditedTaskName}
                                deleteTask={this.deleteTask}
                                isEdited={this.state.currentlyEditedTaskId === key}
                            />
                        ))
                }
            </div>
        )
    }
}

const Task = ({taskId, task, handleTaskNameClick, handelEditInputChange, currentlyEditedTaskName, isEdited, handleSaveButtonClick, deleteTask}) => (
    <div>
        <span onClick={() => handleTaskNameClick(taskId, task.name)}>
            {
                isEdited ?
                    <span>
                        <input
                            onChange={handelEditInputChange}
                            value={currentlyEditedTaskName}
                        />
                        <button onClick={handleSaveButtonClick}>
                            Zapisz
                        </button>
                    </span>
                    :
                    task.name
            }
        </span>
        <button onClick={() => deleteTask(taskId)}>
            Usuń
        </button>
    </div>
)

export default RestToDoList