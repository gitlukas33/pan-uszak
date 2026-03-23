const posts = [
  {
    title: "Teksty, które mówiła każda babcia",
    desc: "Krótka forma, która wywołała lawinę komentarzy.",
    link: "https://www.facebook.com/"
  },
  {
    title: "Jedzenie w proszku",
    desc: "Temat, który wraca częściej niż myślisz.",
    link: "https://www.facebook.com/"
  },
  {
    title: "Urodziny kiedyś",
    desc: "Małe rzeczy, które robiły klimat.",
    link: "https://www.facebook.com/"
  }
];

const blog = document.getElementById("blog");

// funkcja do pobierania miniaturki
function getThumbnail(url) {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`;
}

posts.forEach(post => {
  const thumb = getThumbnail(post.link);

  blog.innerHTML += `
    <div class="post" onclick="window.open('${post.link}', '_blank')">
      <img src="${thumb}" onerror="this.src='https://picsum.photos/400/300?random=${Math.random()}'">
      <div class="post-content">
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
      </div>
    </div>
  `;
});