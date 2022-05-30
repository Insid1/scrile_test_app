import MainPage from 'components/main/main';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<div>Not found page</div>} />
    </Routes>
  );
}

export default App;
