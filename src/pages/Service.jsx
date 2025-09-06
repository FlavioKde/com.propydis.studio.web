import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

export default function Service() {

    return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Nuestros Servicios</h1>
        <p className="mb-4">
            Somos un estudio de Arquitectura que brindamos un conjunto de servicios diseñados para acompañarte en cada etapa de transformacion.
        </p>
      <h2 className="text-3xl font-bold mb-6">Informe técnico</h2>
        <p className="mb-4">
            A partir del relevamiento de la propiedad y entrevista con el cliente armamos un informe escrito de la situación y el análisis del estado en el que se encuentra
            con la proyección de los pasos a seguir.
            Nuestro equipo está comprometido con la excelencia, la transparencia y el acompañamiento en cada etapa del proceso.
        </p>
      <h2 className="text-3xl font-bold mb-6">Compraventa</h2>
        <p className="mb-4">
            Ofrecemos servicio Inmobiliario en operaciones de Compra-Venta 
            si así lo requiere el proceso para llegar al objetivo deseado.
        </p>
      <h2 className="text-3xl font-bold mb-6">Proyecto</h2>
        <p className="mb-4">
            Armamos la documentación completa, planos, cálculos y especificaciones que definen cómo se construirá o reformará la propiedad, 
            buscando satisfacer las necesidades del cliente, cumplir con aspectos estéticos, funcionales y técnicos.
        </p>
      <h2 className="text-3xl font-bold mb-6">Obra</h2>
        <p className="mb-4">
            Completada la etapa de Proyecto comenzamos con la obra nueva o de reforma, la cual dirigimos y administramos, 
            controlando el cumplimiento de plazos y presupuesto acordado.
        </p>  

        <div className="bg-gray-100 rounded-lg p-8 mt-16 mb-12 shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 leading-relaxed">
            Con la Arquitectura creamos y transformamos los espacios que nos definen
        </h2>
        </div>
        <p className="mb-4">
            Si querés saber más o tenés una necesidad específica, no dudes en <a href="/contact" className="text-blue-600 underline">contactarnos</a>.
        </p>
    </div>
  
    )
  };       
