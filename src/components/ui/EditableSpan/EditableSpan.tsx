import {ChangeEvent, useState} from "react";


export const EditableSpan = () => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState('');

    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        setEditMode(false);

    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ?    <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        : <span onDoubleClick={activateEditMode}>{title}</span>
};
