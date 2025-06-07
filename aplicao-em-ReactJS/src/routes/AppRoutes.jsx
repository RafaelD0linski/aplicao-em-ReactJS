import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from '../pages/PostPage';
import DadosPage from '../pages/DadosPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<PostPage />} />
        <Route path="/detalhes/:id" element={<DadosPage />} />
      </Routes>
    </BrowserRouter>
  );
}