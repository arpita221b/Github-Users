import Box from "./Box";
import { useEffect, useState } from "react";

const GithubUsers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUsers();

    async function getUsers() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUserData(data);
    }
  }, []);

  return (
    <div className="container">
      {userData.map((user) => {
        return (
          <Box
            src={user.avatar_url}
            username={user.login}
            repository={user.html_url}
          />
        );
      })}
    </div>
  );
};

export default GithubUsers;
