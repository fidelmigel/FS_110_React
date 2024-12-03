const User = ({ name, email, bio = 'This user hide own bio' }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{bio}</p>
      <button>Delete</button>
    </div>
  );
};
export default User;
