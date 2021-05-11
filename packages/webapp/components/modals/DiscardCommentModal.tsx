import React, { ReactElement, MouseEvent } from 'react';
import { Button } from '@dailydotdev/shared/src/components/buttons/Button';
import { ModalProps } from '@dailydotdev/shared/src/components/modals/StyledModal';
import {
  ConfirmationModal,
  ConfirmationHeading,
  ConfirmationDescription,
  ConfirmationButtons,
} from '@dailydotdev/shared/src/components/modals/ConfirmationModal';

export interface Props extends ModalProps {
  onDeleteComment: (event: MouseEvent) => void;
}

export default function DiscardCommentModal({
  onDeleteComment,
  onRequestClose,
  ...props
}: Props): ReactElement {
  return (
    <ConfirmationModal {...props}>
      <ConfirmationHeading>Discard comment</ConfirmationHeading>
      <ConfirmationDescription>
        Are you sure you want to close and discard your comment?
      </ConfirmationDescription>
      <ConfirmationButtons>
        <Button className="btn-secondary" onClick={onRequestClose}>
          Stay
        </Button>
        <Button className="btn-primary-ketchup" onClick={onDeleteComment}>
          Discard
        </Button>
      </ConfirmationButtons>
    </ConfirmationModal>
  );
}
