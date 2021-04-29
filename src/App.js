import "./styles.css";
import { useQuery, gql } from "@apollo/client";
import PageLayout from "./components/PageLayout";
import Hero from "./components/Hero";
import UrlShortener from "./components/UrlShortener";
import ShortenedResults from "./components/ShortenedResults";

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
  const { loading, err, data, refetch } = useQuery(ALL_LINKS);
  console.log(JSON.stringify(data));
  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error!</p>;

  return (
    <PageLayout className="container">
      <div>
        <div>
          <Hero />
          <UrlShortener refetch={refetch} />
          <ShortenedResults data={data} />
        </div>
      </div>
    </PageLayout>
  );
}
