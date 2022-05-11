export async function storefront(query: string, variables = {}) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": "3dc2185e8275551600b54b98da2fcdcc",
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}
