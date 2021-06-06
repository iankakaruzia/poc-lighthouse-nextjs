module.exports = {
  ci: {
    collect: {
      url: [
        'https://d1f8hajf2xuhxa.cloudfront.net',
        'https://d1f8hajf2xuhxa.cloudfront.net/about'
      ]
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci'
    }
  }
}
