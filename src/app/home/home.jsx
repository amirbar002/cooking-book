
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link"

export const Home = ()=>(
  <div className="big-div-home">
    <Link className="first-letter-bold" href="events/meat" > בשרי</Link>
    <br/>
    <Link className="first-letter-bold" href="events/mliky" > חלבי</Link>
    <br/>
    <Link className="first-letter-bold" href="events/furfood" > פרווה</Link>
    <br/>
    <Link className="first-letter-bold" href="events/vegan" >מאכלים טיבונעיים</Link>
    <br/>
    <Link className="first-letter-bold" href="events/dessert" > קינוחים </Link>
  </div> 
)