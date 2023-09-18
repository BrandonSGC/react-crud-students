export const Alert = ({ data }) => {
  const { type, message, show } = data;
  const className = `alert ${type}`;

  return show ? <p className={className}>{message}</p> : null;
};
