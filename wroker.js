export default {
  async fetch(request, env, ctx) {
    // Ganti dengan URL Blogger kamu
    const bloggerURL = "https://www.motren.id" + new URL(request.url).pathname;

    // Ambil konten dari Blogger
    let response = await fetch(bloggerURL);
    let html = await response.text();

    // Hapus semua komentar HTML
    html = html.replace(/<!--[\s\S]*?-->/g, "");

    return new Response(html, {
      headers: { "Content-Type": "text/html" }
    });
  }
};
