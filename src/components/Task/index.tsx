import * as Toggle from '@radix-ui/react-toggle';
import { CheckCircle, Circle, Trash } from 'phosphor-react';

import styles from './Task.module.css';

import type { TaskData } from '../../types';

type TaskProps = TaskData & {
  onToggleTaskCompletion: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  'aria-setsize': number;
  'aria-posinset': number;
};

export function Task({
  id,
  title,
  isComplete,
  onToggleTaskCompletion,
  onDeleteTask,
  ...ariaAttrs
}: TaskProps) {
  function handleToggleTaskCompletion() {
    onToggleTaskCompletion(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <li className={styles.task} data-complete={isComplete} {...ariaAttrs}>
      <Toggle.Root
        className={styles.toggleButton}
        pressed={isComplete}
        onPressedChange={handleToggleTaskCompletion}
        aria-label="Concluir tarefa"
      >
        {isComplete ? <CheckCircle weight="fill" /> : <Circle weight="bold" />}
      </Toggle.Root>

      <p>{isComplete ? <del>{title}</del> : title}</p>

      <button
        className={styles.deleteButton}
        onClick={handleDeleteTask}
        aria-label="Deletar tarefa"
      >
        <Trash />
      </button>
    </li>
  );
}
