import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
export default function FetchData() {
  const [data, setdata] = useState(null);
  const [one, setone] = useState("one");
  const client = new ApolloClient({
    uri: "https://khoros-graphql-api.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });
  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            messages {
              size
              items {
                type
                id
                subject
                body
              }
            }
          }
        `,
      })
      .then((result) => {
        setone(null);
        setdata(result.data.messages.items);
        console.log(result.data.messages.items);
      }, []);
  });
  console.log(data)
  return (
    <ApolloProvider client={client}>
      <div>
        <h1 style={{textAlign:"center"}}>Using Apollo Client app </h1>
        {data&&data.map((item, index) => {
          return (<div key={index}>
            <div>Id :{item.id}</div>
            <div>Subject :{item.subject}</div>
           
            <div>Body : <div dangerouslySetInnerHTML={{__html:item?.body}} /></div>
            <hr />
          </div>)
        })}
      </div>
    </ApolloProvider>
  );
}
