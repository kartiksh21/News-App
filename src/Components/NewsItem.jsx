import React from 'react'

const NewsItem = ({title,desc,src,url}) => {
  return (
   <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"345px",maxHeight:"480px"}}>
  <img src={src} style={{height:"250px",width:"100%"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{desc?desc.slice(0,90):""}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
