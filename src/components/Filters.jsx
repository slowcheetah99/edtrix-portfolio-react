export function Turbulence() {
  return (
    <svg>
      <filter>
        <feTurbulence
          baseFrequency="0.02 0.03"
          result="NOISE"
          numOctaves="1"
          id="turbulence"
        />
      </filter>
    </svg>
  );
}
