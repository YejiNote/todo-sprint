// POST 요청용 fetcher
export const postFetcher = async (url: string, { arg }: { arg: any }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  });

  if (!res.ok) {
    throw new Error("POST 요청 실패");
  }

  return res.json();
};
