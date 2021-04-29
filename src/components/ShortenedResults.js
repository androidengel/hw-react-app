import styled from "styled-components";

const ShortenedResultsStyles = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column-reverse;
  & p {
    line-height: 1;
  }
`;

const CopyButton = styled.button`
  width: fit-content;
  padding: 0 2rem;
  margin: 0 auto;
`;

const ResultsList = styled.div``;

const Result = styled.div`
  width: 100%;
  border: 1px solid var(--light-grey);
  padding: 5px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  & a {
    margin: auto 0;
  }
`;

const ShortenedResults = ({ data }) => {
  return (
    <ShortenedResultsStyles>
      <ResultsList className="inner-content">
        {data.allLinks.map((link) => {
          const shortenedUrl = `https://localhost:3000/${link.slug}`;
          return (
            <Result key={link.id}>
              <p>{link.url}</p>
              <a href={shortenedUrl}>{shortenedUrl}</a>
              <CopyButton
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(shortenedUrl);
                }}
              >
                Copy
              </CopyButton>
            </Result>
          );
        })}
      </ResultsList>
    </ShortenedResultsStyles>
  );
};

export default ShortenedResults;
