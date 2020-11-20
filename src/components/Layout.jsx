import React from 'react'
import {
  Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    padding: '50px 0',
    background: theme.palette.background.default
  }
}))

const Layout = ({ children }) => {
  const styles = useStyles()

  return (
    <Container className={styles.container}>
      {children}
    </Container>
  )
}

export default Layout