import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ColorBadge from './BadgeApp'
import CircularWithValueLabel from './ProgressApp'
import DescriptionAlerts from './AlertApp'
import BasicRating from './RatingApp'
export default function ButtonApp() {
  return (
    
    <>
    
    <Stack spacing={2} direction="row">

    <Button variant="text">Click Me</Button>

    <Button variant="contained">Click Me</Button>

    <Button variant="outline">Click Me</Button>



    </Stack>

 <ColorBadge />

<CircularWithValueLabel />

<DescriptionAlerts />

<BasicRating />
   </>
  )
}
