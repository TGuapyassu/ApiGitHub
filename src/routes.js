import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RepositoriesPage from './pages/RepositoriesPage';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<MainPage />} />
                <Route path='/:login/repositories' element={<RepositoriesPage />} />
            </Routes>
        </Router>
    );
}