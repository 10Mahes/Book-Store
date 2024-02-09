import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import Spinner from '../components/Spinner';
import axios from 'axios';

const DeleteBook = () => {
   const [loading, setLoading] = useState(false);
   const navigator = useNavigate();
   const { id } = useParams();

   const handleDeleteBook = () => {
      setLoading(true)
      axios.delete(`http://localhost:5555/books/${id}`)
         .then(() => {
            setLoading(false);
            navigator('/')
         })
         .catch((err) => {
            setLoading(false);
            alert("Error happened");
            console.log(err);
         })
   }
   return (
      <div className='p-4'>
         <BackBtn />
         <h1 className='text-3xl my-4'>Delete Book</h1>
         {loading ? <Spinner /> : ''}
         <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
            <button className='p-4 bg-red-600 text-white m-8 w-full'
               onClick={handleDeleteBook}>
               Delete

            </button>
         </div>
      </div>
   )
}

export default DeleteBook