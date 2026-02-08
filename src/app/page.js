import { Suspense } from "react";
import HomeContent from "./components/HomeContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative overflow-hidden">
      <Suspense fallback={<div>Carregando...</div>}>
        <HomeContent />
      </Suspense>
    </main>
  );
}