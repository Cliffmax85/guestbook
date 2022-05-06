import { useUser } from "../../context/UserContext";
import { useEffect, useState } from "react";

export default function Guestbook() {
    return (
      <>  
        <h1>Guestbook</h1>
        <p>Sup {user.email}?</p>
      </>
    )
}