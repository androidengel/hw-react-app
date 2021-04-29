import "./styles.css";
import { useQuery, gql } from "@apollo/client";

const ALL_LINKS = gql`
  query GetAllLinks {
    allLinks {
      id
      url
      slug
    }
  }
`;

export default function App() {
  const { loading, err, data } = useQuery(ALL_LINKS);
  console.log(JSON.stringify(data));
  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error!</p>;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.allLinks.map((link) => {
        return (
          <p key={link.id}>
            {link.url} --- {link.slug}
          </p>
        );
      })}
    </div>
  );
}
