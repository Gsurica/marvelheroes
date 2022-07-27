import { HeroCard } from './HeroCard';
import { Grid, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../App/store';
import { SearchBar } from '../../Search';
import { useState, useMemo } from "react";

export const HeroPage = () => {

  const [filterHero, setFilterHero] = useState("");
  const allHeroes = useSelector((state: RootState) => state.heroes.heroes);
  const foundedHero = useMemo(() => allHeroes.filter(hero => hero.name.startsWith(filterHero)), [filterHero]);

  const heroes = useSelector((state: RootState) => state.heroes.heroes);

  if (foundedHero.length !== 0) {
    return (
      <Container maxWidth="lg">
        <Grid container display="flex" alignItems="center" justifyContent="center" sx={{marginTop: 4}} spacing={2} flexDirection="column">
        <SearchBar filteredHero={filterHero} setFilteredHero={setFilterHero} />
          <Grid item display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            { foundedHero.map((hero: any) => {
              return <HeroCard name={hero.name} id={hero.id} />
            }) }
          </Grid>
        </Grid>
      </Container>
    )
  }

  return (
    <>
      <Container maxWidth="lg">
        <Grid container display="flex" alignItems="center" justifyContent="center">
          <Grid item>
            <SearchBar filteredHero={filterHero} setFilteredHero={setFilterHero} />
          </Grid>
        </Grid>
        <Grid container display="flex" alignItems="center" justifyContent="center" >
          <Grid item display="flex" alignItems="center" justifyContent="center">
            { heroes.map((hero: any) => {
              return <HeroCard name={hero.name} id={hero.id} />
            }) }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
