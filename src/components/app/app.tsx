import MainPage from 'components/main/main';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router';
import { appTheme } from './common';
import * as S from './app.styled';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </ThemeProvider>

  );
}

export default App;
