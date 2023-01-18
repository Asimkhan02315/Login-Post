import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Vortex } from 'react-loader-spinner'

// const baseURL = "http://localhost:3000/";

const UserPost = () => {

  const [data, setData] = useState();

  const [showLoader, setShowLoader] = useState(true);



  function getData() {

    axios.get(`https://639b5370d51415019752861a.mockapi.io/crudyoutube`)
      .then((res) => {
        console.log(res, '===============>')
        setData(res.data)

        setShowLoader(false)

      })
  }


  function handleDelete(id) {
    axios.delete(`https://639b5370d51415019752861a.mockapi.io/crudyoutube/${id}`)
      .then(() => {
        getData();

      })


    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false)
    }, 1000);

    toast.success('Delete Post Successful', {
      position: 'top-center'
    });


  }

  const setLocalStorage = (id, title, description, image) => {
    localStorage.setItem('id', id)
    localStorage.setItem('title', title)
    localStorage.setItem('description', description)
    localStorage.setItem('image', image)

  }

  useEffect(() => {
    getData();
  }, [])


  console.log(data);
  return (


    <>
      {showLoader ?
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />

        :
        <>

          <div className='container'>
            <h1>My Posts</h1>
            <div className='row'>

              {data && data?.map((eachData, index) => {
                return (

                  <>

                    <div className='col-sm-4 ' key={index}>

                      <div className="card-body" style={{ width: '18rem' }} >
                        <img src="https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png" 
                        className="card-img-top" alt="..." />
                        <h5 className="card-title">{eachData.title}</h5>
                        <h4 className="card-subtitle">{eachData.description}</h4>

                        <Link to="/EditPost">
                          <button onClick={() =>
                            setLocalStorage(eachData.id, eachData.title, eachData.description, eachData.image)}>
                            <i className="fa-regular fa-pen-to-square text-success"></i>
                          </button>
                        </Link>
                        <button onClick={() => handleDelete(eachData.id)}>


                          <i className="fa-solid fa-trash text-danger"></i></button>
                      </div>

                    </div>

                  </>

                )

              })
              }


            </div>
          </div>


        </>

      }
    </>
  )
}

export default UserPost
