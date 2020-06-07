const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this); //获取参数值
  const callback = this.async() //异步调用

  setTimeout(()=>{
    const result = source.replace('name', options.name);
  
    callback(null, result);
  },1000)
  
}