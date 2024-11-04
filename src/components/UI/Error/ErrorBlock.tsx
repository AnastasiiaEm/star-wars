interface ErrorBlockProps {
  title: string;
  message: string;
}

export const ErrorBlock: React.FC<ErrorBlockProps>= ({ title, message }) => {
  return (
    <div className="error-block">
      <div className="error-block">
        <h2 className="error-block__title">{title}</h2>
        <p className="error-block__message">{message}</p>
      </div>
    </div>
  );
}