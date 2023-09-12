import {EditableSpan} from "@/components/ui/EditableSpan/EditableSpan";
import {AddItemForm} from "@/components/ui/AddItemForm/AddItemForm";
import {Task} from "@/components/Page/Todolists/Todolist/Task/Task";
import {SuperButton} from "@/components/ui/SuperButton/SuperButton";


export const Todolist = () => {
    return (
        <div>
            <h3>
                <EditableSpan/>
            </h3>
            <AddItemForm/>

            <div>
                <Task/>
            </div>
            <div>
                <SuperButton>All</SuperButton>
                <SuperButton>Active</SuperButton>
                <SuperButton>Completed</SuperButton>
            </div>
        </div>
    );
};

