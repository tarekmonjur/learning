import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Categories = lazy(() => import('./components/Categories'))
const Category = lazy(() => import('./components/Category'))
const Session = lazy(() => import('./components/Session'))
const Register = lazy(() => import('./components/Register'))
const Confirmation = lazy(() => import('./components/Confirmation'))

function App() {

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route index path="/" element={<Home title="Welcome to Home"/>} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />} >
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h2>Select a category from above</h2>} />
        </Route>
        <Route path="signup" element={<Register />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="*" element={
          <h1 className="not-found">Page Not Found</h1>
        } />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="#">Tech Stack</a>
      </footer>
    </div>
  );
}

export default App;
