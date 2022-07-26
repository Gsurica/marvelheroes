import { Grid, Container, TextField, InputAdornment, Button, ButtonGroup, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
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
          <TextField
          id="input-with-icon-textfield"
          label="Pesquisar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="standard"
          />
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
