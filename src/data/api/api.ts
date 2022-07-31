export const api = async (uri: string, method: string) => {
  const data = await fetch(uri, {
    method: method,
  });
  const jsonData = await data.json();
  return jsonData;
};
