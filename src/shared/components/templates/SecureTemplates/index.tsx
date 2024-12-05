import { userStore } from "@/data/states/zustand/user";
import NavBar from "../../NavBar";
import { Props } from "../../types";

export default function SecureTemplatesComponents({ children }: Props) {
  const user = userStore();

  return (
    <div>
      <NavBar user={user.data} />
      <div>{children}</div>
    </div>
  );
}
