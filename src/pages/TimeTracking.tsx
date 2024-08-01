import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { FaPlay, FaPause } from 'react-icons/fa';

type Task = {
    name: string;
    project: string;
};

const TimeTracking: React.FC = () => {
    const [tasks] = useState<Task[]>([{ name: 'Sample Task', project: 'Sample Project' }]);
    const [activeTask, setActiveTask] = useState<Task | null>(null);
    const [timer, setTimer] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: number | null = null;

        if (activeTask && !isPaused) {
            intervalId = window.setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        } else {
            if (intervalId) {
                window.clearInterval(intervalId);
            }
        }

        return () => {
            if (intervalId) {
                window.clearInterval(intervalId);
            }
        };
    }, [activeTask, isPaused]);

    const handleStart = (task: Task) => {
        setActiveTask(task);
        setTimer(0);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleResume = () => {
        setIsPaused(false);
    };

    const handleStop = () => {
        setActiveTask(null);
        setIsPaused(false);
        // Save the tracked time to the backend
    };

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className='dash-section p-4'>
                <h1 className="text-2xl font-bold mb-4">Time Tracking</h1>
                <div className="mb-4">
                    {activeTask ? (
                        <div className='track-card p-4 border rounded shadow-md'>
                            <h3 className="text-xl font-bold">{activeTask.name}</h3>
                            <p className="text-lg">{formatTime(timer)}</p>
                            <div className="flex items-center mt-2 gap-2">
                                {isPaused ? (
                                    <FaPlay onClick={handleResume} className="text-green-500 cursor-pointer text-xl" />
                                ) : (
                                    <FaPause onClick={handlePause} className="text-yellow-500 cursor-pointer text-xl" />
                                )}
                                <button onClick={handleStop} className="bg-red-500 text-white p-2 rounded">
                                    delete
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500">No active task</p>
                    )}
                </div>
                <ul className="space-y-4">
                    {tasks.map((task, index) => (
                        <li key={index} className="track-card p-4 border rounded shadow-md">
                            <h3 className="text-xl font-bold">{task.name}</h3>
                            <p className="text-gray-500">Project: {task.project}</p>
                            <button onClick={() => handleStart(task)} className="bg-blue-500 text-white p-2 rounded mt-2">
                                Start Timer
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TimeTracking;
