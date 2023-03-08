import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import Button  from '@mui/material/Button';


export default function Producto() {

  const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
  const[nombre, setNombre]=React.useState('Collar')
  const[descripcion, setDescripcion]=React.useState('Collar de esmeraldas')
  const[marca, setMarca]=React.useState('ABC')
  const[imagen, setImagen]=React.useState('NULL')
  const[unitDispo, setUnitDispo]=React.useState('5')


  const handleClick=(e)=>{
    e.preventDefault()
    const producto={nombre,descripcion,marca,imagen,unitDispo}
    console.log(producto)
    fetch("htpp://localhost:8080/api/v1/productos",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(producto)
  }).then(()=>{
    console.log("Producto anadido al catalogo")
  })
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1><u>Anadir producto</u></h1>
    <Box 
      component="Form"
        sx={{
          '& > not(sytle)': {m: 1},
        }}
        noValidate
        autoComplete="off"
        >

        <TextField id="outlined-basic" label="Nombre del producto" variable="outlined" fullWidth>
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        </TextField>

        <TextField id="outlined-basic" label="Descripcion del producto" variable="outlined" fullWidth>
        value={descripcion}
        onChange={(e)=>setDescripcion(e.target.value)}
        </TextField>

        <TextField id="outlined-basic" label="Marca del producto" variable="outlined" fullWidth>
        value={marca}
        onChange={(e)=>setMarca(e.target.value)}
        </TextField>

        <TextField id="outlined-basic" label="Imagen del producto" variable="outlined" fullWidth>
        value={imagen}
        onChange={(e)=>setImagen(e.target.value)}
        </TextField>

        <TextField id="outlined-basic" label="Unidades disponibles del producto" variable="outlined" fullWidth>
        value={unitDispo}
        onChange={(e)=>setUnitDispo(e.target.value)}
        </TextField>

        <Button variant='contained' onClick={handleClick}>Crear el producto</Button>

      </Box>
      </Paper>
    </Container>
  );
}


