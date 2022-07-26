import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';


interface HeroTypes {
  name: string
}

export const HeroCard = ({ name }: HeroTypes) => {

  return (
    <Card sx={ {width: 400} }>
      <CardContent>
        <Typography
          variant="h5"
          component="h1"
        >
          { name }
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" >View More!</Button>
      </CardActions>
    </Card>
  )
}
