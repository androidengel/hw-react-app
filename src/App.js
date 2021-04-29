import "./styles.css";
import { useQuery, gql } from "@apollo/client";
import PageLayout from "./components/PageLayout";
import Hero from "./components/Hero";
import UrlShortener from "./components/UrlShortener";

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
    <PageLayout>
      <div className="container">
        <div className="inner-content">
          <Hero />
          <UrlShortener />
          {data.allLinks.map((link) => {
            return (
              <p key={link.id}>
                {link.url} --- {link.slug}
              </p>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
