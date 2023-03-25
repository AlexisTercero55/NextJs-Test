"use client"
import {createContext, useContext} from 'react';

export const TaskContext = createContext();
// custom hook
export const useTask = ()=>{
    const data = useContext(TaskContext);
    if(!data)
        throw new Error('useTask | TaskContext.Provider is missing.');
    return data;
}

//provider
export const TaskProvider = ({children, ...props}) => {
    const tasks = [];
    return(
        <TaskContext.Provider value={{tasks}}>
            {children}
        </TaskContext.Provider>
    );
}