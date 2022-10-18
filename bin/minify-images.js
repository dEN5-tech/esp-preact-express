const fs = require('fs');
const imagemin = require('imagemin');

const plugins = [
  [
    'imagemin-jpegtran',
    {
      progressive: true,
    },
  ],
  [
    'imagemin-optipng',
    {
      optimizationLevel: 5,
    },
  ],
  [
    'imagemin-svgo',
    {
      plugins: [{ removeViewBox: false }],
    },
  ],
].map(it => require(it[0])(it[1]));

const minifyFile = filename =>
  new Promise((resolve, reject) =>
    fs.readFile(filename, (err, data) => (err ? reject(err) : resolve(data)))
  )
    .then(originalBuffer =>
      imagemin.buffer(originalBuffer, { plugins }).then(minimizedBuffer => {
        return {
          minimized: minimizedBuffer.length !== originalBuffer.length,
          originalSize: originalBuffer.length,
          minimizedBuffer,
        };
      })
    )
    .then(({ minimized, originalSize, minimizedBuffer }) => {
      return new Promise((resolve, reject) => {
        fs.writeFile(filename, minimizedBuffer, err => (err ? reject(err) : resolve()));
      });
    });

Promise.resolve(process.argv)
  .then(args => args.slice(2))
  .then(file => file.map(minifyFile))
  .then(promise => Promise.all(promise))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
