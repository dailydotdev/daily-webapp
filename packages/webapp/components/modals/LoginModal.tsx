import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import sizeN from '@dailydotdev/shared/macros/sizeN.macro';
import DailyDevLogo from '@dailydotdev/shared/src/svg/DailyDevLogo';
import { typoCallout } from '../../styles/typography';

import {
  StyledModal,
  ModalProps,
} from '@dailydotdev/shared/src/components/modals/StyledModal';
import { ModalCloseButton } from '@dailydotdev/shared/src/components/modals/ModalCloseButton';
import LoginButtons from '../LoginButtons';
import { LoginModalMode } from '@dailydotdev/shared/src/types/LoginModalMode';

const MyModal = styled(StyledModal)`
  .modal {
    padding: ${sizeN(8)};

    .logo {
      width: 9.25rem;
    }
  }
`;

const Content = styled.div`
  margin: ${sizeN(6)} 0 ${sizeN(8)};
  color: var(--theme-label-secondary);
  text-align: center;
  ${typoCallout}
`;

export type LoginModalProps = { mode: LoginModalMode } & ModalProps;

export default function LoginModal({
  mode = LoginModalMode.Default,
  ...props
}: LoginModalProps): ReactElement {
  // eslint-disable-next-line react/prop-types
  const { onRequestClose } = props;

  return (
    <MyModal {...props}>
      <ModalCloseButton onClick={onRequestClose} />
      <DailyDevLogo />
      <Content>
        {mode === LoginModalMode.ContentQuality
          ? `Our community cares about content quality. We require social authentication to prevent abuse.`
          : `Unlock useful features by signing in. A bunch of cool stuff like content filters and bookmarks are waiting just for you.`}
      </Content>
      <LoginButtons />
    </MyModal>
  );
}
