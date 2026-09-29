export function AccentCycle({ lines }: { lines: string[] }) {
  return (
    <span className="accent-cycle">
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </span>
  );
}
