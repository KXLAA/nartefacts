import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ArrowDownCircle,
  ArrowUpCircle,
} from 'lucide-react'
import { ForwardRefRenderFunction, forwardRef } from 'react'
import styles from './arrow.module.scss'

export type ArrowProps = {
  position: 'left' | 'right' | 'up' | 'down'
  color?: string
  size?: number
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
