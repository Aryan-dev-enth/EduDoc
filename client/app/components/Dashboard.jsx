import React from 'react'
import { UserProfile } from '@clerk/nextjs'

const Dashboard =async () => {
  return (
    <div>
        <UserProfile />
    </div>
  )
}

export default Dashboard