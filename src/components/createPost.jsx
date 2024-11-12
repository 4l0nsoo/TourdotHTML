import React from 'react'

function createPost() {
  return (
    <div>createPost
        <div>
            <form action="">
                <input type="text" placeholder='titulo' />
                <input type="file" placeholder='sube la foto del sitio' />
                <textarea name="" id="" placeholder='descripcion del sitio'></textarea>
                <input type="button" value="Subir" />
            </form>
        </div>
    </div>
  )
}

export default createPost