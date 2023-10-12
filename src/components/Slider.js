import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function Slider() {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL+"/images/first1.jpg"}
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Your Favorite Idea Retriever</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL+"/images/second1.jpg"}
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Business Recommendation Engine</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL+"/images/third1.jpg"}
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Plethora of Titles</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL+"/images/fourth1.jpg"}
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Choose, Analyze & Produce </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL+"/images/fifth1.jpg"}
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Let's start exploring CineSprite</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
