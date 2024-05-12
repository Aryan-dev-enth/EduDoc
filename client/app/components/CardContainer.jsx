'use client'
import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const CardContainer = ({ isAdmin }) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = isAdmin ? '/adminNotes' : '/userNotes';
      try {
        const response = await axios.get(`http://localhost:8000/api${endpoint}`);
        console.log(response)
        setNotes(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchData();
  }, [isAdmin]);

  return (
    <div className='w-full flex flex-wrap p-5 '>
      {isLoading ? (
        <p>Loading...</p>
        ) : notes.length === 0 ? (
        <p>Nothing to display</p>
      ) : (
        notes.slice(0, 6).map((note, index) => (  // Modify this line
          <Card key={index} title={note.title} content={note.content} fileUrl={note.file_url} admin={isAdmin} noteId={note._id} />
        ))
      )}
    </div>
  );
};

export default CardContainer;
