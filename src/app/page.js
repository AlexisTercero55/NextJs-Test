"use client"
import { useTask } from '@/context/taskContext';
import { TaskCard } from '@/components/TeaskCard';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const tasks = useTask();
  return (
    <main className={styles.main}>

      <div>
        
        <div className="task-list">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        
      </div>

    </main>
  )
}