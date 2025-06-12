// PATCH 요청용 fetcher
export const patchFetcher = async (url: string, body: any) => {
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("PATCH 요청 실패");
  }

  return res.json();
};
