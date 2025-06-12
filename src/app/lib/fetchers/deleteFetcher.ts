// DELETE 요청용 fetcher

export const deleteFetcher = async (url: string): Promise<void> => {
  const res = await fetch(url, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("삭제 요청 실패");
  }

  const data = await res.json();
};
