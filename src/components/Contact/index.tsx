"use client";
import { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tickets"), formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Error al enviar el ticket. Inténtalo de nuevo.");
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-space-blue dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ¿Listo para Transformar tu Negocio con Wallet e IA?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Contáctanos para una consulta gratuita y descubre cómo nuestras soluciones personalizadas pueden impulsar tu crecimiento.
              </p>
              {success && (
                <p className="text-green-500">Mensaje enviado correctamente. ¡Gracias!</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-space-blue dark:text-white">
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Ingresa tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-space-blue dark:text-white">
                        Tu Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Ingresa tu correo"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-space-blue dark:text-white">
                        Tu Mensaje
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Escribe tu mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-xl border border-gray-300 bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-xl bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Solicitar Consulta Gratuita
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-dark">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
