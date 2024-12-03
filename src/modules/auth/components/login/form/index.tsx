"use client";
import { authActions } from "@/modules/auth/data/hooks/auth";
import {
  ILoginSchema,
  loginSchema,
} from "@/modules/auth/data/services/auth/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Link } from "@nextui-org/react";
import { setCookie } from "cookies-next";
import { CircleAlert, CircleX, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function FormLoginComponent() {
  const [isVisible, setIsVisible] = React.useState(false);
  const login = authActions.useLoginMutation();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "frontend@ebattle.com",
      password: "frontend123",
    },
  });
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (data: ILoginSchema) => {
    try {
      const result = await login.mutateAsync(data);
      setCookie("accessToken", result.data.token);
      router.replace("/");
    } catch (error) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } pointer-events-auto flex w-full max-w-lg rounded-lg bg-white shadow-lg ring-1 ring-red-500 ring-opacity-5`}
        >
          <div className="w-0 flex-1 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <CircleAlert className="size-10 text-red-600" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-semibold text-red-700">
                  Ocorreu um erro ao tentarmos realizar o seu login
                </p>
                <p className="mt-1 text-sm font-medium text-red-500">
                  Verifique se e-mail e senha estão corretos.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-red-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <CircleX className="size-5" />
            </button>
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="w-[450px] lg:p-8">
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col space-y-6"
      >
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Bem-vindo ao Duoeduca!
          </h1>
          <p className="text-sm text-zinc-700">
            Insira suas credenciais para entrar em sua conta.
          </p>
        </div>

        <div className="w-full space-y-4">
          <Input
            label="Insira seu e-mail"
            variant="bordered"
            {...register("email")}
            isInvalid={!!errors.email || login.isError}
          />
          {errors.email && (
            <span className="flex items-center pl-2 text-sm text-red-500">
              <CircleAlert className="mr-1 inline-block h-4 w-4" />
              {errors.email.message}
            </span>
          )}

          <Input
            label="Insira sua senha"
            variant="bordered"
            {...register("password")}
            isInvalid={!!errors.password || login.isError}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeOff className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <Eye className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          {errors.password && (
            <span className="flex items-center pl-2 text-sm text-red-500">
              <CircleAlert className="mr-1 inline-block h-4 w-4" />
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="my-2 flex justify-end gap-1 text-sm">
          Esqueceu a senha?{" "}
          <Link href="#" size="sm">
            Redefina sua senha
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full rounded-md bg-red-600 font-bold text-white"
          isLoading={login.isLoading}
        >
          Acessar minha conta
        </Button>
      </form>
    </div>
  );
}
