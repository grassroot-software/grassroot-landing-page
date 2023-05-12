import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {programs } from '../data'
import Card from '../UI/Card2'



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