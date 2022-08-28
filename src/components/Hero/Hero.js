import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Using this website to showcase some of the work that has been constructed during my time as a learning software developer.
      </SectionText>
      <Button onClick={() => window.location ="https://github.com/kjframe"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;