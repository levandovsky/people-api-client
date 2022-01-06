import {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import "./App.css";
import {People} from "./components/People";
import {Nav} from "./organisms/Navbar";
import {AddPerson} from "./pages/AddPerson";
import {Login} from "./pages/Login";
import {PeopleApi} from "./services/api";
import {Container} from "./ui/Container";

function App() {
    const [people, setPeople] = useState();
    const navigate = useNavigate();

    const fetchPeople = async () => {
        // fetch people from api
        const p = await PeopleApi.all();

        // save fetched people to local state
        setPeople(p);
    };

    const addPerson = (person) => {
        setPeople((prevState) => [...prevState, person]);
    };

    const deletePerson = async (id) => {
        try {
            const {deletedPersonId} = await PeopleApi.delete(id);
            setPeople((prevState) => prevState.filter((person) => person._id !== deletedPersonId));
        } catch (e) {
            console.error(e);
        }
    };

    const updatePerson = (id, update) => {
        setPeople((prevState) =>
            prevState.map((person) => {
                if (person._id === id) return {...person, ...update};

                return person;
            })
        );
    };

    // fetch people list on component load
    useEffect(() => {
        fetchPeople();
    }, []);

    useEffect(() => {
        navigate("/");
    }, [people]);

    return (
        <Container className="mt-4">
            <Nav />
            <Routes>
                <Route path="/" element={<People people={people} onDelete={deletePerson} onUpdate={updatePerson} />} />
                <Route path="/add" element={<AddPerson onAdded={addPerson} />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Container>
    );
}

export default App;
