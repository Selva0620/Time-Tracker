import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

type Project = {
    name: string;
    description: string;
};

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [newProject, setNewProject] = useState({ name: '', description: '' });
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleAddProject = () => {
        if (!newProject.name || !newProject.description) {
            toast.error('Both name and description are required.');
            return;
        }

        if (editIndex !== null) {
            const updatedProjects = projects.map((project, index) =>
                index === editIndex ? newProject : project
            );
            setProjects(updatedProjects);
            toast.success('Project updated successfully!');
            setEditIndex(null);
        } else {
            setProjects([...projects, newProject]);
            toast.success('Project added successfully!');
        }

        setNewProject({ name: '', description: '' });
    };

    const handleEdit = (index: number) => {
        setNewProject(projects[index]);
        setEditIndex(index);
        toast.info('Editing project.');
    };

    const handleDelete = (index: number) => {
        const filteredProjects = projects.filter((_, i) => i !== index);
        setProjects(filteredProjects);
        toast.success('Project deleted successfully!');
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className='dash-section p-4'>
                <h1 className="text-2xl font-bold mb-4">Projects</h1>
                <div className="mb-4 flex flex-col sm:flex-row">
                    <input
                        type="text"
                        placeholder="Project Name"
                        value={newProject.name}
                        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                        className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                        className="border p-2 rounded mb-2 sm:mb-0 sm:mr-2"
                    />
                    <button onClick={handleAddProject} className="bg-blue-500 text-white p-2 rounded">
                        {editIndex !== null ? 'Update Project' : 'Add New Project'}
                    </button>
                </div>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index} className="pro-card p-4 mb-4 border rounded">
                            <h3 className="font-bold">{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="mt-2 flex justify-end">
                                <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white p-1 rounded mr-2">
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

export default Projects;
