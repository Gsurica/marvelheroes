import { Grid, Typography, Box, CardMedia, Card, CardContent } from "@mui/material";
import { RootState } from "../App/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Heropage = () => {

  const heroes = useSelector((state: RootState) => state.heroes.heroes );
  let { heroId } = useParams();

  return (
    <Grid container display="flex" alignItems="center" justifyContent="center" sx={{marginTop: 4}}>
      <Grid item width={550}>
        <Card>
          { heroes.map((hero: any) => {
            if (Number(heroId) === hero.id) {
              return (
                <>
                  <CardMedia 
                    component="img"
                    alt={hero.name}
                    height="340"
                    image={hero.thumbnail.path + "/landscape_amazing.jpg"}
                  />
                  <CardContent>
                    <Typography
                      variant="h3"
                      color="primary"
                    >
                      { hero.name }
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.primary"
                    >
                      { hero.description }
                    </Typography>
                  </CardContent>
                </>
              );
            }
          }) }
        </Card>
      </Grid>
    </Grid>
  )
}
