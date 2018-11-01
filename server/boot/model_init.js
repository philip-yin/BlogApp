
module.exports = function(app) {

  app.dataSources.mongoDs.automigrate('Category', function(err) {
    if (err) throw err;

    app.models.Category.create([{
      name: 'Science'
    }, {
      name: 'Philosophy'
    }, {
      name: 'Game'
    }], function(err, Categories) {
      if (err) throw err;

      console.log('Models created: \n', Categories);
    });
  });


  app.dataSources.mongoDs.automigrate('Article', function(err) {
    if (err) throw err;

    app.models.Category.create([{
      name: 'Article 1'
    }, {
      name: 'Article 2'
    }, {
      name: 'Article 3'
    }], function(err, Categories) {
      if (err) throw err;

      console.log('Models created: \n', Categories);
    });
  });
};