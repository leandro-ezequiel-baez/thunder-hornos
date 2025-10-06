import React from "react";

const whatsappNumber = "2214357539"; // Reemplaza con tu número
const message = "¡Hola! Quiero más información."; // Mensaje opcional

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function WhatsappFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
        background: "#25D366",
        borderRadius: "50%",
        boxShadow: "0 2px 8px rgba(0.65 0.25 260)",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "box-shadow 0.2s",
      }}
    >
      <img
        src="/whatsapp.svg" // Asegúrate de tener este archivo en la carpeta pública
        alt="WhatsApp"
        style={{ width: "40px", height: "40px" }}
      />
    </a>
  );
}