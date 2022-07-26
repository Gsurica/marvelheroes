import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

interface HeroTypes {
  name: string
  id: number
  comics?: string
  description?: string 
}

export const HeroCard = ({ name, id, comics, description }: HeroTypes) => {

  return (
    <Card sx={ {
      width: 400,
      marginBottom: 4
    } }>
      <CardContent>
        <Typography
          variant="h5"
          component="h1"
        >
          { name }
        </Typography>
        <Typography
          variant="h5"
          component="h1"
        >
          { id }
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
        >
          { description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          variant="outlined" color="secondary" component={Link} to={`/heropage/${id}`}
        >
          View More!
        </Button>
      </CardActions>
    </Card>
  )
}
