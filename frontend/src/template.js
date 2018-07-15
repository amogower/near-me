module.exports = (title, content = '') => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    <body>
      <div class="content">
        <div id="app">
          ${content}
        </div>
      </div>
      <script src="dist/main.js"></script>
    </body>
  </html>
`;
