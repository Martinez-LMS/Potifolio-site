import { Suspense } from "react";
import HomeContent from "./components/HomeContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <Suspense fallback={<div>Carregando...</div>}>
        <HomeContent />
      </Suspense>
    </main>
  );
}