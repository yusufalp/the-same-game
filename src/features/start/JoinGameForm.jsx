import { useState } from "react";
import useJoinGameByCode from "../../hooks/useJoinGameByCode";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import TextField from "../../components/TextField";
import { formatGameCode, GAME_CODE_LENGTH } from "../../utils/formatGameCode";

export default function JoinGameForm() {
  const { joinGameByCode, isJoining, error } = useJoinGameByCode();
  const [code, setCode] = useState("");

  const isComplete = code.length === GAME_CODE_LENGTH;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isComplete) joinGameByCode(code);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Game code"
        hint={`Ask the host for the ${GAME_CODE_LENGTH}-character code or open the invite link they sent.`}
        value={code}
        onChange={(event) => setCode(formatGameCode(event.target.value))}
        maxLength={GAME_CODE_LENGTH}
        inputClassName="font-mono tracking-widest"
        autoComplete="off"
        autoCapitalize="characters"
        spellCheck={false}
        autoFocus
      >
        <Button type="submit" disabled={!isComplete || isJoining}>
          {isJoining ? "Joining game..." : "Join Game"}
        </Button>
      </TextField>

      {error && <Alert>{error.message}</Alert>}
    </form>
  );
}
