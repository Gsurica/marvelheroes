import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Heropage } from '../Pages/Heropage';

import { Header } from '../components/Header';
import { useCallback, useEffect } from 'react';
import { getHeroes} from '../App/features/hero/heroSlice';
import { useAppDispatch } from '../App/store';
import { Hero } from '../interfaces/Hero';

export const Router = () => {
  
  const dispatch = useAppDispatch();

  const initApp = useCallback( async () => {
    await dispatch(getHeroes());
  }, [dispatch])

  useEffect(() => {
    initApp();
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="heropage">
          <Route path=":heroId" element={<Heropage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
