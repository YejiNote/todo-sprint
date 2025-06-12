import useSWRMutation from "swr/mutation";
import { postFetcher } from "@/app/lib/fetchers/postFetcher";

export default function useAddTodo() {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/items`;

  const { trigger, isMutating, error } = useSWRMutation(url, postFetcher);

  return {
    addTodo: trigger,
    isMutating,
    error,
  };
}
