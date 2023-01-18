import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task ('Example', 'Default description', false, LEVELS.NORMAL)

    const [task, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);
    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [task]);

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estad de una tarea')
    }

    return (
        <div>
            <div>
                <h1> Your Task: </h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
