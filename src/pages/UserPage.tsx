import { useEffect, useState } from 'react';

const UserPage = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then((user: { name: string; email: string }) => setUser(user))
      .catch((error: { message: string }) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>User Page</h1>
      {user ? <p>User</p> : <div>Loading...</div>}
    </div>
  );
};

export default UserPage;
