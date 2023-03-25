import { useRouter } from "next/navigation";

export function TaskCard({ task }) {
    const router = useRouter();
    return (
      <div 
      style={{background:'#114477',
      color:'#fff',
    }}
      className="task-card">
        <h2>{task.title}</h2>
        <button
        onClick={(e)=>router.push(`/edit/${task.id}`)}>Delete</button>
        <p>{task.description}</p>
        <span>ID: {task.id}</span>
      </div>
    );
  }