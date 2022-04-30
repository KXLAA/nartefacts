import { RefreshCcw } from 'lucide-react'
import { RefreshCw } from 'lucide-react'
import { IconProps } from '.'

export interface RefreshProps extends IconProps {
  position: 'cw' | 'ccw'
}

const Refresh: React.FC<RefreshProps> = ({
  color,
  size,
  strokeWidth,
  position,
}) => {
  switch (position) {
    case 'cw':
      return <RefreshCw color={color} size={size} strokeWidth={strokeWidth} />
    case 'ccw':
      return <RefreshCcw color={color} size={size} strokeWidth={strokeWidth} />
    default:
      return <RefreshCw color={color} size={size} strokeWidth={strokeWidth} />
  }
}

export default Refresh
