
import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout/Layout';
import HomePage from '../pages/HomePage'
import HtmlCssPage from '../pages/HtmlCssPage'
import JavaScriptPage from '../pages/JavaScriptPage'
import ReactPage from '../pages/ReactPage'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/html" element={<HtmlCssPage />} />
        <Route path="/javascript" element={<JavaScriptPage />} />
        <Route path='/react' element={<ReactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
