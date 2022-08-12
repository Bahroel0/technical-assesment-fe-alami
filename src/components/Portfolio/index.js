import './index.css';
import { Cart, Command, HandThumbsUp, Pen } from "react-bootstrap-icons";
import PortfolioCard from './Card';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className='row'>
        <div className="col-2 headline">
          <h1>My Portfolio</h1>
        </div>
        <div className="col-4 wrapper ">
          <div className="row">
            <div className="col-half">
              <PortfolioCard 
                children={ <Cart color="#765D63" size={40}/> } 
                title="Design" 
                caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
            </div>
            <div className="col-half">
              <PortfolioCard 
                children={ <Command color="#765D63" size={40}/> } 
                title="Develope" 
                caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-half">
              <PortfolioCard 
                children={ <Pen color="#765D63" size={40}/> } 
                title="Write" 
                caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
            </div>
            <div className="col-half">
              <PortfolioCard 
                children={ <HandThumbsUp color="#765D63" size={40}/> } 
                title="Promote" 
                caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
            </div>
          </div>
        </div>
        <div className="col-4 wrapper ">
          <div className="wrapper-service">
            <h2 className="text-subtitle pt-2 mt-2">Services</h2>
            <h3 className="text-caption mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </h3>
            <p className="text-caption mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-caption mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div>
              <button className='btn-footer'>Download CV</button>
              <button className='btn-footer'>Check My Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}