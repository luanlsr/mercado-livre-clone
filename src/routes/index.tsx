import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import ProductPage from '../pages/ProductPage';

export const RoutesBuilder = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
};

export const CreateRoutes = (): JSX.Element => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RoutesBuilder />
    </BrowserRouter>
  );
};
