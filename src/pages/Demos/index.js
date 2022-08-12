import './index.css';
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner';
import IconMenu from '../../components/IconMenu';
import Portfolio from "../../components/Portfolio"
export default function Demos() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Portfolio />
      <div id='right-menu'>
        <IconMenu position="vertical"/>
      </div>
    </div>
  );
}