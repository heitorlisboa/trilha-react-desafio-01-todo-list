import { ClipboardText } from 'phosphor-react';

import styles from './TaskSection.module.css';

import type { TaskData } from '../../types';

import { Task } from '../Task';

type TaskSectionProps = {
  tasks: TaskData[];
  onToggleTaskCompletion: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
};

export function TaskSection({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
}: TaskSectionProps) {
  const taskListIsEmpty = tasks.length === 0;
  const numberOfTasksCompleted = tasks.reduce((accumulator, currentTask) => {
    if (currentTask.isComplete) return accumulator + 1;
    else return accumulator;
  }, 0);

  return (
    <section className={styles.container} aria-label="Tarefas">
      <header className={styles.header}>
        <span>
          Tarefas criadas <span className={styles.counter}>{tasks.length}</span>
        </span>
        <span>
          Concluídas{' '}
          <span className={styles.counter}>
            {taskListIsEmpty
              ? 0
              : `${numberOfTasksCompleted} de ${tasks.length}`}
          </span>
        </span>
      </header>

      {taskListIsEmpty ? (
        <div className={styles.taskListPlaceholder}>
          <ClipboardText weight="light" />
          <div className={styles.taskListPlaceholderText}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        <ul aria-label="Lista de tarefas" className={styles.taskList}>
          {tasks.map(({ id, title, isComplete }, index) => (
            <Task
              key={id}
              id={id}
              title={title}
              isComplete={isComplete}
              onToggleTaskCompletion={onToggleTaskCompletion}
              onDeleteTask={onDeleteTask}
              aria-setsize={tasks.length}
              aria-posinset={index + 1}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
