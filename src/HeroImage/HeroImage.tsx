import React from 'react';
import styled from 'styled-components';

interface HeroImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const HeroImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 8px;
  text-align: center;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, caption }) => {
  return (
    <HeroImageWrapper>
      <Image src={src} alt={alt} />
      {caption && <Caption>{caption}</Caption>}
    </HeroImageWrapper>
  );
};

export default HeroImage;
