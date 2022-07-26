import { HeroCard } from './HeroCard';
import { Grid, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../App/store';

export const Hero = () => {

  const heroes = useSelector((state: RootState) => state.heroes.heroes);

  return (
    <Container maxWidth="lg">
      <Grid container display="flex" alignItems="center" justifyContent="center" sx={{marginTop: 4}}>
        <Grid item display="flex" alignItems="center" justifyContent="center">
          { heroes.map((hero: any, id: any) => {
            return <HeroCard name={hero.name} />
          }) }
        </Grid>
      </Grid>
    </Container>
  )
}
