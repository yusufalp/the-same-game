export default function PageContainer({ children }) {
  return (
    <main className="mx-auto max-w-xl space-y-8 px-4 py-10 text-neutral-900">
      {children}
    </main>
  );
}
