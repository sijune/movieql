import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    //schema: 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명
    typeDefs: "graphql/schema.graphql",
    //resolver: nodejs에서 프로그래밍을 해야한다.
    resolvers
});

server.start(() => console.log("Graphql Server Running"));