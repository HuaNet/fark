function farkPlugin(options) {

};

// 在插件函数的 prototype 上定义一个 `apply` 方法。
farkPlugin.prototype.apply = function (compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  console.log('-------------------------->')
  compiler.hooks.emit.tapAsync(
    'MyExampleWebpackPlugin',
    (compilation, callback) => {
      console.log('This is an example plugin!');
      // console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);

      // Manipulate the build using the plugin API provided by webpack
      // compilation.addModule(/* ... */);

      callback();
    }
  );
};
module.exports = farkPlugin
