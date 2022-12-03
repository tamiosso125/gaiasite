import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './context/Provider';
import Main from './pages/main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
