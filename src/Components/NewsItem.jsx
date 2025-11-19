import image from '../assets/News.jpg'
import React from 'react'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card news-card mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >

      <img
        src={src ? src : image}
        onError={(e) => (e.target.src = image)}
        className="card-img-top news-img"
        alt="news"
      />

      {/* FIXED HEIGHT CONTENT AREA */}
      <div className="card-body card-content">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No title available"}
        </h5>

        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Sorry, this news is unavailable"}
        </p>
      </div>

      {/* BUTTON AT BOTTOM */}
      <a href={url} target="_blank" rel="noopener" className="btn btn-primary read-btn">
        Read More
      </a>
    </div>
  )
}

export default NewsItem
