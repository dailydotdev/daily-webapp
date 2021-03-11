/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, {
  InputHTMLAttributes,
  ReactElement,
  MouseEvent,
  forwardRef,
  LegacyRef,
} from 'react';
import { useInputField } from '../../hooks/useInputField';
import styled from '@emotion/styled';
import sizeN from '../../macros/sizeN.macro';
import { BaseField, FieldInput } from './common';
import MagnifyingIcon from '../../icons/magnifying.svg';
import XIcon from '../../icons/x.svg';
import { focusOutline } from '../../styles/helpers';
import classNames from 'classnames';

export interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    | 'placeholder'
    | 'value'
    | 'className'
    | 'style'
    | 'name'
    | 'autoFocus'
    | 'onBlur'
    | 'onFocus'
    | 'aria-haspopup'
    | 'aria-expanded'
    | 'onKeyDown'
  > {
  inputId: string;
  valueChanged?: (value: string) => void;
  compact?: boolean;
}

const Icon = styled(MagnifyingIcon)`
  font-size: ${sizeN(6)};
  margin-right: ${sizeN(2)};
  color: var(--field-placeholder-color);
`;

const ClearButton = styled.button`
  display: flex;
  width: ${sizeN(8)};
  height: ${sizeN(8)};
  align-items: center;
  justify-content: center;
  margin-left: ${sizeN(1)};
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  visibility: hidden;
  ${focusOutline}

  .icon {
    font-size: ${sizeN(4.5)};
    color: var(--theme-label-tertiary);
  }

  &:hover .icon {
    color: var(--theme-label-primary);
  }
`;

const Container = styled(BaseField)`
  height: ${sizeN(12)};
  border-radius: ${sizeN(3.5)};

  &.focused,
  &.hasInput {
    ${Icon} {
      color: var(--theme-label-primary);
    }
  }

  &.hasInput {
    ${ClearButton} {
      visibility: visible;
    }
  }

  &.compact {
    height: ${sizeN(10)};
    border-radius: ${sizeN(3)};
  }
`;

export default forwardRef(function SearchField(
  {
    inputId,
    name,
    value,
    valueChanged,
    placeholder,
    compact = false,
    className,
    autoFocus,
    onBlur: externalOnBlur,
    onFocus: externalOnFocus,
    ...props
  }: Props,
  ref: LegacyRef<HTMLDivElement>,
): ReactElement {
  const {
    inputRef,
    focused,
    hasInput,
    onFocus,
    onBlur,
    onInput,
    focusInput,
    setInput,
  } = useInputField(value, valueChanged);

  const onClearClick = (event: MouseEvent): void => {
    event.stopPropagation();
    setInput(null);
  };

  return (
    <Container
      onClick={focusInput}
      {...props}
      className={classNames({ compact, focused, hasInput }, className)}
      data-testid="searchField"
      ref={ref}
    >
      <Icon />
      <FieldInput
        placeholder={placeholder}
        name={name}
        id={inputId}
        ref={inputRef}
        onFocus={(event) => {
          onFocus();
          externalOnFocus?.(event);
        }}
        onBlur={(event) => {
          onBlur();
          externalOnBlur?.(event);
        }}
        onInput={onInput}
        autoFocus={autoFocus}
        css={css`
          flex: 1;
        `}
        autoComplete="off"
      />
      <ClearButton title="Clear query" onClick={onClearClick}>
        <XIcon />
      </ClearButton>
    </Container>
  );
});
