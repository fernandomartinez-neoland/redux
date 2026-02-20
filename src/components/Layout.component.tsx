import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { agregarA, agregarB, reiniciar } from "../components/Redux";

export default function Layout() {
  const palabra = useSelector((state: RootState) => state.palabra.value);
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contactanos</Link>
            </li>
            <li>
              <Link to="/about">Sobre mi</Link>
            </li>
            <li>
              <Link to="/projects">Proyectos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <button onClick={()=>{dispatch(agregarA())}}>Agregar A</button>
      <button onClick={()=>{dispatch(agregarB())}}>Agregar B</button>
      <button onClick={()=>{dispatch(reiniciar())}}>Reiniciar</button>

      {palabra}
      <Outlet />
    </>
  );
}
