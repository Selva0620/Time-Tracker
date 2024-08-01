import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

type Task = {
    name: string;
    description: string;
    project: string;
};

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<Task>({ name: '', description: '', project: '' });
    const [editIndex, setEditIndex] = useState<number | null>(null);

    // List of projects
    const projects = ['Sample Project 1', 'Sample Project 2', 'Sample Project 3'];

    const handleAddTask = () => {
        if (!newTask.name || !newTask.description || !newTask.project) {
            toast.error('All fields are required.');
            return;
        }

        if (editIndex !== null) {
            const updatedTasks = tasks.map((task, index) =>
                index === editIndex ? newTask : task
            );
            setTasks(updatedTasks);
            toast.success('Task updated successfully!');
            setEditIndex(null);
        } else {
            setTasks([...tasks, newTask]);
            toast.success('Task added successfully!');
        }

        setNewTask({ name: '', description: '', project: '' });
    };

    const handleEdit = (index: number) => {
        setNewTask(tasks[index]);
        setEditIndex(index);
        toast.info('Editing task.');
    };

    const handleDelete = (index: number) => {
        const filteredTasks = tasks.filter((_, i) => i !== index);
        setTasks(filteredTasks);
        toast.success('Task deleted successfully!');
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className='dash-section p-4'>
                <h1 className="text-2xl font-bold mb-4">Tasks</h1>
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={newTask.name}
                        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                        className="border p-2 rounded flex-1"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        className="border p-2 rounded flex-1"
                    />
                    <select
                        value={newTask.project}
                        onChange={(e) => setNewTask({ ...newTask, project: e.target.value })}
                        className="border p-2 rounded flex-1"
                    >
                        <option value="" disabled>Select Project</option>
                        {projects.map((project) => (
                            <option key={project} value={project}>{project}</option>
                        ))}
                    </select>
                    <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded flex-shrink-0">
                        {editIndex !== null ? 'Update Task' : 'Add Task'}
                    </button>
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className="p-4 mb-4 border rounded shadow-sm">
                            <h3 className="font-bold text-lg">{task.name}</h3>
                            <p className="text-gray-700">{task.description}</p>
                            <p className="text-gray-500">Project: {task.project}</p>
                            <div className="mt-2 flex justify-end gap-2">
                                <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white p-1 rounded">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white p-1 rounded">
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <ToastContainer />
        </>
    );
};

export default Tasks;
