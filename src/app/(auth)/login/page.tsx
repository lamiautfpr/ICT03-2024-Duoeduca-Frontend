import { LoginScreen } from "@/modules/auth/screens/login/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acesse sua conta | Duoeduca",
  description: "Faça login na plataforma Duoeduca para acessar materiais.",
};

export default function LoginPage() {
  return <LoginScreen />;
}
