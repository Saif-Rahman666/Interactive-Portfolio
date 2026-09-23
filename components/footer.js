import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Box>
        &copy; {new Date().getFullYear()} Saif Rahman. All Rights Reserved.
      </Box>
      <Box fontSize="xs" mt={1}>
        Desk model{' '}
        <Link href="https://poly.pizza/m/uxIo5ge0pw" isExternal>
          Standing Desk
        </Link>{' '}
        by{' '}
        <Link href="https://poly.pizza/u/dook" isExternal>
          dook
        </Link>{' '}
        (
        <Link href="https://creativecommons.org/licenses/by/3.0/" isExternal>
          CC-BY
        </Link>
        ) via Poly Pizza
      </Box>
    </Box>
  )
}

export default Footer
