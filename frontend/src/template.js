module.exports = (title, { css, html }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
        *, ::after, ::before {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        body {
          color: #404d5b;
          font-weight: 500;
          font-size: 1.05em;
          font-family: 'Raleway', Arial, sans-serif;
          margin: 0;
        }
      </style>
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
