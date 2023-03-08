import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default function Producto() {

  const paperStyle={padding: '50px 20px', width:1000, margin:"20px auto"}
  const[nombre, setNombre]=useState('')
  const[descripcion, setDescripcion]=useState('')
  const[marca, setMarca]=useState('')
  const[imagen, setImagen]=useState('')
  const[unitDispo, setUnitDispo]=useState('')
  const[productos, setProductos]=useState([])



  const handleClick=(e)=>{
    e.preventDefault()
    const producto={nombre,descripcion,marca,imagen,unitDispo}
    console.log(producto)
    fetch("http://localhost:8080/api/v1/productos",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(producto)
  }).then(()=>{
    console.log("Producto anadido al catalogo")
  })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/api/v1/leerproductos")
    .then(res=>res.json())
    .then((result)=>{
      setProductos(result);
    }
  )
  },[])

  return (
    <Container>
      <Paper elevation={5} style={paperStyle}>
        <h1><u>Anadir producto</u></h1>
    <Box 
      component="form"
        sx={{
          '& > not(sytle)': {m: 1},
        }}
        noValidate
        autoComplete="off"
        >

        <TextField id="outlined-basic" label="Nombre del producto" variable="outlined" fullWidth
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        />

        <TextField id="outlined-basic" label="Descripcion del producto" variable="outlined" fullWidth
        value={descripcion}
        onChange={(e)=>setDescripcion(e.target.value)}
        />

        <TextField id="outlined-basic" label="Marca del producto" variable="outlined" fullWidth
        value={marca}
        onChange={(e)=>setMarca(e.target.value)}
        />

        <TextField id="outlined-basic" label="Imagen del producto" variable="outlined" fullWidth
        value={imagen}
        onChange={(e)=>setImagen(e.target.value)}
        />

        <TextField id="outlined-basic" label="Unidades disponibles del producto" variable="outlined" fullWidth
        value={unitDispo}
        onChange={(e)=>setUnitDispo(e.target.value)}
        />

        <Button variant='contained' onClick={handleClick}>Crear el producto</Button>
      </Box>
      </Paper>
        <h1>productos</h1>
      <Paper elevation={3} style={paperStyle}>
        {productos.map(producto=>(
          <Paper elevation={6} style={{margin:'10px',padding:'15px',textAlign:'left'}} key={producto.codigo}>
              Codigo:{producto.codigo}<br/>
              Nombre={producto.nombre}<br/>
              Descripcion={producto.descripcion}<br/>
              Marca={producto.marca}<br/>
              Imagen={producto.imagen}<br/>
              UnitDispo={producto.unitDispo}
      </Paper>
        ))
        }
      </Paper>
    </Container>
  );
}


