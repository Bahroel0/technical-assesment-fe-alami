import './index.css';
import Image from '../../assets/image/bg-pattern.png'
import { ChevronCompactRight } from "react-bootstrap-icons";

export default function Banner () {
  return (
    <div>
      <section className='bg-demos'>
      <div className='display-table'>
        <div className='display-table-cell'>
          <div className='container'>
            <div className='justify-content'>
              <div className='text-white text-center'>
                <span className='text-latin'>Catering should be an experience</span>
                <h1 className='title'>We use only the finest and freshest ingredients</h1>
                <div >At Sway catering we know that food is an important part of life.</div>
                <div >If the meal is not perfect, your event cannot be perfect.</div>
              </div>
              <button className='btn-quote'>Request a Quote <ChevronCompactRight /></button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-pattern'>
        <img src={Image} alt="bg-effect" />
      </div>
    </section>
    <section className='card'>
      <div className='display-table'>
        <div className='display-table-cell'>
          <div className='container'>
            <div className='justify-content'>
              <div className='text-center'>
                <span className='text-latin'>Catering service in New York</span>
                <h1 className='text-headline'>We specialize in corporate and private events</h1>
                <span>With 20 years of experience, we promise you the freshest, local ingredients, hand-crafted cooking sprinkled with our unique whimsical elegance and exceptional service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
    </div>
  )
  
}