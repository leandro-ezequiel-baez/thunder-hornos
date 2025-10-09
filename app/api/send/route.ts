import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Acá podés hacer lo que quieras con los datos, por ejemplo enviarlos por correo o guardarlos
  console.log("Datos del formulario recibidos:", data);

  return NextResponse.json(
    { message: "Formulario recibido correctamente" },
    { status: 200 }
  );
}
