import useSWR from "swr";
import { TodoDetail } from "@/app/types/todoDetail";
import { getFetcher } from "@/app/lib/fetchers/getFetcher";

export default function useTodoDetail(itemId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/items/${itemId}`;

  const { data, error, isLoading } = useSWR<TodoDetail>(url, getFetcher);

  return {
    todo: data,
    isLoading,
    isError: error,
  };
}
