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
import SzVersenyek from "./pages/Szervezo/SzVersenyek";
import Szervezes from "./pages/Szervezo/Szervezes";
import Profil from "./pages/Profil";
import VersenyzoKezdolap from "./pages/Versenyzo/VersenyzoKezdolap";
import VersenyzoVersenyeim from "./pages/Versenyzo/VersenyzoVersenyeim";

function AppRoutes() {
    const { user } = useAuthContext();

    return (
        <Routes>
            {/* Vendég layout - mindenki számára elérhető, ha nincs bejelentkezve */}
            {!user && (
                <Route path="/" element={<VendegLayout />}>
                    <Route index element={<Kezdolap />} />
                    <Route path="versenyek" element={<Versenyek />} />
                    <Route path="galeria" element={<Galeria />} />
                    <Route path="kapcsolat" element={<Kapcsolat />} />
                    <Route path="bejelentkezes" element={<Bejelentkezes />} />
                    <Route path="regisztracio" element={<Regisztracio />} />
                </Route>
            )}

            {/* Versenyző layout*/}
            {user && user.permission === 1 && (
                <Route path="/" element={<VersenyzoLayout />}>
                    <Route index element={<VersenyzoKezdolap />} />
                    <Route path="versenyek" element={<Versenyek />} />
                    <Route path="versenyzoVersenyeim" element={<VersenyzoVersenyeim />} />
                    <Route path="galeria" element={<Galeria />} />
                    <Route path="kapcsolat" element={<Kapcsolat />} />
                    <Route path="profil" element={<Profil />} />
                </Route>
            )}

            {/* Szervező layout*/}
            {user && user.permission === 2 && (
                <Route path="/" element={<SzervezoLayout />}>
                    <Route index element={<Kezdolap />} />
                    <Route path="versenyeim" element={<SzVersenyek />} />
                    <Route path="szervezes" element={<Szervezes />} />
                    <Route path="profil" element={<Profil />} />
                </Route>
            )}

            {/* Admin layout*/}
            {user && user.permission === 3 && (
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Kezdolap />} />
                    <Route path="profil" element={<Profil />} />
                    {/* admin-specifikus útvonalak */}
                </Route>
            )}

            {/* ha be van jelentkezve, de nincs permission */}
            {user && !user.permission && (
                <Route path="/" element={<VendegLayout />}>
                    <Route index element={<Kezdolap />} />
                    <Route path="versenyek" element={<Versenyek />} />
                    <Route path="galeria" element={<Galeria />} />
                    <Route path="kapcsolat" element={<Kapcsolat />} />
                    <Route path="profil" element={<Profil />} />
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