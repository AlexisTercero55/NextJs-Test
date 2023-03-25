"use client"
import {createContext, useContext, useState} from 'react';
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();
// custom hook
export const useTask = ()=>{
    const data = useContext(TaskContext);
    if(!data)
        throw new Error('useTask | TaskContext.Provider is missing.');
    return data;
}

const initialState = [{    "id": 1,    "title": "Complete project proposal",    "description": "Write a proposal for the new project and submit it by the deadline."  },  {    "id": 2,    "title": "Meet with client",    "description": "Schedule a meeting with the client to discuss the project requirements and scope."  },  {    "id": 3,    "title": "Design wireframes",    "description": "Create wireframes for the user interface and get approval from the client."  },  {    "id": 4,    "title": "Develop frontend",    "description": "Develop the frontend of the application using ReactJS and styled components."  },  {    "id": 5,    "title": "Develop backend",    "description": "Develop the backend of the application using NodeJS and MongoDB."  },  {    "id": 6,    "title": "Write tests",    "description": "Write automated tests for both frontend and backend to ensure quality and prevent regressions."  },  {    "id": 7,    "title": "Deploy to staging",    "description": "Deploy the application to the staging environment for testing and feedback."  },  {    "id": 8,    "title": "Fix bugs and issues",    "description": "Fix any bugs and issues found during testing and make necessary improvements."  },  {    "id": 9,    "title": "Deploy to production",    "description": "Deploy the application to the production environment after all issues have been resolved."  },  {    "id": 10,    "title": "Document the project",    "description": "Create documentation for the project including the codebase, API endpoints, and deployment instructions."  }];

//provider
export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState(initialState);
    const newTask = (title,description) =>{
        setTasks([...tasks, {
            id: uuid(),
            title,
            description,
        }])
    }
    return(
        <TaskContext.Provider value={{tasks, newTask}}>
            {children}
        </TaskContext.Provider>
    );
}