import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
          <h1>Home</h1>
          <Link to='/guestbook' role="input">Checkout out the Guestbook, Yo!</Link>
          <br></br>
          <Link to='/login'>Go Log in!</Link>
        </>
    )
}