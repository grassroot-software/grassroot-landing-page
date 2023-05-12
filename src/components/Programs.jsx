import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import { offers, programs } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'


const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs_container'>
                    <SectionHead icon= {<FaCrown />} title = "Learn everything you need to know" />
            
                <div className='programs__wrapper'>
                    {
                        programs.map(({id, icon, title}) =>{
                            return (
                                <Card className="programs__program" key ={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    {/* <small>{info}</small> */}
                                </Card>
                            )
                        } )
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs