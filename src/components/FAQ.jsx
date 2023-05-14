import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"



const FAQ = ({question, answer1, answer2}) => {
    const [isAnswerShowing, setIsANswerShowing] = useState(false)

  return (
    <article className="faq" onClick={()=> setIsANswerShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                {
                    isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
                }     
            </button>
        </div>
       {isAnswerShowing && <p>{answer1} <br></br> <br></br>{answer2}</p>}
    </article>
  )
}

export default FAQ