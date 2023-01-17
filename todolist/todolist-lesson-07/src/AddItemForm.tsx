import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

const AddItemForm: FC<AddItemFormPropsType> = (props) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onChangeSetLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTitle(e.currentTarget.value)
    }
    const errorMessageStyles = {color: "hotpink", marginTop: "0", marginBottom: "0"}
    const errorMessage = error && <p style={errorMessageStyles}>Please, enter item title</p>
    const errorInputClasses = error ? "inputError" : undefined

    const onClickAddItemToTodoListHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }

    const onKeyDownAddItemToTodoListHandler =
        (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onClickAddItemToTodoListHandler()

    return (
        <div>
            <TextField
                value={title}
                onChange={onChangeSetLocalTitleHandler}
                onKeyDown={onKeyDownAddItemToTodoListHandler}
                variant={'outlined'}
                size={'small'}
                label={'Enter title'}
                error={error}
                helperText={error && 'Please, enter item title'}
            />

            <Button
                style={{'marginTop': '5px'}}
                variant='contained'
                startIcon={<DataSaverOnIcon />}
                color={'success'}
                size={'small'}
                onClick={onClickAddItemToTodoListHandler}>
                Add
            </Button>
        </div>
    );
};

export default AddItemForm;