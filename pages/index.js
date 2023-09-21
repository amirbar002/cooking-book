import { Home } from "@/app/home/home";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/legacy/image";

function index() {
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
          src="/../public/img.jpeg"
          alt="background"
          layout="fill"
          quality={100}
        />
      </div>
      <Home />
    </>
  );
}

export default index;
