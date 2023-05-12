import Image from '../images/01 (2).jpg'
import SectionHead2 from './SectionHead2'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
    <section className='values'>
        <div className='container values__container'>
            <div className='values__left'>
                <div className='values__image'>
                    <img src={Image} alt='Values Images'/>
                </div>
            </div>
            <div className='values__right'>
                <SectionHead2 icon={<GiCutDiamond/>} title="Our full stack curriculum is free and supported by a passionate community of web engineers from Harvard University and Beyond" />
                <p>
                    
                </p>
                <div className='values__wrapper'>
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className='values__value'>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values