import SectionHead from "./SectionHead"
import { FaQuestion } from "react-icons/fa"
import { faqs } from "../data"
import FAQ from "./FAQ"

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faq__contaner">
            <SectionHead icon={<FaQuestion/>} title="FAQs" />
            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer1, answer2}) => {
                        return <FAQ key={id} question={question} answer1={answer1} answer2={answer2} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs