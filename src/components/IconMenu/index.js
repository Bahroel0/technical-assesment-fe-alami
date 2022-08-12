import { Cart,  ChatLeft, CameraVideo, People, FileEarmarkText, LifePreserver } from "react-bootstrap-icons";
import './index.css'
export default function IconMenu(props){
  return (
    <ul className={props.position}>
      <li>
        <ChatLeft />
      </li>
      <li>
        <LifePreserver />
      </li>
      <li>
        <FileEarmarkText />  
      </li>
      <li>
        <CameraVideo />
      </li>
      <li>
        <People />
      </li>
      <li>
        <Cart />
      </li>
    </ul>
  );
}