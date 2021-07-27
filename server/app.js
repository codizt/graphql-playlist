const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PWD}@cluster0.fmkwd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
mongoose.connection.once('open', ()=>{
  console.log("connected");
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000,()=>{
  console.log('Now listening for requests');
})
