import Nav from "./Nav"
import EntryInfo
 from "./EntryInfo"


 import { useParams } from "react-router-dom";
import ShoppingView from "./Shopping";

function WholePage(){
    const {name} = useParams();

    return(<>
    <Nav />
    
    {name === "home" ? (
    (<EntryInfo />)
    ) : name ==="shopping" ? 
    (<ShoppingView />)
    : (<EntryInfo />)} 
    
    </>)
}

export default WholePage