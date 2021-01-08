import NextLink from 'next/link';
import styled from 'styled-components';
import { space } from 'styled-system';
import Typography from '../Typography';
import { media } from '../../lib/index';
import Button from '../Button';

const Navbar = styled.header`
width: 90%;
height: 7rem;
top: 0;
left: 0;
background: white;
text-align: right;
z-index: 3;
border-bottom: 1px solid rgb(222, 226, 230);
display: flex;
justify-content: space-between;
align-items: center;
`;

const HeaderLink = styled.a`
border: none;
background: none;
font-family: 'Suisse Intl', sans-serif;
color: #404040;
font-size: 1rem;
cursor: pointer;
outline: none;
text-decoration: none;
text-align: left;
${space}

&.active {
  cursor: default;
}

&:focus {
  box-shadow: inset 0 0 0 2px #c0c0c0;
}

&:hover {
  color: black;
}

${media.xs`
  font-size: 0.8rem;
`}
`;

const LogoContainer = styled.div`
z-index: 1;
display: flex;
flex-direction: column;
padding-left: 1rem;
padding-right: 1rem;
flex-basis: 33%;
flex-shrink: 2;
`;

const Logo = styled(HeaderLink)`
z-index: 1;
font-size: 1.2rem;
${media.xs`
  font-size: 1rem;
`}
`;

const LogoH2 = styled(HeaderLink)`
text-align: left;
font-size: 0.8rem;
${media.xs`
  display: none;
`}
`;

const ButtonWrapper = styled('div')`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
text-align: center;
`;

const Header = () => (
  <Navbar>
    <LogoContainer>
      <NextLink href="/" passHref>
        <Logo>US-Iran Relations</Logo>
      </NextLink>
      <NextLink href="/" passHref>
        <LogoH2>National Narratives, America, Iran, and the Clash of Civilizations</LogoH2>
      </NextLink>
    </LogoContainer>
    <LogoContainer>
      <ButtonWrapper>
        <NextLink href="/timeline" passHref>
          <HeaderLink mr={(3)}>Timeline</HeaderLink>
        </NextLink>
        <NextLink href="/essays" passHref>
          <HeaderLink mr={(3)}>Essays</HeaderLink>
        </NextLink>
        <Button href={process.env.NEXT_PUBLIC_ARCHIVE_URL}>
          <Typography color="typoAccent" type="button">
            Archive
          </Typography>
        </Button>
        <NextLink href="/about" passHref>
          <HeaderLink ml={(3)}>About</HeaderLink>
        </NextLink>
      </ButtonWrapper>
    </LogoContainer>
  </Navbar>
);

export default Header;
