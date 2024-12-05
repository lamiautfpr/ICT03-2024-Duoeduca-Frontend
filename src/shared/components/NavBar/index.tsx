import { userStore } from "@/data/states/zustand/user";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";
import {
  ContactRound,
  GraduationCap,
  LogIn,
  LogOut,
  Map,
  Play,
  Trophy,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NavBarProps } from "../types";

export default function NavBar({ user }: NavBarProps) {
  const logOut = userStore((state) => state.logOut);
  const router = useRouter();

  const handleLogOut = () => {
    logOut();
    router.replace("/");
  };
  return (
    <Navbar
      className="py-2"
      classNames={{
        item: ["hover:bg-zinc-100", "p-2", "rounded-md"],
      }}
    >
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/assets/images/svg/logo.svg"
            width={160}
            height={100}
            alt="logo-duoeduca"
          />
        </Link>
      </NavbarBrand>

      <div className="flex items-center gap-5">
        <NavbarContent className="hidden gap-5 sm:flex" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/main" className="flex gap-1.5">
              <Trophy className="size-5" />
              Jogar
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="flex gap-1.5">
              <GraduationCap className="size-6" />
              Sobre
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="flex gap-1.5">
              <Map className="size-5" />
              Tutoriais
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          {user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger className="max-w-40">
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: `assets/images/png/avatars/${user?.avatar}.png`,
                  }}
                  className="transition-transform"
                  description={`@${user?.instituition.acronym}`}
                  name={
                    user?.name.length > 15
                      ? `${user?.name.substring(0, 15)}...`
                      : user?.name
                  }
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile-info" className="h-14 gap-2">
                  <p className="font-semibold">{user.name}</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>

                <DropdownItem
                  key="profile"
                  startContent={<User2 className="size-5" />}
                >
                  Meu perfil
                </DropdownItem>
                <DropdownItem
                  key="play"
                  className="text-green-600"
                  color="success"
                  startContent={<Play className="size-5" />}
                >
                  Jogar
                </DropdownItem>
                <DropdownItem
                  key="contact"
                  startContent={<ContactRound className="size-5" />}
                >
                  Contato
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  className="text-red-600"
                  startContent={<LogOut className="size-5" />}
                  onClick={handleLogOut}
                >
                  Sair
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button
              as={Link}
              className="bg-red-600 text-white"
              href="/login"
              variant="flat"
            >
              Entrar
              <LogIn className="size-4" />
            </Button>
          )}
        </NavbarContent>
      </div>
    </Navbar>
  );
}
