import Link from 'next/link'

import { Button } from '@/components/button'
import { Flex } from '@/components/flex'
import { Logo } from '@/components/logo'

import { HeaderProps } from './types'

export const Header = ({ primary, secondary }: HeaderProps) => {
  return (
    <div>
      {primary ? (
        <Flex as="header" direction={'column'} gap={6} justify="between">
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
