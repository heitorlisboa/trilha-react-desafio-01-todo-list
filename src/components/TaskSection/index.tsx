import { ClipboardText } from 'phosphor-react';

import styles from './TaskSection.module.css';

import type { TaskData } from '../../types';

import { Task } from '../Task';

const taskList: TaskData[] = [
  {
    id: '1',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,
  },
  {
    id: '2',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,
  },
  {
    id: '3',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,
  },
  {
    id: '4',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: true,
  },
  {
    id: '5',
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: true,
  },
];

export function TaskSection() {
  return (
    <section className={styles.container} aria-label="Tarefas">
      <header className={styles.header}>
        <span>
          Tarefas criadas <span className={styles.counter}>5</span>
        </span>
        <span>
          Concluídas <span className={styles.counter}>2 de 5</span>
        </span>
      </header>

      <ul aria-label="Lista de tarefas" className={styles.taskList}>
        {taskList.map(({ id, title: content, isComplete }) => (
          <Task id={id} title={content} isComplete={isComplete} />
        ))}
      </ul>
      {/* <div className={styles.taskListPlaceholder}>
        <ClipboardText weight='light' />
        <div className={styles.taskListPlaceholderText}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div> */}
    </section>
  );
}
