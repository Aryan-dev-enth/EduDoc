'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Contribute = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8000/api/notes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setSuccessMessage(response.data.message);
            setTitle('');
            setContent('');
            setFile(null);
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Something went wrong. Please try again later.');
            }
        }
    };

    return (
        <div className="container mx-auto mt-8 px-4">
            <h2 className="text-3xl font-bold mb-4">Contribute a Note</h2>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 p-2 w-full border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700">Content:</label>
                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required className="mt-1 p-2 w-full border border-gray-300 rounded"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-gray-700">Upload PDF File:</label>
                    <input type="file" id="file" onChange={handleFileChange} accept=".pdf" className="mt-1 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            </form>
            {errorMessage && <div className="text-red-600 mt-4">{errorMessage}</div>}
            {successMessage && <div className="text-green-600 mt-4">{successMessage}</div>}
        </div>
    );
};

export default Contribute;
