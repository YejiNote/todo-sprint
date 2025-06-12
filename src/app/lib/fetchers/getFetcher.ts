// GET 요청용 fetcher
export const getFetcher = async (url: string) => {
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error("GET 요청 실패");
    }
  
    return res.json();
  };