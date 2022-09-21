import './global.css';

import styles from './App.module.css';

import { TaskForm } from './components/TaskForm';
import { TaskSection } from './components/TaskSection';

import todoLogo from './assets/todo-logo.svg';

export function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          <img src={todoLogo} alt="ToDo List" />
        </h1>
      </header>

      <main className={styles.mainContent}>
        <TaskForm />
        <TaskSection />
      </main>
    </>
  );
}
