import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'


import s from './checkbox.module.scss'
import { Check } from "@/shared/assets";
import { Label } from "@/shared/ui/Label";
import { Typography } from "@/shared/ui/Typography";

type CheckboxProps = {
  id?: string
  label?: string
} & ComponentPropsWithoutRef<typeof Checkbox.Root>

export const CustomCheckbox = forwardRef<ElementRef<typeof Checkbox.Root>, CheckboxProps>(
  ({ id, label, disabled, checked, required, onCheckedChange }: CheckboxProps, ref) => {
    const classNames = {
      wrapper: clsx(s.wrapper),
      root: clsx(s.checkboxRoot),
      indicator: clsx(s.checkboxIndicator),
      label: s.label,
      buttonWrapper: s.buttonWrapper,
    }

    return (
      <div className={classNames.wrapper}>
        <Label className={classNames.label}>
          <div className={classNames.buttonWrapper}>
            <Checkbox.Root
              ref={ref}
              className={classNames.root}
              checked={checked}
              id={id}
              disabled={disabled}
              onCheckedChange={onCheckedChange}
              required={required}
            >
              <Checkbox.Indicator className={classNames.indicator} asChild>
                <Check />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        </Label>
      </div>
    )
  }
)
