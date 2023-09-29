import React from "react";
import '../../app/globals.css'
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import bufferToDataUrl from 'buffer-to-data-url';


const AllEvents = ({ data }) => {
  
const modifiedData = data.map((ev) => {
  console.log(typeof ev.img.data, "image");
  const arrayNumbers = ev.img.data;
  if (Array.isArray(arrayNumbers)) {
    const buffer = Buffer.from(arrayNumbers);
    const result = bufferToDataUrl("potho", buffer);
    return { ...ev, img: result }; 
  } else {
    console.log("Invalid array of numbers:");
    return ev
  }
});
 

  return ( 
    <div>
      <div className="bigdiveventpage">
      <div className="events_page">
      {modifiedData.map((ev) => {
  let typeText = '';

  switch (ev.type_of_food) {
    case 1:
      typeText = 'בשרי';
      break;
    case 2:
      typeText = 'חלבי';
      break;
    case 3:
      typeText = 'פרווה';
      break;
    case 4:
      typeText = 'טבעוני';
      break;
    default:
      typeText = 'קינוחים';
      break;
  }

  return (
    <Card key={ev.id} className="cardmeat" style={{ width: "18rem" }}>
      <div>
        <Card.Body>
          <Card.Img variant="top" src={ev.img} />
          <h7 className="bclass">:שם המנה</h7>
          <Card.Title className="bclass"> {ev.foodName}</Card.Title>
          <b className="bclass">:מצרכים</b>
          <Card.Text className="bclass">{ev.Ingredients}</Card.Text>
          <b className="bclass">:הוראות</b>
          <Card.Text className="bclass">{ev.Instructions}</Card.Text>
          <Card.Text className="bclass"><b>{typeText}</b></Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
})}
      </div>
      </div>
    </div>
  );
};

export default AllEvents;



