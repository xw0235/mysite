/**
 * 
 */
const fs = require('fs');
const path = require('path');

// 获取指定文件夹下所有文件
function get_file_path (folder, arr) {
  let results = fs.readdirSync(folder);
  results.forEach(result => {
    let p = path.resolve(folder, result);
    let stat = fs.statSync(p);
    if (stat.isFile()) {
      arr.push(p);
    } else {
      get_file_path(p, arr);
    }
  });
}

// 添加路由
module.exports = function add_router (app, folder) {
  const filePath = [];
  get_file_path(folder, filePath);
  filePath.forEach((fp => {
    let controller = require(fp);
    for (let name in controller) {
      let index = name.indexOf('_');
      let verb = name.slice(0, index);
      let routerPath = `${fp.slice(folder.length).split('.')[0]}/${name.slice(index + 1)}`;
      let method = controller[name];
      app[verb](routerPath, method);
    }
  }));
}
