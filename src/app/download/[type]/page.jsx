"use client";
import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function DownloadPage() {
  const router = useRouter();
  const params = useParams();
  const type = params.type || "front";

  useEffect(() => {
    const downloadAndRedirect = async () => {
      console.log("Tipo detectado:", type);
      
      try {
        const downloadUrl = `/api/curriculo?type=${type}`;
        
        const response = await fetch(downloadUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement("a");
        link.href = url;
        link.download = type === "sap" ? "Leonardo M SAP.pdf" : "Leonardo Front.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        const redirectUrl = `/?curriculo=${type}`;
        console.log("Redirecionando para:", redirectUrl);
        
        setTimeout(() => {
          window.location.replace(redirectUrl);
        }, 500);
      } catch (error) {
        console.error("Erro ao baixar:", error);
        const redirectUrl = `/?curriculo=${type}`;
        window.location.href = redirectUrl;
      }
    };

    downloadAndRedirect();
  }, [type]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-lg font-bold text-light-900">Baixando currículo...</p>
        <p className="text-sm text-light-600 mt-2">Você será redirecionado em instantes</p>
      </div>
    </div>
  );
}

