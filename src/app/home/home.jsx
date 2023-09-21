
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link"

export const Home = ()=>(
  <div className="big-div-home">
    <Link className="first-letter-bold" href="events/meat" >מאכלים בשרים</Link>
    <br/>
    <Link className="first-letter-bold" href="events/mliky" >מאכלים חלבי</Link>
    <br/>
    <Link className="first-letter-bold" href="events/furfood" >מאכלים פרווה</Link>
    <br/>
    <Link className="first-letter-bold" href="events/vegan" >מאכלים צמחוני</Link>
    <br/>
    <Link className="first-letter-bold" href="events/dessert" >מאכלים קינוחים </Link>
  </div> 
)