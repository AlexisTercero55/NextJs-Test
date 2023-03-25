"use client"
import { useState } from 'react';
import { useTask } from '@/context/taskContext';
import { TaskCard } from '@/components/TeaskCard';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [task, settask] = useState();
  const {tasks,newTask} = useTask();

  /** The square brackets around 'e.target.name' are necessary because the property name is determined dynamically at runtime based on the name attribute of the input field that was changed. The square brackets tell JavaScript to evaluate the expression inside the brackets and use its value as the property name. */
  const handleChange = (e)=>{
    settask({...task, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    newTask(task.title, task.description)
  }

  return (
    <main className={styles.main}>

      <section>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" 
          name='title'
          onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name={'description'} onChange={handleChange} />
        </label>
        <button type="submit">Add Task</button>
      </form>
      </section>

      <div>
        <button>new task</button>
        
        <div className="task-list">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        
      </div>

    </main>
  )
}