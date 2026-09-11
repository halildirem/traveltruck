const paths = {
  star: (
    <path d="M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.94z" />
  ),
  map: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 4 3.5 6v13.5L9 17.5m0-13.5 6 2m-6-2v13.5m6-11.5 5.5-2v13.5L15 19.5m0-13.5v13.5m0 0-6-2"
    />
  ),
  heart: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.5S3.5 15 3.5 8.9A4.4 4.4 0 0 1 12 7.2a4.4 4.4 0 0 1 8.5 1.7C20.5 15 12 20.5 12 20.5Z"
    />
  ),
  heartFilled: (
    <path d="M12 20.8S3 15 3 8.7A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 9 2.1C21 15 12 20.8 12 20.8Z" />
  ),
  engine: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16M4 21h11M14 10h3.2a2 2 0 0 1 1.5.7l1.8 2a2 2 0 0 1 .5 1.3V18a2 2 0 0 1-4 0v-3M14 8V5.5a1 1 0 0 1 1-1"
    />
  ),
  transmission: (
    <>
      <circle
        cx="6"
        cy="5.5"
        r="2.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="6"
        cy="18.5"
        r="2.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="18"
        cy="5.5"
        r="2.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M6 7.6v8.8M18 7.6v3.2a3 3 0 0 1-3 3H6"
      />
    </>
  ),
  form: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.5 14h13l3.2 3.5H21a.5.5 0 0 0 .5-.5v-2.3a2 2 0 0 0-.6-1.4L16 8H5a2.5 2.5 0 0 0-2.5 2.5V17h2M2.5 14V17m6.5 0H7.5"
    />
  ),
  close: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      d="M18 6 6 18M6 6l12 12"
    />
  ),
  check: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5 12.5 4.5 4.5L19 7"
    />
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5v5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16.3" r="1.1" />
    </>
  ),
};

const Icon = ({ name, size = 20, className, ...rest }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {paths[name]}
  </svg>
);

export default Icon;
