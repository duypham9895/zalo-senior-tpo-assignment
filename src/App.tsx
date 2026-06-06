import { Navigate, Route, Routes } from 'react-router-dom';
import PageShell from './components/layout/PageShell';
import HomePage from './pages/HomePage';
import ExerciseOnePage from './pages/ExerciseOnePage';
import ExerciseTwoPage from './pages/ExerciseTwoPage';
import ExerciseThreePage from './pages/ExerciseThreePage';

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise-1" element={<ExerciseOnePage />} />
        <Route path="/exercise-2" element={<ExerciseTwoPage />} />
        <Route path="/exercise-3" element={<ExerciseThreePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageShell>
  );
}
