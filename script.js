const posts = [
  {
    title: "Prowiant na szkolną wycieczkę",
    desc: "Herbatę dostawaliście w bidonie czy termosie?",
    link: "https://www.facebook.com/reel/953704023787541"
  },
  {
    title: "W tajemnicy przed rodzicami",
    desc: "Czym nie chcieliśmy się chwalić",
    link: "https://www.facebook.com/reel/1609200820225566"
  },
  {
    title: "Kultowe teksty babci",
    desc: "Bo każda babcia miała swoje powiedzonka",
    link: "https://www.facebook.com/reel/1691980625001195"
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
