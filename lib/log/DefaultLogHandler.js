"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultLogHandler = /** @class */ (function() {
    function DefaultLogHandler() {
        this.verbose = function(source, message) {
            console.log(source, message);
        };
        this.info = function(source, message) {
            console.log(source, message);
        };
        this.warn = function(source, message) {
            console.log(source, message);
        };
        this.error = function(source, error) {
            console.log(source, error);
        };
    }
    return DefaultLogHandler;
})();
exports.default = DefaultLogHandler;
