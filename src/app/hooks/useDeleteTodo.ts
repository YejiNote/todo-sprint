import useSWRMutation from "swr/mutation";
import { deleteFetcher } from "@/app/lib/fetchers/deleteFetcher";

export default function useDeleteTodo(itemId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/items/${itemId}`;
  const { trigger, isMutating, error } = useSWRMutation(url, deleteFetcher);

  return {
    deleteTodo: trigger,
    isMutating,
    error,
  };
}