import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../src/app/globals.css";
import Image from "next/legacy/image";

function addRecipes() {
  const [alldata, setalldata] = useState("");
  const [hasPhoto, sethasPhoto] = useState(false);
  const [tast, settast] = useState(true);
  const [img, setimg] = useState("");
  const { register, handleSubmit } = useForm();

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const onSubmitt = async (data) => {
    const bytes = img.length;
    const megabytes = bytes / (1024 * 1024);
  

    try {
     
      const formData = new FormData(); 
      formData.append("Instructions", data.Instructions);
      formData.append("Ingredients", data.Ingredients);
      formData.append("type_of_food", data.type_of_food);
      formData.append("type_of_food_two", data.type_of_food_two);
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("foodName", data.foodName);
      formData.append("image", img);
      
      const config = {
        headers:{
            "Content-Type":"multipart/form-data"
        }
     }
      const response = await axios.post("http://localhost:8080/recipes", formData , config);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const DragDropFiles = () => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (event) => {
      event.preventDefault();
    };

    const handleDrop = (event) => {
      event.preventDefault();
      setFiles(event.dataTransfer.files);
    };

    const handleUpload = async () => {
      if (files && files.length === 1) {
        const file = files[0];
        const maxSize = 50 * 1024 * 1024; 
        
        if (file.size <= maxSize) {
          const blobUrl = URL.createObjectURL(file);
          const blobFile = new File([file], file.name, { type: file.type });
          URL.revokeObjectURL(blobUrl);
    

          const reader = new FileReader();
          reader.onload = () => {
            const buffer = Buffer.from(reader.result);
           console.log(buffer);
          };
          reader.readAsArrayBuffer(blobFile);
    
          // Upload the file
          const formData = new FormData();
          // formData.append("img", blobFile);
          setimg(blobFile)
        
          // Rest of your code...
        }  
        
      } else {
        alert("נבחרה יותר מתמונה אחת");
      } 

    };

    if (files)
      return (
        <div className="uploads">
          <ul>
            {Array.from(files).map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
          <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
          </div>
        </div>
      );

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
          src="/../public/img10.jpeg"
          alt="background"
          layout="fill"
          quality={100}
        />
      </div>
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h5>תוסיף תמונה</h5>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="big-div-addRecipes">
        <DragDropFiles />

        <Form onSubmit={handleSubmit(onSubmitt)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>שם המנה</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              {...register("foodName",{ required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>רכיבים</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("Ingredients",{ required: true })} />
          </Form.Group>
          <Form.Group>
            <Form.Label>הוראות הכנה</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("Instructions",{ required: true })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>סוג אוכל</Form.Label>
            <Form.Select defaultValue="1" {...register("type_of_food",{ required: true })}>
              <option value="1">בשרי</option>
              <option value="2">חלבי</option>
              <option value="3">פרווה</option>
              <option value="4">טבעוני</option>
              <option value="5">קינוח</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>לא חייב לבחור עם אין</Form.Label>
            <Form.Select defaultValue="0" {...register("type_of_food_two",{ required: true })}>
              <option value="0">בחר סוג מזון</option>
              <option selected value="1">
                בשרי
              </option>
              <option value="2">חלבי </option>
              <option value="3">פרווה</option>
              <option value="4">טבעוני</option>
              <option value="5">קינוח</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>שם</Form.Label>
            <Form.Control
              type="text"
              placeholder="אמיר"
              {...register("name",{ required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>טלפון</Form.Label>
            <Form.Control
              type="tel"
              placeholder="0526882146"
              {...register("phone", { required: true })}
            />
          </Form.Group>

          <input type="submit" />
        </Form>
      </div>
    </div>
  );
}

export default addRecipes;

// @PrimaryGeneratedColumn('increment')
// id: number

// @Column('blob')
// data: Buffer;

// @Column()
// Ingredients: string

// @Column()
// Instructions: string

// @Column()
// name: string

// @Column()
// phone: number

// @Column({nullable: true, default: true})
// foodName: boolean

// 1 בשרי
// 2 חלבי
// 3 פרווה
// 4 טבעוני
// 5 קינוח
