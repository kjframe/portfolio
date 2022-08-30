import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Img } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Nucamp Certificates', },
  { number: 2, text: 'Completed personal projects', },
  { number: 4, text: 'Completed Nucamp Courses', },
  { number: 4, text: 'Nucamp Badges of Completion', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
