module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // Polyfills.
      'node_modules/es6-shim/es6-shim.js',

      'node_modules/reflect-metadata/Reflect.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js dependencies
		'node_modules/zone.js/dist/zone.js',        
        'node_modules/zone.js/dist/long-stack-trace-zone.js',
        'node_modules/zone.js/dist/async-test.js',
        'node_modules/zone.js/dist/fake-async-test.js',
        'node_modules/zone.js/dist/sync-test.js',
        'node_modules/zone.js/dist/proxy-zone.js',
        'node_modules/zone.js/dist/proxy.js',
        'node_modules/zone.js/dist/jasmine-patch.js',


      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },


      {pattern: 'karma-test-shim.js', included: true, watched: true},
      {pattern: 'assets/test/matchers.ts', included: true, watched: true},

      // paths loaded via module imports
      // Angular itself
      //{pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
      //{pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},

      // Our assets application code
      {pattern: 'assets/**/*.ts', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'assets/**/*.html', included: false, watched: true},
      {pattern: 'assets/**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'assets/**/*.ts', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assets fetched by Angular's compiler
      "/app/": "/assets/app/"
    },

    reporters: ['progress'],
    port: 9999,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
