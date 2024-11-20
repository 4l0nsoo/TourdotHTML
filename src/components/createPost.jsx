import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import {useAuth} from './hooks/UserContext';
import "./styles/createPost.css"

function createPost() {

  // const {isLogged} = useAuth()
  // const {session} = useAuth()
  // const navigate = useNavigate()

  // useEffect(() => {
  //     if(!isLogged){
  //       navigate('/login')}
  // }, []);

  const [title, setTitle] = useState()
  const [file, setFile] = useState()
  const [desc, setDesc] = useState()

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg"]; 

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setError("");
    } else {
      setError("Por favor, selecciona un archivo .png o .jpg");
      setFile(null);
    }
  };


  const handleSubmit = async (e) => {  
      e.preventDefault();

      if(!file){
      alert("No hay archivo seleccionado")
      return
    }

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
    
    try {
      const {data: uploadData, error: uploadError} = await supabase.storage
      .from("posts_img")
      .upload(fileName, file)

      if (uploadError) {
        console.error("Error al subir el archivo:", uploadError);
        alert("Hubo un problema al subir el archivo.");
        return;
      }

      const publicURL = `https://ivyuqxwqemrydiloezmx.supabase.co/storage/v1/object/public/posts_img/${fileName}`;

    const {data: insertData, error: insertError} = await supabase.
    from("posts").
    insert({
      title:title,
      description:desc,
      img_url:publicURL
    });

    if (insertError) {
      console.error("Error al insertar en la tabla:", insertError);
      alert("Hubo un problema al guardar los datos.");
      return;
    }

    alert('se enviaron correctamente los datos')

    } catch (error) {
      console.log("ha ocurrido un error:", error)
    }

    

  }







  
  return (
    <div>
      <NavBar/>
        <div className='formCont'>
            <form onSubmit={handleSubmit}>
                <input className='formElm' type="text" placeholder='titulo' onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="uploadFile" id='uploadBtn'>Subir Imagen</label>
                <input className="formElm" id='uploadFile' type="file" placeholder='sube la foto del sitio' onChange={handleFileChange} />
                <textarea className='formElm' name="" id="" placeholder='descripcion del sitio' onChange={(e) => setDesc(e.target.value)} ></textarea>
                <button >Subir</button>
            </form>
        </div>
    </div>
  )
}

export default createPost