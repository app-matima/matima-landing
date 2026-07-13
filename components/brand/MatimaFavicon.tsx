import clsx from "clsx";

interface MatimaFaviconProps {
  color?: string;
  fillOpacity?: number;
  className?: string;
  "aria-label"?: string;
}

export function MatimaFavicon({
  color = "#00A394",
  fillOpacity = 1,
  className,
  "aria-label": ariaLabel,
}: MatimaFaviconProps) {
  return (
    <svg
      viewBox="0 0 350 350"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? "img" : undefined}
    >
      <path
        fill={color}
        fillOpacity={fillOpacity}
        d="M175,0C78.35,0,0,78.35,0,175s78.35,175,175,175,175-78.35,175-175S271.65,0,175,0ZM131.17,98.55c0-13,10.58-23.55,23.64-23.55s23.64,10.54,23.64,23.55-10.58,23.55-23.64,23.55-23.64-10.54-23.64-23.55ZM218.5,274.79l-37.03.21v-73.64s-8.32-18.77-8.32-18.77l-22.55-.45-.02,92.23-5.81.43.35-111.61,18.05-.2-17.73-35.95,37.92-.29,35.45,73.35-.33,74.67Z"
      />
    </svg>
  );
}
