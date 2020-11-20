import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout>
      <h2>
        Page not found
      </h2>

      <Link to="/" component={Button}>
        Return
      </Link>
    </Layout>
  )
}

export default NotFound