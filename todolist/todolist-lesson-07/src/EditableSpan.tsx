import React, {ChangeEvent, FC, useState, KeyboardEvent} from 'react';
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string,
    classes: string,
    changeTitle: (title: string) => void
}

const EditableSpan: FC<EditableSpanPropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.title)

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        props.changeTitle(title)
    }

    const onChangeSetLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyDownSetNewTitle = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && offEditMode()
    }

    return (
        editMode
            ? <TextField
                variant={'standard'}
                value={title}
                autoFocus
                onBlur={offEditMode}
                onChange={onChangeSetLocalTitleHandler}
                onKeyDown={onKeyDownSetNewTitle}
            />
            : <span className={props.classes}
                    onDoubleClick={onEditMode}
            >
                {props.title}
        </span>
    );
};

export default EditableSpan;