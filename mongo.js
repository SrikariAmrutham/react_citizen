const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const url="mongodb+srv://user1:kmit123@cluster0.bgx4pod.mongodb.net/VehicleRegistration?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {console.log("CON")}).catch( () => {console.log("NOR CON")});

const Schema = mongoose.Schema;
const itemSchema = new Schema({
    email:String,
    address:String,
    email:String
  }, 
  {collection: "Users"}
  );

  const Item = mongoose.model("", itemSchema);

Item.find({}, (err, items) => {
  if(err) console.warn(err);
  console.log(items);
});