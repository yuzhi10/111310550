export function layout(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${title}</title>
      <style>
        body { font-family: sans-serif; padding: 2em; max-width: 800px; margin: auto; }
        h1, h2 { color: #333; }
        a { text-decoration: none; color: #0077cc; }
        .article { margin-bottom: 2em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }
        .timestamp { color: gray; font-size: 0.9em; }
        textarea, input { width: 100%; padding: 0.5em; margin: 0.5em 0; }
        button { padding: 0.5em 1em; }
      </style>
    </head>
    <body>
      <h1>${title}</h1>
      ${content}
    </body>
    </html>
  `;
}

export function list(articles) {
  let content = `<a href="/article/new">📝 New Article</a>`;
  for (const article of articles) {
    content += `
      <div class="article">
        <h2><a href="/article/${article.id}">${article.title}</a></h2>
        <div class="timestamp">Created at: ${article.created_at.toLocaleString()}</div>
        <p>${article.body.substring(0, 100)}...</p>
      </div>
    `;
  }
  return layout("Article List", content);
}

export function newArticle() {
  return layout("New Article", `
    <form action="/article" method="POST">
      <p><input type="text" name="title" placeholder="Title" required /></p>
      <p><textarea name="body" rows="10" placeholder="Write something thoughtful..." required></textarea></p>
      <p><button type="submit">Save</button></p>
    </form>
  `);
}

export function detail(article) {
  return layout(article.title, `
    <div class="timestamp">Created at: ${article.created_at.toLocaleString()}</div>
    <p>${article.body}</p>
    <p><a href="/">← Back to list</a></p>
  `);
}

  
