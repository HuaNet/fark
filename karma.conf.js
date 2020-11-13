// Karma configuration

module.exports = function(config) {
    // let customLaunchers = {
    //   sl_chrome: {
    //     base: "SauceLabs",
    //     browserName: "chrome",
    //     platform: "Windows 7",
    //     version: "35"
    //   },
    //   sl_firefox: {
    //     base: "SauceLabs",
    //     browserName: "firefox",
    //     version: "30"
    //   },
    //   sl_ios_safari: {
    //     base: "SauceLabs",
    //     browserName: "iphone",
    //     platform: "OS X 10.9",
    //     version: "7.1"
    //   },
    //   sl_ie_11: {
    //     base: "SauceLabs",
    //     browserName: "internet explorer",
    //     platform: "Windows 8.1",
    //     version: "11"
    //   },
    //   sl_android: {
    //     base: "SauceLabs",
    //     browserName: "Browser",
    //     platform: "Android",
    //     version: "4.4",
    //     deviceName: "Samsung Galaxy S3 Emulator",
    //     deviceOrientation: "portrait"
    //   }
    // };

    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["mocha", "sinon", "chai"],

        // list of files / patterns to load in the browser
        files: [
            // {
            //   pattern: 'test/**/*.spec.js',
            //   watched: false,
            // },
            "test/**/*.test.js"
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "test/**/*.test.js": ["babel", "rollupNode", "coverage"]
            //      "test/**/*.spec.js": ["babel", "rollupNode", "coverage"]
        },
        rollupPreprocessor: {
            format: "iife",
            name: "ZSearch",
            plugins: [require("rollup-plugin-buble")()]
        },
        customPreprocessors: {
            rollupNode: {
                base: "rollup",
                options: {
                    plugins: [
                        require("rollup-plugin-eslint")(),
                        require("rollup-plugin-commonjs")({
                            include: "node_modules/**",
                            extensions: [".js"]
                        }),
                        require("rollup-plugin-node-resolve")({
                            module: true,
                            jsnext: true,
                            // builtins: false,
                            main: true,
                            browser: true,
                            extensions: [".js", ".json"]
                        }),
                        require("rollup-plugin-flow")({
                            pretty: true
                        }),
                        require("rollup-plugin-json")(),
                        require("rollup-plugin-node-globals")(),
                        require("rollup-plugin-node-builtins"),
                        require("rollup-plugin-babel")({
                            exclude: "node_modules/**",
                            runtimeHelpers: true,
                            externalHelpers: true
                        }),
                        require("rollup-plugin-replace")({
                            "process.env.NODE_ENV": JSON.stringify("production")
                        })
                    ]
                }
            }
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["progress", "junit", "coverage"],
        coverageReporter: {
            type: "cobertura",
            dir: "coverage/"
        },
        junitReporter: {
            outputDir: "junit/",
            // will be resolved to basePath (in the same way as files/exclude patterns)
            outputFile: "test-results.xml"
        },
        //
        // coverageReporter: {
        //   reporters: [
        //     {
        //       types: "text-summary"
        //     },
        //     {
        //       types: "html",
        //       dir: "test/coverage"
        //     },
        //     {
        //       types: "cobertura",
        //       subdir: ".",
        //       dir: "test/coverage"
        //     }
        //   ]
        // },
        babelPreprocessor: {
            options: {
                presets: ["es2015", "stage-0"],
                plugins: ["transform-runtime"]
            }
        },
        // web server port
        port: 9900,
        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // sauceLabs: {
        //   testName: "ZSearch",
        //   recordScreenshots: false,
        //   connectOptions: {
        //     port: 5757,
        //     logfile: "sauce_connect.log"
        //   },
        //   public: "public",
        //   build: "build-1234",
        //   startConnect: false,
        //   tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
        // },
        // customLaunchers: customLaunchers,
        // // start these browsers
        // // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: Object.keys(customLaunchers),
        browsers: ["PhantomJS"],

        plugins: [
            "karma-saucelabs-launcher",
            "karma-sauce-launcher",
            "karma-mocha",
            "karma-chai",
            "karma-sinon",
            "karma-babel-preprocessor",
            "karma-rollup-preprocessor",
            "karma-phantomjs-launcher",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-ie-launcher",
            "karma-safari-launcher",
            "karma-junit-reporter",
            "karma-coverage"
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
        // startConnect: false,
        // tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
    });
};
