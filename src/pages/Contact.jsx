import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      const response = await api.post('/contact', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        createdAt: new Date().toISOString(),
        status: "PENDING" // Valor por defecto según tu ENUM
      });

      setSubmitStatus({ 
        success: true, 
        message: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto." 
      });
      
      // Reset form
      setFormData({ 
        firstName: "", 
        lastName: "", 
        email: "", 
        phone: "", 
        message: "" 
      });

    } catch (error) {
      console.error("Error enviando formulario:", error);
      setSubmitStatus({ 
        success: false, 
        message: "Error al enviar el mensaje. Por favor, intenta nuevamente." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return ( 
    <>
     

      {/* Hero Section */}
    <main className="min-h-screen">

    <section className="py-16 bg-base-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-base-black mb-4">
            Contáctanos
          </h2>
          <p className="text-base-mid text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre y Apellido */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-base-dark font-medium mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-base-light rounded-lg focus:ring-2 focus:ring-accent1-blue focus:border-transparent transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-base-dark font-medium mb-2">
                  Apellido *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-base-light rounded-lg focus:ring-2 focus:ring-accent1-blue focus:border-transparent transition"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            {/* Email y Teléfono */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-base-dark font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-base-light rounded-lg focus:ring-2 focus:ring-accent1-blue focus:border-transparent transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base-dark font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-base-light rounded-lg focus:ring-2 focus:ring-accent1-blue focus:border-transparent transition"
                  placeholder="+54 11 1234-5678"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-base-dark font-medium mb-2">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-base-light rounded-lg focus:ring-2 focus:ring-accent1-blue focus:border-transparent transition resize-vertical"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            {/* Mensaje de estado */}
            {submitStatus.message && (
              <div className={`p-4 rounded-lg ${
                submitStatus.success 
                  ? "bg-accent1-green/10 text-accent1-green" 
                  : "bg-accent2-red/10 text-accent2-red"
              }`}>
                {submitStatus.message}
              </div>
            )}

            {/* Botón */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent1-blue text-white py-3 px-6 rounded-lg font-medium hover:bg-accent1-green transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>

          {/* Información de contacto */}
          <div className="bg-base-white rounded-lg p-8">
            <h3 className="text-2xl font-heading font-bold text-base-black mb-6">
              Información de contacto
            </h3>

            <div className="space-y-6">
              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent1-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent1-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base-dark">Teléfono</h4>
                  <p className="text-base-mid">+54 11 1234-5678</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent1-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent1-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base-dark">Email</h4>
                  <p className="text-base-mid">info@proydis.com</p>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent1-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent1-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base-dark">Dirección</h4>
                  <p className="text-base-mid">Av. Corrientes 1234<br />CABA, Buenos Aires</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent1-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent1-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base-dark">Horario de atención</h4>
                  <p className="text-base-mid">Lunes a Viernes<br />9:00 - 18:00 hs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </main>
      
    </>
  );
}