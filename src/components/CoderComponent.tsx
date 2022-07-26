import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export const CoderComponent = ({ name, languages, description, linkedIn }: {
  name: string 
  languages: string[]
  description: string 
  linkedIn: string 
}) => {
  return (
    <Card sx={{
      marginBottom: 4,
      width: 300
    }}>
      <CardContent>
        <Typography
          variant="h3"
          component="h1"
          color="primary"
        >
          { name }
        </Typography>
        <Typography
          variant="body1"
          component="h1"
          color="secondary"
        >
          { languages }
        </Typography>
        <Typography
          variant="body2"
          component="h2"
          color="text.primary"
        >
          { description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          component={ Link }
          to={ linkedIn }
        >
          Quer me ver? <span>😳</span>
        </Button>
      </CardActions>
    </Card>
  )
}
