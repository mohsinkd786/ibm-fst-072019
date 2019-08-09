const mongooseConn = require('mongoose');
mongooseConn.connect("mongodb://localhost:27017/ibm_training");

const mongooseSchema = new mongooseConn.Schema({
    id: mongooseConn.SchemaTypes.Number,
    name: mongooseConn.SchemaTypes.String
});

const MongooseModel = mongooseConn.model('mongoose',mongooseSchema);

const addItem = ()=>{
    const moObj = new MongooseModel({
        id : 10
    });
    return MongooseModel.create(moObj);
}

module.exports={
    _add: addItem
}