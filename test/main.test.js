function once(fn) {
    var returnValue,
        called = false;
    return function() {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}
describe("hello", function() {
    it("calls original function with right this and args", function() {
        var callback = sinon.fake();
        var proxy = once(callback);
        var obj = {};

        proxy.call(obj, 1, 2, 3);

        assert(callback.calledOn(obj));
        assert(callback.calledWith(1, 2, 3));
    });
});
