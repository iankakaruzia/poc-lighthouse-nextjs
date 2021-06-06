module.exports = {
  ci: {
    collect: {
      url: [
        'https://d1f8hajf2xuhxa.cloudfront.net',
        'https://d1f8hajf2xuhxa.cloudfront.net/about'
      ],
      numberOfRuns: 1
    },
    upload: {
      target: 'filesystem',
      outputDir: `./lhci/lighthouse-report-${new Date().toISOString()}`
    }
  }
}
