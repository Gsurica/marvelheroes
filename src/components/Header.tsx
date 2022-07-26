import { Grid, Container, Button, ButtonGroup, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 4
      }}>
        <Grid item>
          <Typography
            variant="h4"
            color="primary"
            component="h1"
          >
            Heroes!
          </Typography>
        </Grid>
        <Grid item>
          <ButtonGroup
            variant="outlined"
          >
            <Button
              component={Link}
              to="/home"
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/about"
            >
              About
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  )
}
