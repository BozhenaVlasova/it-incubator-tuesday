import {v1} from "uuid";
import {FilterValuesType, TodolistType} from "../App";
import {
    AddTodolistAC,
    AddTodolistAT, changeTodoListFilterAC,
    changeTodoListFilterAT, changeTodoListTitleAC,
    changeTodoListTitleAT, RemoveTodolistAC,
    RemoveTodolistAT,
    todolistsReducer
} from "./todolists-reducer";
import {REMOVE_TODOLIST} from "./constans";

test('correct todolist should be removed', () => {
    //
    let todolistId1 = v1();
    let todolistId2 = v1();
    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    //
    // const action: RemoveTodolistAT = {
    //     type: REMOVE_TODOLIST,
    //     id: todolistId1
    // }
    const endState = todolistsReducer(startState, RemoveTodolistAC(todolistId1))
    //
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
    //
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    //
    const action: AddTodolistAT = {
        type: "ADD-TODOLIST",
        title: newTodolistTitle
    }
    const endState = todolistsReducer(startState, AddTodolistAC(newTodolistTitle))
    //
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
});

test('correct todolist should change its name', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action: changeTodoListTitleAT = {
        type: "CHANGE-TODOLIST-TITLE",
        title: newTodolistTitle,
        id: todolistId2
    }
    const endState = todolistsReducer(startState, changeTodoListTitleAC(newTodolistTitle, todolistId2));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newFilter: FilterValuesType = "completed";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const action: changeTodoListFilterAT = {
        type: "CHANGE-TODOLIST-FILTER",
        filter: newFilter,
        id: todolistId2
    }

    const endState = todolistsReducer(startState, changeTodoListFilterAC(newFilter, todolistId2));

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});
