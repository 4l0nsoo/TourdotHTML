import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import {useAuth} from './hooks/UserContext';



function createPost() {

  const {isLogged} = useAuth()
  const navigate = useNavigate()
  console.log(isLogged)

  useEffect(() => {
      if(!isLogged){
        console.log('se ejecuto el if')
        navigate('/login')}
  }, []);

  const [title, setTitle] = useState()
  const [file, setFile] = useState()
  const [desc, setDesc] = useState()

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg"]; // Solo PNG y JPG

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile)); // Vista previa
      setError("");
    } else {
      setError("Por favor, selecciona un archivo .png o .jpg");
      setFile(null);
    }
  };

  const handleUpload = async () =>{
    if(!file){
      alert("No hay archivo seleccionado")
      return
    }

    const fileName = `${Date.now()}-${file.name}`
    
    try {
      const {data, error} = supabase.storage
      .from("posts_img")
      .upload(fileName, file)
      
    } catch (error) {
      
    }

  }







  
  return (
    <div>
      <NavBar/>
        <div>
            <form action="">
                <input type="text" placeholder='titulo' onChange={(e) => setTitle(e.target.value)}/>
                <input type="file" placeholder='sube la foto del sitio' onChange={handleFileChange} />
                <textarea name="" id="" placeholder='descripcion del sitio' onChange={(e) => setDesc(e.target.value)} ></textarea>
                <button>Subir</button>
            </form>
        </div>
    </div>
  )
}

export default createPost