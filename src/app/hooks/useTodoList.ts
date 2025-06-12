import useSWR from "swr";
import { TodoList } from "../types/todoList";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  console.log("✅ Response:", res.status);
  if (!res.ok) {
    throw new Error(`API error! status: ${res.status}`);
  }

  const data = await res.json();
  console.log("📦 Data:", data);
  return data;
};

export default function useTodos(page = 1, pageSize = 10) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = `${baseUrl}/items?page=${page}&pageSize=${pageSize}`;

  const { data, error, isLoading } = useSWR<TodoList[]>(url, fetcher);
  console.log("Data:", data); // ✅ 실제 응답 확인

  if(error){
    console.log("Error:", error);
  }

  return {
    todoList: data,
    isLoading,
    isError: error,
  };
}
