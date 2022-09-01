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
        Using this website to showcase some of the work that has been constructed during my time as a student of Nucamps Full Stack Web and Mobile Development.
      </SectionText>
      <Button onClick={() => window.location ="https://drive.google.com/file/d/1u4u3YpuxcyuV-8b_6E6kB_oMMH5VUQS1/view?usp=sharing"}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;