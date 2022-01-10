import "./App.css";

import {Route, Routes} from "react-router-dom";
import {Nav} from "./organisms/Navbar";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Container} from "./ui/Container";
import {People} from "./pages/People";
import {AddPerson} from "./pages/AddPerson";
import {AuthProvider} from "./components/AuthProvider";
import {RequireAuth} from "./components/RequireAuth";

function App() {
    return (
        <AuthProvider>
            <Container className="mt-4">
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <People />
                            </RequireAuth>
                        }
                    />
                    <Route path="/add" element={
                        <RequireAuth>
                            <AddPerson />
                        </RequireAuth>
                    } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Container>
        </AuthProvider>
    );
}

export default App;
