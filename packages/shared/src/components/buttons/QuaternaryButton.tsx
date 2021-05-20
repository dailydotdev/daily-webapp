import React, {
  HTMLAttributes,
  LegacyRef,
  ReactElement,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { Button, ButtonProps } from './Button';

type QuandaryButtonProps = {
  id: string;
  reverse?: boolean;
  responsiveLabelClass?: string;
};

export function QuaternaryButton<Tag extends keyof JSX.IntrinsicElements>({
  id,
  children,
  style,
  className,
  reverse,
  responsiveLabelClass,
  tag,
  ...props
}: ButtonProps<Tag> & QuandaryButtonProps): ReactElement {
  let labelProps: HTMLAttributes<HTMLLabelElement> = {};
  let buttonProps: {
    className?: string;
    innerRef?: LegacyRef<HTMLButtonElement>;
  } = {};
  if (tag === 'a') {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const onLabelClick = (event: React.MouseEvent<HTMLLabelElement>): void => {
      event.preventDefault();
      buttonRef.current.click();
    };
    labelProps = {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onClick: onLabelClick,
    };
    buttonProps = {
      className: isHovered && 'hover',
      innerRef: buttonRef,
    };
  }

  const labelDisplay = responsiveLabelClass
    ? `hidden ${responsiveLabelClass}`
    : 'flex';

  return (
    <div
      style={style}
      className={classNames(
        { reverse },
        props.buttonSize,
        'btn-quaternary',
        'flex',
        'flex-row',
        'items-stretch',
        'select-none',
        className,
      )}
    >
      <Button<Tag> id={id} {...props} tag={tag} {...buttonProps} />
      {children && (
        <label
          htmlFor={id}
          {...labelProps}
          className={`${labelDisplay} items-center font-bold cursor-pointer typo-callout`}
        >
          {children}
        </label>
      )}
    </div>
  );
}
