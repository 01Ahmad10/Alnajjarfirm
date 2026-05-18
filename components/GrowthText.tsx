import { parseGrowthText } from "@/lib/utils";

export default function GrowthText({ text }: { text: string }) {
  const parts = parseGrowthText(text);
  return (
    <>
      {parts.map((part, i) =>
        part.type === "number" ? (
          <span key={i} className="growth-number">
            {part.value}
          </span>
        ) : (
          part.value
        )
      )}
    </>
  );
}
