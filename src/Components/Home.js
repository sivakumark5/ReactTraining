import { useNavigate } from "react-router-dom"
import spinnner from './giphy.gif'

export default function Home(){
    const navigate = useNavigate();

    const navigateHandler = ()=>{navigate('product')};
            
    return(
        <div>
            <br>
            </br>
            <img src={spinnner}  alt="spinnner" />
<br></br>
            <button onClick={navigateHandler}>Proceed to Collections</button>
            </div>

            
    )
}