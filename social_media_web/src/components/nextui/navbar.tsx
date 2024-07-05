import { Link } from "react-router-dom";
export default function NavbarEl() {
  return (
    <div className="flex justify-center">
    <nav className="w-[340px] h-14  bg-zinc-200 opacity-90 backdrop-blur-lg rounded-full flex justify-center items-center fixed bottom-4 z-50 ">
      <ul className="w-full flex justify-around">
        <Link to='/'><li>feed</li></Link>
        <Link to='/chat'><li>Chat</li></Link>
        <Link to='/account'><li>Account</li></Link>
      </ul>
    </nav>
    </div>
  );
}
