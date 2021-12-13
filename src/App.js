import { Global, css } from '@emotion/react';
import reset from './reset';
import ImageList from './components/ImageList';

function App() {
  return (
    <>
      <Global
        styles={css`
          ${reset} html {
            background: #e5e5e5;
          }
        `}
      />
      <ImageList />
    </>
  );
}

export default App;
