import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function InvalidToken() {
  return (
    <main className="container mx-auto flex h-screen items-start justify-center">
      <div>
        <iframe
          src="https://lottie.host/embed/21ca489d-cd72-43a0-9b78-db52841bb6a3/tABQsDUEAe.lottie"
          className="h-96 w-96"
        ></iframe>
        <div className="flex max-w-md flex-col items-center justify-center space-y-4 rounded-md border p-4 shadow">
          <h1 className="text-2xl font-bold">Sua sessão expirou</h1>
          <p>
            Parece que sua sessão chegou ao fim. Por favor, faça o{" "}
            <a href="/login" className="text-blue-500">
              login novamente
            </a>{" "}
            para continuar utilizando a plataforma.
          </p>
          <Link href="/login" className="w-full">
            <Button size="lg" variant="solid" className="w-full">
              Fazer o login
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
