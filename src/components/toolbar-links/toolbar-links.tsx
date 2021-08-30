import styled from '@emotion/styled';

import { Component } from '~/elements/fc';
import { ToolbarLink } from '~/elements/toolbar-link';

const ToolbarLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

export const ToolbarLinks: Component = () => {
  return (
    <ToolbarLinksContainer>
      <ToolbarLink
        to={'/blog'}
        gradientColor={'blue-to-green'}
        emoji={'📝'}
        label={'Blog'}
        active
      />
      <ToolbarLink
        to={'/uses'}
        gradientColor={'yellow-to-orange'}
        emoji={'⚡️'}
        label={'Uses'}
      />
      <ToolbarLink
        to={'/donate'}
        gradientColor={'red-to-purple'}
        emoji={'🧡'}
        label={'Donate'}
      />
      <ToolbarLink
        to={'/contact'}
        gradientColor={'brand-to-blue'}
        emoji={'📬'}
        label={'Contact'}
      />
    </ToolbarLinksContainer>
  );
};
