import { Grid, Container, Typography } from "@mui/material";
import { Coder } from "../interfaces/Coder";
import { CoderComponent } from "../components/CoderComponent";

const Coders: Coder[] = [
  {name: "Guilherme", languages: ["React", " Javascript"], description: "Nice!", linkedIn: "https://www.linkedin.com/in/guilherme-surica-747734223/"},
  {name: "Gabriel", languages: ["Typescript", " Javascript"], description: "I'm happy!", linkedIn: "https://www.linkedin.com/in/gabriel-campos-sanini/"},
  {name: "Matheus", languages: ["CSS", " Javascript"], description: "scare emoji!!", linkedIn: "https://www.linkedin.com/in/matheus-wallauer-488b15196/" },
  {name: "Lucas", languages: ["Typescript", " Javascript"], description: "I hate pepporoni!", linkedIn: "https://www.linkedin.com/in/lucas-medeiros-2b77591ab/"},  
  {name: "Michel", languages: ["Bootstrap", " Javascript"], description: "and i love pepperoni!", linkedIn: "https://www.linkedin.com/in/micheldenardin85/"},
];

export const About = () => {
  return (
    <Container maxWidth="xl">
      <Grid container display="flex" alignItems="center" justifyContent="space-around" sx={{
        height: 500
      }}>
        <Grid item display="flex" alignItems="center" justifyContent="space-around" sx={{
          flexWrap: "wrap"
          
        }}>
          { Coders.map(coder => {
            return <CoderComponent name={coder.name} languages={coder.languages} description={coder.description} linkedIn={coder.linkedIn} />
          }) }
        </Grid>
      </Grid>
      <Grid container display="flex" alignItems="center" justifyContent="center">
        <Grid item>
          <Typography
            variant="h3"
            component="h1"
          >
            Gostou de algum? contrate-nos! <span>😎</span>
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
          >
            (é sério, contrata a gente por favor <span>😓</span>)
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
