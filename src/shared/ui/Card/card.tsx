import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProps = {} & ComponentPropsWithoutRef<'div'>
export const Card = forwardRef<ElementRef<'div'>, CardProps>(
  ({ children, className, ...restProps }: CardProps, ref) => {
    const classNames = {
      root: clsx(s.card, className),
    }

    return (
      <div className={classNames.root} ref={ref} {...restProps}>
        {children}
      </div>
    )
  }
)
