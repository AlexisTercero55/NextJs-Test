"use client"
import {createContext} from 'react';

export const TaskContext = createContext();
//provider
export const TaskProvider = ({children, ...props}) => {
    const tasks = [11,2,2,3,1,3];
    return(
        <TaskContext.Provider value={tasks}>
            {children}
        </TaskContext.Provider>
    );
}