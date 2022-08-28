import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a sstyle={{ display:"flex", alightItems: "center", color: "white", marginBottom: "20px" }}>
          <DiCssdeck size="3rem" /> <Span>Kyle Frame</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/kjframe">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/kjframe">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
