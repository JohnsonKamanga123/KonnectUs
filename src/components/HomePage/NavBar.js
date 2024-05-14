import KonnectUslogo from "./Konnect1.png";
import Search from "../Search and Filtering/Search";

const buttons = ["Home", "About Us", "Products", "Team", "Contact Us"];

const drawButtons = (button) => (
  <li className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
    {button}
  </li>
);

export default function NavBar(props) {
  
  const isSignedIn = props.isSignedIn;
  const setSignedIn = props.setSignedIn;

  return (
    <div className="grid grid-cols-[1fr_3fr] p-3 m-0 h-[80px]">
      <img
        src={KonnectUslogo}
        alt="KonnectUs Logo"
        className=" mb-4 h-14 w-[50]"
      />
      <ul className="flex p-3 justify-end">
        {buttons.map(drawButtons)}
        <li className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
          {isSignedIn ? (<button onClick={(e)=>{
              e.preventDefault();
              console.log("my account")
          }}>My Account</button>) : "Login"}
        </li>
        <Search />
      </ul>
    </div>
  );
}
