import { useState, useEffect  } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import{IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "../data"




function Slideshow() {
    const [currenttestimonials, setCurrenttestimonials] = useState(0);


    useEffect(() => {
        const intervalId = setTimeout(() => {
          if (currenttestimonials === testimonials.length - 1) {
            setCurrenttestimonials(0);
          } else {
            setCurrenttestimonials(currenttestimonials + 1);
          }
        }, 3000);
    
        return () => clearTimeout(intervalId);
      }, [currenttestimonials]);
}


const Testimonials = () => {    
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index];

    const prevTestimonialHandler =() =>{
        setIndex(prev => prev - 1);

        if(index <= 0){
            setIndex(testimonials.length - 1)
        }
    }
    const nextTestimonialHandler =() =>{
        setIndex(prev => prev + 1);

        if(index >= testimonials.length - 1){
            setIndex(0)
        }
    }

  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon ={<ImQuotesLeft /> } title = "Testimonials" className="testimonials__head"/>
            <Card className='testimonial'>
                <div className="testimonial__avatar">
                    <img src = {avatar} alt ={name} />
                </div>
                <p className="testimonial__quote">" {quote}"</p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle /></button>
                <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle /></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials