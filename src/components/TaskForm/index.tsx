import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidV4 } from 'uuid';

import styles from './TaskForm.module.css';

import type { TaskData } from '../../types';

type TaskFormProps = {
  onCreateTask: (newTask: TaskData) => void;
};

export function TaskForm({ onCreateTask }: TaskFormProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleNewTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    // Validating the task title
    const newTaskTitleIsEmpty = newTaskTitle.trim() === '';
    if (newTaskTitleIsEmpty) return;

    // Creating the task
    onCreateTask({
      id: uuidV4(),
      title: newTaskTitle,
      isComplete: false,
    });

    // Clearing the input
    setNewTaskTitle('');
  }

  return (
    <form className={styles.taskForm} onSubmit={handleCreateTask}>
      <label htmlFor="task-input" className="sr-only">
        Adicione uma nova tarefa
      </label>
      <input
        id="task-input"
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskTitle}
        onChange={handleNewTaskTitleChange}
      />

      <button type="submit">
        Criar <PlusCircle weight="bold" />
      </button>
    </form>
  );
}
