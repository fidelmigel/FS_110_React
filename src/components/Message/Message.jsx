const Message = ({ author = 'Incognito', message, isOnline = true }) => {
  return (
    <div>
      <h3>{author}</h3>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
      <p>{message}</p>
    </div>
  );
};

export default Message;
