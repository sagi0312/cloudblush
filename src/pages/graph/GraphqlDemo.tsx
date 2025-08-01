import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

// Apollo Client setup
const client = new ApolloClient({
  uri: "http://localhost:4000", // Your GraphQL server
  cache: new InMemoryCache(),
});

// GraphQL query
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      first_name
      last_name
      username
    }
  }
`;

// Component that displays users
const UsersList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users from GraphQL</h2>
      <div style={{ display: "grid", gap: "10px" }}>
        {data.users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main component wrapped with Apollo Provider
const GraphqlDemo = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>GraphQL Demo</h1>
        <UsersList />
      </div>
    </ApolloProvider>
  );
};

export default GraphqlDemo;
