const User = (props: { name: string; email: string }) => {
  const { name, email } = props;
  return (
    <div>
      <h2>User</h2>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default User;
