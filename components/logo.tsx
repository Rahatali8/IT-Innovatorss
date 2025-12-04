import type React from "react"
import Image from "next/image"
export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="0" y="28" fill="white" fontFamily="monospace" fontSize="20" fontWeight="bold" letterSpacing="1">
      IT-INNOVATORSS
      </text>
    </svg>
  );
};
