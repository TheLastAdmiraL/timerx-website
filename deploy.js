const ghpages = require('gh-pages');

ghpages.publish('out', {
  dotfiles: true,
  ignore: [],
}, function(err) {
  if (err) {
    console.error('Deploy failed!', err);
  } else {
    console.log('Deploy successful!');
  }
});
