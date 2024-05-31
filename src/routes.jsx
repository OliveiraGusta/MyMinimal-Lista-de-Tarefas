import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';

const routes = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<ToDoList />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default routes;
