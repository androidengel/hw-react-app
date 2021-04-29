import "./styles.css";
import { useQuery, gql } from "@apollo/client";

const ALL_RECIPES = gql`
  query GetAllRecipes {
    recipe(id: 1) {
      id
      ingredients
    }
  }
`;

export default function App() {
  const { loading, err, data } = useQuery(ALL_RECIPES);
  console.log(JSON.stringify(data));
  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error!</p>;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{data.recipe}</p>
    </div>
  );
}
