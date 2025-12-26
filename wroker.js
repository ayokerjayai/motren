export default {
  async fetch(request, env, ctx) {
    const bloggerURL = "https://www.motren.id" + new URL(request.url).pathname;

    // fetch dengan Host header override
    let response = await fetch(bloggerURL, {
      headers: {
        "Host": "ghs.google.com"  // pastikan Blogger mengenali request
      }
    });

    let html = await response.text();
    html = html.replace(/<!--[\s\S]*?-->/g, "");

    return new Response(html, { headers: { "Content-Type": "text/html" } });
  }
};
