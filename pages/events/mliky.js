import AllEvents from '../../src/app/home/meat';
import axios from "axios";
import Image from "next/legacy/image";

const EventsMliky = ({ data }) => {
  return( 
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
          src="/../public/img7.jpeg"
          alt="background"
          layout="fill"
          quality={100}
        />
      </div>
  <AllEvents data={data} />
    </>
  )
};

export default EventsMliky;

export async function getStaticProps() {
  const res = await axios.get("http://localhost:8080/recipes/2")
  return {
    props: {
      data: res.data,
    },
  };
}
