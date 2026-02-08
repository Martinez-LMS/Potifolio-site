import { NextResponse } from "next/server";
import { readFile, access } from "fs/promises";
import { join } from "path";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "front";
    const redirect = searchParams.get("redirect");
    
    if (redirect === "true") {
      return NextResponse.redirect(new URL(`/download/${type}`, request.url));
    }
    
    const curriculos = {
      front: {
        file: "Leonardo Front.pdf",
        filename: "Leonardo Front.pdf"
      },
      sap: {
        file: "Leonardo M SAP.pdf",
        filename: "Leonardo M SAP.pdf"
      }
    };
    
    const curriculo = curriculos[type] || curriculos.front;
    const publicPath = join(process.cwd(), "public", curriculo.file);
    
    try {
      await access(publicPath);
    } catch {
      return NextResponse.json(
        { error: "Arquivo não encontrado no caminho: " + publicPath },
        { status: 404 }
      );
    }
    
    const fileBuffer = await readFile(publicPath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${curriculo.filename}"`,
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (error) {
    console.error("Erro ao ler o arquivo PDF:", error);
    return NextResponse.json(
      { error: "Erro ao processar arquivo", details: error.message },
      { status: 500 }
    );
  }
}
