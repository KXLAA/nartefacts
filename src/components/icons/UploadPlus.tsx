import { PlusCircle as Icon } from 'lucide-react'

import { IconProps } from '@/components/icons'

const UploadPlus: React.FC<IconProps> = ({ color, size, strokeWidth }) => {
  return <Icon color={color} size={size} strokeWidth={strokeWidth} />
}

export default UploadPlus
