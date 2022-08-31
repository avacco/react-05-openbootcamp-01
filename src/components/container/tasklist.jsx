import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TasklistComponent = () => {
  
  const defaultTask = new Task('Ejemplo', 'Descripción por defecto',false, LEVELS.NORMAL);
  
  const changeState = (id) => {
    console.log('TODO: Cambiar estado de una tarea');
  }

  return (
    <div>
      <div>
        <h1>Tus tareas:</h1>
      </div>
      <TaskComponent task={defaultTask}/>
    </div>
  );
};

export default TasklistComponent;
