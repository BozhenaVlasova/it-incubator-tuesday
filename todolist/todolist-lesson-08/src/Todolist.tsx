import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from "./App";
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// title - заголовок
// tasks - список задач

type TodoListPropsType = {
    todolistId: string,
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>

    removeTask: (taskId: string, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTodoListFilter: (filter: FilterValuesType, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (todolistId: string) => void
    changeTaskTitle: (taskId: string, title: string, todolistId: string) => void
    changeTodoListTitle: (title: string, todolistId: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const tasksItems = props.tasks.length
        ? props.tasks.map((task: TaskType) => {
            const onClickRemoveTaskHandler = () => props.removeTask(task.id, props.todolistId)
            const onChangeSetTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(task.id, e.currentTarget.checked, props.todolistId)
            const onChangeSetTaskTitle = (title: string) => props.changeTaskTitle(task.id, title, props.todolistId)
            const isDoneClasses = task.isDone ? "isDone" : "notIsDone"
            return (
                <div key={task.id}>
                    <Checkbox
                        checked={task.isDone}
                        onChange={onChangeSetTaskStatus}
                        size={'small'}
                    />
                    <EditableSpan title={task.title} classes={isDoneClasses} changeTitle={onChangeSetTaskTitle}/>
                    <IconButton
                        color={'primary'}
                        size={'small'}>
                        <HighlightOffIcon onClick={onClickRemoveTaskHandler} />
                    </IconButton>
                </div>
            )
        })
        : <span>Tasks list is empty</span>

    const addTask = (title: string) => {
        props.addTask(title, props.todolistId)
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodoListTitle(title, props.todolistId)
    }

    const getOnClickSetFilterHandler = (filter: FilterValuesType) => () => props.changeTodoListFilter(filter, props.todolistId)

    const onClickRemoveTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} classes={''} changeTitle={changeTodolistTitle} />
                <IconButton
                    color={'primary'}
                    size={'small'}>
                    <HighlightOffIcon onClick={onClickRemoveTodolistHandler} />
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <Button
                    sx={{mr: '2px'}}
                    variant='contained'
                    color={props.filter === "all" ? "secondary" : 'primary'}
                    size='small'
                    disableElevation
                    onClick={getOnClickSetFilterHandler("all")}>All
                </Button>
                <Button
                    sx={{mr: '2px'}}
                    variant='contained'
                    color={props.filter === "active" ? "secondary" : 'primary'}
                    size='small'
                    disableElevation
                    onClick={getOnClickSetFilterHandler("active")}>Active
                </Button>
                <Button
                    variant='contained'
                    color={props.filter === "completed" ? "secondary" : 'primary'}
                    size='small'
                    disableElevation
                    onClick={getOnClickSetFilterHandler("completed")}>Completed
                </Button>
            </div>
        </div>
    );
};

export default TodoList;