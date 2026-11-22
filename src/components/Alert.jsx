export default function Alert({ children }) {
  return (
    <p role="alert" className="alert alert-danger">
      {children}
    </p>
  );
}
