import {
  ArrowDownCircle,
  ArrowLeftCircle,
  ArrowRightCircle,
  ArrowUpCircle,
} from 'lucide-react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { IconProps } from '..'
import styles from './arrow.module.scss'

export interface ArrowProps extends IconProps {
  position: 'left' | 'right' | 'up' | 'down'
  onClick?: () => void
  href?: string
}

const Base: ForwardRefRenderFunction<SVGSVGElement, ArrowProps> = (
  { position, color, size, onClick, href },
  ref,
) => {
  switch (position) {
    case 'left':
      return (
        <ArrowLeftCircle
          color={color}
          size={size}
          href={href}
          onClick={onClick}
          ref={ref}
          className={styles.arrow}
        />
      )
    case 'right':
      return (
        <ArrowRightCircle
          color={color}
          size={size}
          href={href}
          onClick={onClick}
          ref={ref}
          className={styles.arrow}
        />
      )
    case 'up':
      return (
        <ArrowUpCircle
          color={color}
          size={size}
          href={href}
          onClick={onClick}
          ref={ref}
          className={styles.arrow}
        />
      )
    case 'down':
      return (
        <ArrowDownCircle
          color={color}
          size={size}
          href={href}
          onClick={onClick}
          ref={ref}
          className={styles.arrow}
        />
      )
    default:
      return null
  }
}
const Arrow = forwardRef(Base)

export default Arrow
