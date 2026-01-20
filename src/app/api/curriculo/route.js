import { NextResponse } from "next/server";
import { readFile, access } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const publicPath = join(process.cwd(), "public", "CurriculoF.pdf");
    
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
        "Content-Disposition": 'attachment; filename="CurriculoF.pdf"',
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
