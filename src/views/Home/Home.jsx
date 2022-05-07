import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
          <h1>Home</h1>
          <Link to='/guestbook'>Checkout out the Guestbook, Yo!</Link>
          <Link to='/login'>WOuld you like to log in?</Link>
        </>
    )
}