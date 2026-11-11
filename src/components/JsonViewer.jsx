export default function JsonViewer({ label = "Raw response", data }) {
  return (
    <details className="text-sm text-neutral-500">
      <summary className="cursor-pointer select-none">{label}</summary>
      <pre className="mt-2 overflow-x-auto rounded bg-neutral-100 p-3 text-xs text-neutral-700">
        {JSON.stringify(data, null, 2)}
      </pre>
    </details>
  );
}
