import React from 'react'
import Header from '../../components/Header'

const index = () => {
  return (
    <Box m='20px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to dashboard" />
      </Box>
    </Box >
  )
}

export default index