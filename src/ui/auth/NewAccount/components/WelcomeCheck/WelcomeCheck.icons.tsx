export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="16" height="16" rx="8" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM14 8.05658L12.88 6.99907L8.776 10.8766L7.12 9.31658L6 10.3741L8.776 12.9991L14 8.05658Z"
        fill="#36C390"
      />
    </svg>
  );
};

export const UncheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="16" height="16" rx="8" fill="white" />
      <path
        d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
        fill="#9CA2B3"
      />
      <line x1="6" y1="10" x2="14" y2="10" stroke="white" strokeWidth="2" />
    </svg>
  );
};
