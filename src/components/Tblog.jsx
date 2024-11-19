import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { supabase } from '../supabase/client';
import './styles/blog.css'

function Tblog() {


    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .order("inserted_at", { ascending: false });

        if (error) {
          console.error("Error al obtener los posts:", error);
        } else {
          setPosts(data);
        }
        setLoading(false);
      };

      fetchPosts();
    }, []);

    if (loading) return <p>Cargando posts...</p>;

  





  return (
    <>
      <NavBar />

      <Link to='/create-post'>Crear Post</Link>

      <div id='bigContainer'>
        {posts.map((post) => (
          <div key={post.id} id='postContainer'>
          <img src={post.img_url} alt={`Imagen del post: ${post.title}`} id='postImg'/>
          <div>
            <h2 className='postElmnt'>{post.title}</h2>
            <p className='postElmnt'>{post.description}</p>
            <span></span>
            <span></span>

          </div>
        </div>

        ))}
        
      </div>
    </>
  )
}

export default Tblog