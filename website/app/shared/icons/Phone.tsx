export function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ?? 'fill-[currentColor]'}
      {...props}
    >
      <path d="M10 20H14V19H10V20ZM7 23C6.45 23 5.979 22.804 5.587 22.412C5.195 22.02 4.99934 21.5493 5 21V3C5 2.45 5.196 1.979 5.588 1.587C5.98 1.195 6.45067 0.999335 7 1H17C17.55 1 18.021 1.196 18.413 1.588C18.805 1.98 19.0007 2.45067 19 3V21C19 21.55 18.804 22.021 18.412 22.413C18.02 22.805 17.5493 23.0007 17 23H7ZM7 16H17V6H7V16Z" />
    </svg>
  );
}
