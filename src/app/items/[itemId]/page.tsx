"use client";
import { use } from "react";
import TodoDetail from "@/app/components/TodoDetail";

export default function TodoDetailPage({
  params,
}: {
  params: Promise<{ itemId: number }>;
}) {
  const { itemId } = use(params);
  return <TodoDetail itemId={itemId} />;
}
