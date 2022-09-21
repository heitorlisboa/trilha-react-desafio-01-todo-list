import { useState } from 'react';

import './global.css';

import styles from './App.module.css';

import type { TaskData } from './types';

import { TaskForm } from './components/TaskForm';
import { TaskSection } from './components/TaskSection';

import todoLogo from './assets/todo-logo.svg';

export function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  function handleCreateTask(newTask: TaskData) {
    setTasks((prevTasks) => {
      const tasksWithNewTask = [newTask, ...prevTasks];
      return tasksWithNewTask;
    });
  }

  function handleToggleTaskCompletion(taskId: string) {
    setTasks((prevTasks) => {
      const tasksWithModifiedOne = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });
      return tasksWithModifiedOne;
    });
  }

  function handleDeleteTask(taskId: string) {
    setTasks((prevTasks) => {
      const tasksWithoutDeletedOne = prevTasks.filter(
        (task) => task.id !== taskId
      );
      return tasksWithoutDeletedOne;
    });
  }

  return (
    <>
      <header className={styles.header}>
        <h1>
          <img src={todoLogo} alt="ToDo List" />
        </h1>
      </header>

      <main className={styles.mainContent}>
        <TaskForm onCreateTask={handleCreateTask} />
        <TaskSection
          tasks={tasks}
          onToggleTaskCompletion={handleToggleTaskCompletion}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </>
  );
}
