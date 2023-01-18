import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const baseURL = "http://localhost:3000/";

const EditPost = () => {

  const navigate = useNavigate();

  const [id, setId] = useState();

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        title: localStorage.getItem('title'),
        description: localStorage.getItem('description'),
        image: localStorage.getItem('image'),
       

      }
    }
  );

  // console.log(data.image[0].name)
  const onSubmit = (data) => {
    axios.put(`https://639b5370d51415019752861a.mockapi.io/crudyoutube/${id}`, {

      title: data.title,
      description: data.description,
      image: data.image[0].name,
      

    })
      .then(() => {

        toast.success('Update Post Successful', {
          position: 'top-center'
        });

        navigate('/UserPost')
      })
  }

  useEffect(() => {
    setId(localStorage.getItem('id'))
  }, [])





  return (
    <div>
      <h1>Update Post</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Title:</label>
        <div className='form-group'>
          <input
            {...register("title", { required: true })}
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.title?.type === 'required' && <p role="alert">Title is required</p>}
        </div>
        <br /><br />

        <label>Description:</label>
        <div className='form-group'>
          <textarea
            {...register("description", { required: "Description is required" })}
            aria-invalid={errors.description ? "true" : "false"}
          />
          {errors.description && <p role="alert">{errors.description?.message}</p>}
        </div>
        <br /><br />


       
        <label>Image:</label>
        <div className='form-group'>
          <input type='file' 
            {...register("file", { required: "File is required" })}
            aria-invalid={errors.file ? "true" : "false"}
          />
          {errors.file && <p role="alert">{errors.file?.message}</p>}
        </div>
        <br /><br />

        <input className='btn btn-info'
          type="submit" value='Update Post' />
      </form>
    </div>
  )
}

export default EditPost
