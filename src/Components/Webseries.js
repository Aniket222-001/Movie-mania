import React from 'react'
import datas from '../data/Webseriesdata'
import '../Components/Style/Topmov.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Topmov = () => {
  const [Movie,setMovie] = useState(datas.filter((data)=>{
    return data.Category == 'Topmov'
}))
  
  const choose =(category)=>{
      setMovie(
          datas.filter((data)=>{
              return data.Category === category
          })
      )
  }
  return (
    <div>
      <h3 className='Heading-title'>Web Series</h3>
      <div className='Mov-btn-box'>
        <p onClick={()=>choose('Topmov')} className='Mov-btn'>Top Movies</p>
        <p onClick={()=>setMovie(datas)} className='Mov-btn'>All</p>
        <p onClick={()=>choose('Action')} className='Mov-btn'>Action</p>
        <p onClick={()=>choose('Drama')} className='Mov-btn'>Drama</p>
        <p onClick={()=>choose('Thriller')} className='Mov-btn'>Thriller</p>
      </div>
      
      <div className='Topmov-container' id='Webseries'>
          {
            Movie.map(data=>{
                return(
                    <div className='Topmov-card'>
                        <Link to={`/Webseriespage/${data.id}`} ><img src={data.img} alt="" className='Topmov-img' />
                        <div className='Topmov-name'><p className='Topmov-title'>{data.title}</p></div></Link>
                        <div className='Topmov-data'><span>{data.time}</span> 
                        </div>
                    </div>
                )
            })
          }
      </div>
    </div>
  )
}

export default Topmov

