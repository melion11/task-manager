import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'subtitle1'
    | 'body2'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error'
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { variant = 'body1', children, className, as, ...rest } = props

  const classNames = {
    element: clsx(s[variant], className),
  }

  const Component = as || 'p'

  return (
    <Component className={classNames.element} {...rest}>
      {children}
    </Component>
  )
}
