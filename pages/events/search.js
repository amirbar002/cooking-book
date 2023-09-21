import React from "react";
import Searchpage from "../../src/app/home/searchpage";
import '../../src/app/globals.css'
import Image from "next/legacy/image";
const search = () => {

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
          src="/../public/img8.jpeg"
          alt="background"
          layout="fill"
          quality={100}
        />
      </div>
    <Searchpage/>
    </>
  );
};

export default search;
