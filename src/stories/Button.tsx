import { Button } from '@chakra-ui/react'
import type { ButtonProps } from '@chakra-ui/react'

export enum PrimaryButtonTheme {
  default = 'default',
  white = 'white',
  black = 'black',
  red = 'red',
  transparent = 'transparent',
}

export enum PrimaryButtonSize {
  md = 'md',
  lg = 'lg',
  sm = 'sm',
  xs = 'xs',
  table = 'table',
}

export interface PrimaryButtonProps extends ButtonProps {
  disabled?: boolean
  theme?: PrimaryButtonTheme
  size?: PrimaryButtonSize
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  disabled,
  children,
  theme = 'default',
  size = 'md',
  ...rest
}) => {
  const background = {
    [PrimaryButtonTheme.default]: 'green.600',
    [PrimaryButtonTheme.white]: 'gray.200',
    [PrimaryButtonTheme.black]: 'blue.850',
    [PrimaryButtonTheme.red]: 'red.200',
    [PrimaryButtonTheme.transparent]: 'transparent',
  }

  const color = {
    [PrimaryButtonTheme.default]: 'white',
    [PrimaryButtonTheme.white]: 'blue.800',
    [PrimaryButtonTheme.black]: 'white',
    [PrimaryButtonTheme.red]: 'red.600',
    [PrimaryButtonTheme.transparent]: 'gray.600',
  }

  const hoverBackground = {
    [PrimaryButtonTheme.default]: 'green.400',
    [PrimaryButtonTheme.white]: 'gray.100',
    [PrimaryButtonTheme.black]: 'blue.800',
    [PrimaryButtonTheme.red]: 'red.400',
    [PrimaryButtonTheme.transparent]: 'transparent',
  }

  const disabledBackground = {
    [PrimaryButtonTheme.default]: 'rgba(97, 236, 188, 0.2)',
    [PrimaryButtonTheme.white]: 'transparent',
    [PrimaryButtonTheme.black]: 'rgba(35, 48, 62, 0.2)',
    [PrimaryButtonTheme.red]: 'red.200',
    [PrimaryButtonTheme.transparent]: 'transparent',
  }

  const disabledColor = {
    [PrimaryButtonTheme.default]: 'green.600',
    [PrimaryButtonTheme.white]: 'gray.600',
    [PrimaryButtonTheme.black]: 'gray.600',
    [PrimaryButtonTheme.red]: 'red.400',
    [PrimaryButtonTheme.transparent]: 'gray.600',
  }

  const disabledBorderColor = {
    [PrimaryButtonTheme.default]: 'green.400',
    [PrimaryButtonTheme.white]: 'gray.300',
    [PrimaryButtonTheme.black]: 'blue.800',
    [PrimaryButtonTheme.red]: 'red.200',
    [PrimaryButtonTheme.transparent]: 'transparent',
  }

  const buttonPadding = {
    [PrimaryButtonSize.md]: '12px 16px',
    [PrimaryButtonSize.lg]: '12px 48px',
    [PrimaryButtonSize.sm]: '4px 8px',
    [PrimaryButtonSize.xs]: '2.5px 9px',
    [PrimaryButtonSize.table]: '10px 16px',
  }

  const buttonHeight = {
    [PrimaryButtonSize.md]: '48px',
    [PrimaryButtonSize.lg]: '48px',
    [PrimaryButtonSize.sm]: '32px',
    [PrimaryButtonSize.xs]: '24px',
    [PrimaryButtonSize.table]: '40px',
  }

  return (
    <Button
      disabled={disabled}
      padding={buttonPadding[size]}
      height={buttonHeight[size]}
      background={background[theme]}
      color={color[theme]}
      fontSize={'text.md'}
      fontWeight={600}
      border={
        theme === PrimaryButtonTheme.transparent ? '1px solid #E2E8F0' : 'none'
      }
      borderRadius={'8px'}
      alignItems={'center'}
      _hover={{
        background: disabled
          ? disabledBackground[theme]
          : hoverBackground[theme],
      }}
      _focus={{
        boxShadow: 'none',
      }}
      _disabled={{
        color: disabledColor[theme],
        background: disabledBackground[theme],
        border: `1px solid ${disabledBorderColor[theme]}`,
        opacity: '1',
        cursor: 'not-allowed',
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
