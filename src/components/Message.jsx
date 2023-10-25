function Message({ message, mt }) {
  return (
    <div className={`text-white mt-${mt} font-semibold`}>👋 {message}</div>
  );
}

export default Message;
