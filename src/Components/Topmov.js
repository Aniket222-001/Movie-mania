import React, { useState } from 'react'
import datas from '../../src/data/data'
import '../Components/Style/Topmov.css'
import { Link } from 'react-router-dom'

const Topmov = () => {
    const [Movie,setMovie] = useState(datas)

    const choose =(category)=>{
        setMovie(
            datas.filter((data)=>{
                return data.Category === category
            })
        )
    }
  return (
    <div className=''>
      <h3 className='Heading-title'>Top Movies</h3>
      <div className='Mov-btn-box'>
         <p onClick={()=>choose('Topmov')} className='Mov-btn'>Top Movies</p>
        <p onClick={()=>setMovie(datas)} className='Mov-btn'>All</p>
        <p onClick={()=>choose('Action')} className='Mov-btn'>New Movies</p>
        <p onClick={()=>choose('Upcoming-movie')} className='Mov-btn'>Upcoming Movies</p>
      </div>
      <div className='Topmov-container' id='Topmovies'>
          {
            Movie.map(data=>{
                return(
                    <div className='Topmov-card'>
                        <Link to={`/Topmovpage/${data.id}`} ><img src={data.img} alt="" className='Topmov-img' />
                        <div className='Topmov-name'><p className='Topmov-title'>{data.title}</p></div></Link>
                        <div className='Topmov-data'><span>{data.time}</span> <span>{data.Category}</span>
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
