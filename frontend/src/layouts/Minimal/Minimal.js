import { Box, CircularProgress, Container, useTheme } from '@mui/material'
import { ErrorBoundary, Logo } from 'components'
import { Outlet } from 'react-router-dom/dist'

const Minimal = ({ isSuspense }) => {
  const theme = useTheme()

  return (
    <ErrorBoundary>
      <Container>
        <Box display="flex" justifyContent="center" sx={{ height: theme.sizing.header.height }}>
          <Logo />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: `calc(100vh - ${theme.sizing.header.height}px)` }}
          pb={`${theme.sizing.header.height}px`}
        >
          {isSuspense ? <CircularProgress /> : <Outlet />}
        </Box>
      </Container>
    </ErrorBoundary>
  )
}

export default Minimal
