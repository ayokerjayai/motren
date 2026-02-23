export default {
  async fetch(request, env, ctx) {
    const urlObj = new URL(request.url);
    const params = urlObj.searchParams;

    // --- LOGIKA 1: API LISENSI (Jika ada parameter 'key') ---
    if (params.has('key')) {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      };

      if (request.method === "OPTIONS") return new Response(null, { headers });

      const key = (params.get('key') || "").trim();
      const url = (params.get('url') || "").trim();
      const id = (params.get('id') || "").trim();

      const blogId = "2135615964277429209";
      const pageId = "3765210535652439527";
      const dbUrl = `https://www.blogger.com/feeds/${blogId}/pages/default/${pageId}?alt=json`;

      try {
        const res = await fetch(dbUrl);
        const raw = await res.json();
        const db = JSON.parse(raw.entry.content.$t.replace(/<[^>]*>?/gm, ''));
        
        const owner = db.user.find(u => u.key === key);
        const isValid = owner && owner.url === url && owner.id === id;

        if (isValid) {
          return new Response(JSON.stringify({ success: { message: "Licence is valid", origin: url, callback: owner.callback } }), { headers });
        } else {
          return new Response(JSON.stringify({ error: { message: "Invalid Licence", url: owner ? owner.callback : "https://www.motren.id" } }), { headers });
        }
      } catch (e) {
        return new Response(JSON.stringify({ error: { message: "Error undefined" } }), { headers });
      }
    }

    // --- LOGIKA 2: PROXY & AUTO MINIFY (Jika akses biasa) ---
    const bloggerURL = "https://www.motren.id" + urlObj.pathname;
    let response = await fetch(bloggerURL, {
      headers: { "Host": "ghs.google.com" }
    });

    let html = await response.text();

    // 1. Hapus Komentar Iklan (Logika lama lo)
    html = html.replace(//gi, "");
    html = html.replace(//gi, "");

    // 2. Auto Minify Sederhana (Hapus baris baru dan spasi berlebih)
    // Trik: Hapus whitespace antar tag, tapi hati-hati jangan ngerusak <pre> atau <script>
    html = html
      .replace(/>\s+</g, '><') // Hapus spasi antar elemen
      .replace(/\s{2,}/g, ' ') // Ganti spasi ganda jadi satu spasi
      .replace(/\n/g, '');     // Hapus line breaks (Baris baru)

    return new Response(html, {
      headers: { "Content-Type": "text/html" }
    });
  }
};
