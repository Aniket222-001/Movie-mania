import React from 'react'
import { useParams } from 'react-router-dom'
import datas from '../../data/data'
import './Vidpage.css'

const Vidpage = () => {
  const {id} = useParams();
  const selectedvideo = datas.find(data => data.id == parseInt(id))
  return (
    <div className='vid-page'>
      <div className='vid-title'>
        {selectedvideo.title}
      </div>
      <div className='vid-rel'>
         Released on {selectedvideo.date}
      </div>
      <div className='vid-age'>
        Age {selectedvideo.age}
      </div>
      <div className='vid-img-box'>
      <div className='vid-img-box2'><img src={selectedvideo.img} alt="" className='vid-img'/></div>
        <div className='vid-story'>
        <h1 className='vid-desc'>Story</h1>
        <p className='vid-desc vid-detail'>{selectedvideo.desc}</p>
      </div>
      </div>
      <div  className='vid-trail'><h3>Trailer</h3></div>
      <div className='vid-trailer'>
       <iframe src={selectedvideo.video}
       allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
       className='vid-frame'></iframe>
       </div>
       
      
    </div>
  )
}

export default Vidpage