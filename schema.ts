import {GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';

const schema = new GraphQLSchema({

  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),


  // product: new GraphQLObjectType({
  //   name: 'Product',
  //   fields: {
  //     displayName: {
  //       type: GraphQLString,
  //       resolve: (name) => name,
  //     }
  //   },
  // }),

});

export default schema