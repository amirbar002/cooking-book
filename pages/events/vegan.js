import AllEvents from '../../src/app/home/meat';
import axios from "axios";
import Image from "next/legacy/image";

const EventsPage = ({ data }) => {
  const getcard = async () => {
    try {
      const res = await axios.get( "https://cooking-book-77339b050a7a.herokuapp.com/recipes/4")
      if(res.data.length > data.length ){
        data = res.data
        console.log("res.data");
      }else{
        console.log('data from getStaticProps');
      }
     

    } catch (error) {
      console.log(error);
    }
    getcard()
  }
  return (
    <>
     <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <Image
          src="/../img9.jpeg"
          alt="background"
          layout="fill"
          quality={100}
        />
      </div>
  <AllEvents data={data} />
  </>
  )
};

export default EventsPage;

export async function getStaticProps() {
  const res = await axios.get("https://cooking-book-77339b050a7a.herokuapp.com/recipes/4")
  return {
    props: {
      data: res.data,
    },
  };
}
