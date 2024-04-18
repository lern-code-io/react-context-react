import { useState } from "react";
import "./App.css";

function App() {
  // pass this currentUser state through context
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      tagline: "harness real-time e-markets",
    },
    avatar: {
      url: "https://via.placeholder.com/600/92c952",
    },
  });

  return (
    <>
      <Profile />
      <CompanyInfo />
    </>
  );
}

const Avatar = () => {
  return <img src={null} />;
};

const CompanyInfo = () => {
  return (
    <>
      <h2>Company</h2>
      <p>Name: {}</p>
      <p>Catch Phrase: {}</p>
      <p>Tagline: {}</p>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <Avatar />
      <h2>Person</h2>
      <p>Name: {}</p>
      <p>Email: {}</p>
      <p>Phone: {}</p>
    </>
  );
};

export default App;
