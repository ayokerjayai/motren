export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("text/html")) {
      let html = await response.text();
      html = html.replace(/<!--[\s\S]*?-->/g, "");
      return new Response(html, { headers: response.headers });
    }

    return response;
  }
};
