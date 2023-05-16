import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    console.log(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const resp = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await resp.json();

    console.log(data);
    setUsers(data);
    setIsLoading(false);
    console.log(users);
  };

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {/* {users.map((user) => (
        <h3>{user.login}</h3>
      ))} */}
    </div>
  );
}

export default UserResults;
