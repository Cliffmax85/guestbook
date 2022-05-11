import { useUser } from "../context/UserContext";

export default function Header() {
    const { user } = useUser();

    return (
        <div>
            <p>{user.email} is logged in</p>
        </div>
    )
}