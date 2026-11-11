export default function Alert({ children }) {
  return (
    <p role="alert" className="rounded bg-red-50 px-3 py-2 text-sm text-red-700">
      {children}
    </p>
  );
}
