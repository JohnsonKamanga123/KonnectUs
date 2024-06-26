import Footer from "./Footer.js";
import Main from "./Main.js";
import NavBar from "./NavBar.js";
import { useState } from "react";

export default function HomePage() {
  /*state variable that controls whether we have Login or My Account on the nav bar and
  Join Us in the Main component*/
  const [isSignedIn, setSignedIn] = useState(true);
  return (
    <div>
      <NavBar isSignedIn={isSignedIn} setSignedIn={setSignedIn}></NavBar>
      <Main isSignedIn={isSignedIn} setSignedIn={setSignedIn}></Main>
      <Footer></Footer>
    </div>
  );
}
