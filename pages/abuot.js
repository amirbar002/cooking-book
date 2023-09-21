import Image from 'next/legacy/image'


function abuot() {
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
          src="/../public/img3.jpeg"
          alt="background"
          layout="fill"
          quality={100}
        />
      </div>
    </>
  )
}

export default abuot