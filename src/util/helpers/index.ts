async function fetcher<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  console.log("what is input", input, init);
  const res = await fetch(input, init);
  return res.json();
}

export { fetcher };
