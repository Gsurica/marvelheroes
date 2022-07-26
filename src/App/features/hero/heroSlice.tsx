import { Hero } from "../../../interfaces/Hero";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import md5 from 'md5';

const publicKey = "c1c05aed403a3b98af5e44a91748e95e";
const privateKey = "3961b913e4d6d38fb4a01eaf08bbc1dde4dd941b";
const timeStamp = Number(new Date());
const hash = md5(timeStamp + privateKey + publicKey);

interface HeroState {
  heroes: Hero[];
  loading: boolean;
  errors: any;
}

const initialState: HeroState = {
  heroes: [],
  loading: false,
  errors: []
}

export const getHeroes = createAsyncThunk<Hero[]>(
  "heroes/getHeroes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const heroSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<Hero[]>) => {
      state.heroes = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getHeroes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHeroes.fulfilled, (state, action) => {
      state.heroes = action.payload;
      state.loading = false;
    });
    builder.addCase(getHeroes.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  }
});

export default heroSlice.reducer;
export const { setHeroes } = heroSlice.actions;



