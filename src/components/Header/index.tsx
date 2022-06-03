import Link from 'next/link'

import { Button } from '@/components/Button'
import { Flex } from '@/components/Flex'
import { Logo } from '@/components/Logo'

export type HeaderProps = {
  primary?: boolean
  secondary?: boolean
}

export const Header: React.FC<HeaderProps> = ({ primary, secondary }) => {
  return (
    <div>
      {primary ? (
        <Flex as="header" direction={'column'} gap={6}>
          <Logo />
          <Flex as="nav" gap={6}>
            <Link href="/create" passHref>
              <Button variant="dark" label="create" fullWidth />
            </Link>

            <Link href="/saved" passHref>
              <Button label="saved" fullWidth />
            </Link>

            {/* <Link href="/info" passHref>
              <Button label="info" buttonType="link-primary" width="full" />
            </Link> */}
          </Flex>
        </Flex>
      ) : null}

      {secondary ? (
        <Flex as="header">
          <Flex as="nav" justify={'center'}>
            <Link href="/">
              <Logo width="250" />
            </Link>
          </Flex>
        </Flex>
      ) : null}
    </div>
  )
}
