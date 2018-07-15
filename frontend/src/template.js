module.exports = (title, { css, html }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style data-aphrodite>${css.content}</style>
    </head>
    <body>
      <div class="content">
        <div id="app">
          ${html}
        </div>
      </div>
      <script>
        window.APHRODITE_STYLES = ${JSON.stringify(css.renderedClassNames)};
      </script>
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?language=en&region=uk&libraries=places&key=AIzaSyAja_N-E4tPCP0xxyZxkW9IPAq4YMjhHFE"></script>
      <script src="dist/main.js"></script>
    </body>
  </html>
`;
