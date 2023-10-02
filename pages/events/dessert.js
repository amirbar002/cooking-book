import { useEffect, useState } from 'react';
import AllEvents from '../../src/app/home/meat';
import axios from 'axios';
import Image from 'next/legacy/image';

const EventsPage = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  const getCard = async () => {
    try {
      const res = await axios.get('https://cooking-book-77339b050a7a.herokuapp.com/recipes/4');
      if (JSON.stringify(res.data) !== JSON.stringify(data)) {
        setData(res.data);
        console.log('New data received from getStaticProps');
      } else {
        console.log('Data remains the same');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCard();
  }, []); 

  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
        }}
      >
        <Image src="/../img9.jpeg" alt="background" layout="fill" quality={100} />
      </div>
      <AllEvents data={data} />
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const res = await axios.get('https://cooking-book-77339b050a7a.herokuapp.com/recipes/4');
  return {
    props: {
      initialData: res.data,
    },
  };
}
