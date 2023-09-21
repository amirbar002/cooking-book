import AllEvents from "../../src/app/home/meat";
import Image from "next/legacy/image";

import axios from "axios";

const EventsPage = ({ data }) => {
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
          src="/../public/img4.jpeg"
          alt="background"
          layout="fill"
          quality={100}
        />
      </div>
      <AllEvents data={data} />
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const res = await axios.get("http://localhost:8080/recipes/1");
  console.log(res.data, "res.data");
  return {
    props: {
      data: res.data,
    },
  };
}
