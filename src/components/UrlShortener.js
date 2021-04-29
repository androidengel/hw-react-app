import styled from "styled-components";
import React, { useState } from "react";

const UrlShortenerStyles = styled.div`
  background: var(--black);
  color: white;
`;

const UrlShortener = () => {
  return (
    <UrlShortenerStyles>
      <input type="text" name="url" placeholder="Enter URL here..." required />
      <input type="text" name="slug" placeholder="Custom slug (optional)" />
      <button type="submit">Shorten my URL</button>
    </UrlShortenerStyles>
  );
};

export default UrlShortener;
