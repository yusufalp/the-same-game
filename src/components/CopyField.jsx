import { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

export default function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TextField
      label={label}
      value={value}
      readOnly
      onFocus={(e) => e.target.select()}
    >
      <Button onClick={copy}>{copied ? "Copied..." : "Copy link"}</Button>
    </TextField>
  );
}
