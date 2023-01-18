import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const baseURL = "http://localhost:3000/";

const CreatePost = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {

    console.log(data.image[0].name)
    axios.post(`https://639b5370d51415019752861a.mockapi.io/crudyoutube`, {
      title: data.title,
      description: data.description,
       image: data.image[0].name,

    })
      .then(() => {
        toast.success('Post Successful', {
          position: 'top-center'
        });
        navigate('/UserPost');
      })

  }

  return (
    <div>
      <h1>Add Posts</h1>

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
            {...register("image", { required: "Image is required" })}
            aria-invalid={errors.image ? "true" : "false"}
          />
          {errors.image && <p role="alert">{errors.image?.message}</p>}
        </div>
        <br /><br />

        <input
          className='btn btn-info'
          type="submit" value='Post' />
      </form>
    </div>
    
  )
}

export default CreatePost
