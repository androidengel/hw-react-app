import styled from "styled-components";
import React, { useState } from "react";
import useForm from "../hooks/useForm";

const UrlShortenerStyles = styled.div`
  background: var(--black);
  color: white;
`;

const UrlShortener = () => {
  const { inputs, handleChange, clearForm } = useForm();

  return (
    <UrlShortenerStyles>
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
      <button type="submit">Shorten my URL</button>
    </UrlShortenerStyles>
  );
};

export default UrlShortener;
