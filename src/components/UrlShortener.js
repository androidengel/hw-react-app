import styled from "styled-components";
import React from "react";
import useForm from "../hooks/useForm";
import { useMutation, gql } from "@apollo/client";

const SHORTEN_URL_MUTATION = gql`
  mutation SHORTEN_URL_MUTATION($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

const UrlShortenerStyles = styled.div`
  background: var(--black);
  color: white;
`;

const UrlShortener = ({ refetch }) => {
  const { inputs, handleChange, clearForm } = useForm();
  const [createLink, { data, loading }] = useMutation(SHORTEN_URL_MUTATION);

  return (
    <UrlShortenerStyles>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const linkData = await createLink({
            variables: { url: inputs.url, slug: inputs.slug }
          });
          refetch();
          console.log(linkData);
        }}
      >
        <input
          type="text"
          name="url"
          placeholder="Enter URL here..."
          onChange={handleChange}
          value={inputs.url}
          required
        />
        <input
          type="text"
          name="slug"
          placeholder="Custom slug (optional)"
          onChange={handleChange}
          value={inputs.slug}
        />
        <button type="submit" disabled={loading}>
          Shorten my URL
        </button>
      </form>
    </UrlShortenerStyles>
  );
};

export default UrlShortener;
