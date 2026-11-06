/**
 * Water Damage Loan wordmark — SVG text logo with a water-drop mark.
 * Light variant for dark backgrounds via `light` prop.
 */
export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  const word = light ? "#ffffff" : "#1F2440";
  const sub = light ? "#F5C542" : "#3B82F6";
  return (
    <svg
      viewBox="0 0 240 56"
      className={className}
      role="img"
      aria-label="Water Damage Loan"
    >
      <path d="M15 2 C19 12 26 20 26 30 A11 11 0 1 1 4 30 C4 20 11 12 15 2 Z" fill="#3B82F6" />
      <text
        x="34"
        y="30"
        fontFamily="'Source Serif 4', Georgia, serif"
        fontWeight="700"
        fontSize="24"
        fill={word}
      >
        Water Damage
      </text>
      <text
        x="36"
        y="52"
        fontFamily="'Inter Tight', sans-serif"
        fontWeight="600"
        fontSize="11"
        letterSpacing="4"
        fill={sub}
      >
        LOAN
      </text>
    </svg>
  );
}
