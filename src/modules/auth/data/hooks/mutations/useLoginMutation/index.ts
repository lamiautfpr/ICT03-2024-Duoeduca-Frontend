import { useMutation } from "react-query";
import { AuthService } from "../../../services/auth";
import { ILoginSchema } from "../../../services/auth/schemas";

export function useLoginMutation() {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: ILoginSchema) => {
      const service = new AuthService()
      return service.login(data)
    }
  })
}