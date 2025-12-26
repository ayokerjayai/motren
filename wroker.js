export default {
  async fetch(request, env, ctx) {
    // Fetch konten asli dari Blogger
    const bloggerURL = "https://www.motren.id" + new URL(request.url).pathname;

    let response = await fetch(bloggerURL, {
      headers: {
        "Host": "ghs.google.com" // Agar Blogger mengenali request
      }
    });

    let html = await response.text();

    // Hapus komentar tertentu (contoh: adsense/meta)
    html = html.replace(/<!--[\s\S]*?google-adsense[\s\S]*?-->/gi, ""); 
    html = html.replace(/<!--[\s\S]*?data-ad-client[\s\S]*?-->/gi, ""); 

    // Bisa tambahkan regex lain jika ada komentar spesifik lain

    return new Response(html, {
      headers: { "Content-Type": "text/html" }
    });
  }
};
