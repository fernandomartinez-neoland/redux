import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import {agregarA, agregarB, reiniciar} from '../components/Redux'


function About() {
  const palabra = useSelector((state: RootState) => state.palabra.value);
  const dispatch=useDispatch();
  return (
    <div>
      <br/>
      --------------------- esto es el componente About------------------
      <br/>
       
       <button onClick={()=>{dispatch(agregarA())}}>Agregar A</button>
            <button onClick={()=>{dispatch(agregarB())}}>Agregar B</button>
            <button onClick={()=>{dispatch(reiniciar())}}>Reiniciar</button>
      
      {palabra}
      
    </div>
  )
}

export default About
