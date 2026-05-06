import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("file");

  if (filename === "Leonardo M SAP.pdf" || filename?.includes("SAP")) {
    return NextResponse.redirect(new URL("/download/sap", request.url));
  } else if (
    filename === "Leonardo Front.pdf" ||
    filename === "Leonardo Front atual.pdf" ||
    filename === "Leonardo Front atual.pdf.pdf" ||
    filename?.includes("Front")
  ) {
    return NextResponse.redirect(new URL("/download/front", request.url));
  }

  return NextResponse.redirect(new URL("/download/front", request.url));
}

