import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const filename = params.filename;
  
  if (filename.includes("SAP") || filename.includes("sap")) {
    return NextResponse.redirect(new URL("/download/sap", request.url), 301);
  }
  
  if (filename.includes("Front") || filename.includes("front")) {
    return NextResponse.redirect(new URL("/download/front", request.url), 301);
  }
  
  return NextResponse.redirect(new URL("/download/front", request.url), 301);
}

