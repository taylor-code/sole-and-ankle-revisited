import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, WEIGHTS } from '../../constants';

import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';
import { ShoeBreadcrumbs } from './ShoeBreadcrumbs';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <DesktopSidebar>
        <ShoeBreadcrumbs />
        <Spacer size={42} />
        <ShoeSidebar />
      </DesktopSidebar>
      <MobileSidebar>
        <ShoeBreadcrumbs />
      </MobileSidebar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const DesktopSidebar = styled.div`
  flex-basis: 248px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const MobileSidebar = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
