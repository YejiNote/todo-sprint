export const directPostFetcher = async (
    url: string,
    body: any
  ): Promise<any> => {
    const isFormData = body instanceof FormData;
  
    //swr 안 거치고 바로 통신
    const res = await fetch(url, {
      method: "POST",
      headers: isFormData
        ? undefined
        : {
            "Content-Type": "application/json",
          },
      body: isFormData ? body : JSON.stringify(body),
    });
  
    if (!res.ok) {
      throw new Error("POST 요청 실패");
    }
  
    return res.json();
  };