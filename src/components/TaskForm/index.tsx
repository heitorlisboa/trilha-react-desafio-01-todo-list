import { PlusCircle } from 'phosphor-react';

import styles from './TaskForm.module.css';

export function TaskForm() {
  return (
    <form className={styles.taskForm}>
      <label htmlFor="task-input" className="sr-only">
        Adicione uma nova tarefa
      </label>
      <input
        id="task-input"
        type="text"
        placeholder="Adicione uma nova tarefa"
      />

      <button type="submit">
        Criar <PlusCircle weight="bold" />
      </button>
    </form>
  );
}
