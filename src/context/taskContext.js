"use client"
import {createContext} from 'react';

const TaskContext = createContext();
//provider
export const TaskProvider = ({children, ...props}) => {
    const tasks = [];
    return(
        <TaskContext.Provider value={tasks}>
            {children}
        </TaskContext.Provider>
    );
}