import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import useAuthContext from "./contexts/AuthContext";
import VendegLayout from "./layouts/VendegLayout";
import Kezdolap from "./pages/Vendeg/Kezdolap";
import Kapcsolat from "./pages/Vendeg/Kapcsolat";
import Galeria from "./pages/Vendeg/Galeria";
import VersenyzoLayout from "./layouts/VersenyzoLayout";
import SzervezoLayout from "./layouts/SzervezoLayout";
import AdminLayout from "./layouts/AdminLayout";
import Bejelentkezes from "./pages/Bejelentkezes";
import Regisztracio from "./pages/Regisztracio";
import Versenyek from "./pages/Vendeg/Versenyek";


function AppRoutes() {
    const { user } = useAuthContext();

    return (
        <Routes>
            {/* Vendég layout */}
            <Route path="versenyek" element={<Versenyek />} />
            <Route path="galeria" element={<Galeria />} />
            <Route path="kapcsolat" element={<Kapcsolat />} />
            {!user && (
                <Route path="/" element={<VendegLayout />}>
                    <Route index element={<Kezdolap />} />

                    <Route path="bejelentkezes" element={<Bejelentkezes />} />
                    <Route path="regisztracio" element={<Regisztracio />} />
                </Route>
            )}
            {/* Admin és User ugyanazon útvonalon */}
            {user && (
                <Route path="/" element={
                    user.permission === 1 ? (
                        <VersenyzoLayout />) : user.permission === 2 ? (
                            <SzervezoLayout />) : user.permission === 3 ? (
                                <AdminLayout />) : console.log("nincs ilyen felhasználói réteg.")}>
                    <Route index element={<Kezdolap />} />
                </Route>

            )}
        </Routes>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
