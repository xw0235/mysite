exports.list = function (req, res, next) {
  const Category = req.app.db.Category;
  Category.find((err, results) => {
    if (err) {
      return next(err);
    }
    res.send(results);
  });
}

exports.add = function (req, res, next) {
  const { name, type, parent } = req.body;
  const Category = req.app.db.Category;
  let category = new Category();

  category.name = name;
  category.type = type;
  category.parent = parent || '#';

  category.save(err => {
    if (err) {
      res.send({
        success: false,
        message: '插入失败'
      });
      return;
    }
    res.send(category);
  });
}