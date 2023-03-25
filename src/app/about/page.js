"use client"
import { useTask } from '@/context/taskContext';

const Page = () => {

    const data1 = useTask();

    return (
        <div>
            <ul>
                {/* {data1.map((n)=>(<li key={Math.random()}>{n}</li>))} */}
            </ul>
        </div>
    );
}

export default Page;
