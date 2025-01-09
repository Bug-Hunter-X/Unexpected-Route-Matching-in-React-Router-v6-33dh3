import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  //Using useLocation hook to resolve the issue
  let location = useLocation();
  console.log(location);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 