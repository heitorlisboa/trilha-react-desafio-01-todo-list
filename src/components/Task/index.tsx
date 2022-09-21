import * as Toggle from '@radix-ui/react-toggle';
import { CheckCircle, Circle, Trash } from 'phosphor-react';

import styles from './Task.module.css';

import type { TaskData } from '../../types';

type TaskProps = TaskData;

export function Task({ id, title, isComplete }: TaskProps) {
  return (
    <li className={styles.task} data-complete={isComplete}>
      <Toggle.Root id={id} className={styles.toggleButton} pressed={isComplete}>
        {isComplete ? <CheckCircle weight="fill" /> : <Circle weight="bold" />}
      </Toggle.Root>

      <label htmlFor={id}>{isComplete ? <del>{title}</del> : title}</label>

      <button className={styles.deleteButton}>
        <Trash />
      </button>
    </li>
  );
}
