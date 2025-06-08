import { Route, Routes } from 'react-router-dom';
import { MicrositeLayout } from './components/MicrositeLayout';
import { HomePage } from './pages/Home';
import { ProcessesPage } from './pages/Processes';
import { FAQPage } from './pages/FAQ';

export const MicrositeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MicrositeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="processes" element={<ProcessesPage />} />
        <Route path="faq" element={<FAQPage />} />
      </Route>
    </Routes>
  );
}; 