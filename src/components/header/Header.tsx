import Link from 'next/link'

import { Button } from '@/components/button'
import { Flex } from '@/components/flex'
import { Logo } from '@/components/logo'

import { Text } from './header.styles'
import { HeaderProps } from './header.types'

export const Header = ({ type }: HeaderProps) => {
  switch (type) {
    case 'primary':
      return (
        <Flex as="header" direction={'column'} gap={6} justify="between">
          <Logo />
          <Flex
            as="nav"
            gap={{
              '@initial': 2,
              '@sm': 6,
            }}
          >
            <Link href="/create" passHref>
              <Button
                variant="dark"
                label="create"
                fullWidth
                size={{
                  '@initial': 'sm',
                  '@sm': 'lg',
                }}
              />
            </Link>

            <Link href="/saved" passHref>
              <Button
                label="saved"
                fullWidth
                size={{
                  '@initial': 'sm',
                  '@sm': 'lg',
                }}
              />
            </Link>

            {/* <Link href="/info" passHref>
            <Button label="info" buttonType="link-primary" width="full" />
          </Link> */}
          </Flex>
        </Flex>
      )
    case 'secondary':
      return (
        <Flex as="header">
          <Flex as="nav" justify={'center'}>
            <Link href="/">
              <Logo width="250" />
            </Link>
          </Flex>
        </Flex>
      )

    case 'admin':
      return (
        <Flex as="header">
          <Flex as="nav" justify="between" align="center">
            <Link href="/">
              <Text>admin.</Text>
            </Link>
            <Button
              variant="danger"
              label="Log Out"
              size="md"
              fullWidth={false}
            />
          </Flex>
        </Flex>
      )

    default:
      return (
        <Flex as="header" direction={'column'} gap={6} justify="between">
          <Logo />
          <Flex
            as="nav"
            gap={{
              '@initial': 2,
              '@sm': 6,
            }}
          >
            <Link href="/create" passHref>
              <Button
                variant="dark"
                label="create"
                fullWidth
                size={{
                  '@initial': 'sm',
                  '@sm': 'lg',
                }}
              />
            </Link>

            <Link href="/saved" passHref>
              <Button
                label="saved"
                fullWidth
                size={{
                  '@initial': 'sm',
                  '@sm': 'lg',
                }}
              />
            </Link>

            {/* <Link href="/info" passHref>
            <Button label="info" buttonType="link-primary" width="full" />
          </Link> */}
          </Flex>
        </Flex>
      )
  }
}
