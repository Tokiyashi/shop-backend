import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import * as mongoose from "mongoose";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

mongoose.connect('mongodb+srv://rogich6319:Rog9524342147@cluster0.xbmdhcx.mongodb.net/test')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error'))
db.once('open', () => {
  console.log('📁 MongoDB Connected')
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const index = async () => {
  const {url} = await startStandaloneServer(server, {
    listen: {port: 5000},
  });

  console.log(`🚀  Server ready at: ${url}`);
}

void index();