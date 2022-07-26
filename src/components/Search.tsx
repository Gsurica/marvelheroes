import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export const SearchBar = ({ filteredHero, setFilteredHero }: {
  filteredHero: any
  setFilteredHero: any
}) => {
  
  return (
    <>
      <TextField  
      id="input-with-icon-textfield"
      label="Pesquisar"
      onChange={e => setFilteredHero(e.target.value)}
      value={filteredHero}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      variant="standard"
      />  
    </>
  )
}
