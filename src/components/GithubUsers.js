import Box from "./Box";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const GithubUsers = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();

    async function getUsers() {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  if (loading === true) return <Loading />;
  else
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
