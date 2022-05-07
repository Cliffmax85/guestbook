import { useUser } from "../../context/UserContext";
import { useEffect, useState } from "react";
import Entries from "../../components/Entries";
import { getEntries } from "../../services/entries";

export default function Guestbook() {
    const { user, logout } = useUser();
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchEntries = () => {
        getEntries()
          .then(setEntries)
          .finally(() => setLoading(false))
    };
    
    useEffect(() => {
        fetchEntries();
    }, []);


    return (
        <>
          <button onClick={logout}>Log out, Dawg</button>
          <Entries addEntry={fetchEntries}/>
          <ul>{entries.map((entry) => (
              <li key={entry.id}>{entry.content} written by: {user.email} Joined Guestbook at: {user.created_at}</li>
          ))} </ul>
        </>
    )
}