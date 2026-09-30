const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();
const cors = require("cors");
// CORS CONFIGURATION // 

app.use( cors({ origin: "http://localhost:5173", methods: ["GET", "POST", "OPTIONS"], allowedHeaders: ["Content-Type"], }) );

const users = [
    {
        id: "1",
        name: "brijesh",
        email: "brijesh@gmail.com",
        age: 36
    },
    {
        id: "2",
        name: "twinkle",
        email: "twinkle@gmail.com",
        age: 20
    },
    {
        id: "3",
        name: "hetvi",
        email: "hetvi@gmail.com",
        age: 19
    },
    {
        id: "4",
        name: "aksh",
        email: "aksh@gmail.com",
        age: 21
    },
    {
        id: "5",
        name: "rohan",
        email: "rohan@gmail.com",
        age: 21
    },
    {
        id: "6",
        name: "kumar",
        email: "kumar@gmail.com",
        age: 22
    }
];

const schema = buildSchema(`
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
    }
`);

const root = {
    users: () => users,

    // user: ({ id }) => {
    //     return users.find(user => user.id === id);
    // },

    // get a single user data 
    user:({id})=>{
        return users.find(
            user=>user.id===id
        )
    }
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(3000, () => {
    console.log("Server running:");
    console.log("http://localhost:3000/graphql");
});

// api url
/*
http://localhost:3000/graphql

*/