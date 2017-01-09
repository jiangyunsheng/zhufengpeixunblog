var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    models = require('./models');
mongoose.connect("mongodb://localhost:27017/zhufengblog");
mongoose.model('User', new Schema(models.User));
mongoose.model('Article', new Schema(models.Article));
global.Model = function (type) {
        return mongoose.model(type);;
    }
