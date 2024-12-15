type Props = {
  className?: string;
};

export const Tongue = ({ className }: Props) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-labelledby="title">
      <title id="title">Tongue Icon</title>
      <path d="M12,9V5.76c.78-2.69,2.6-2.92,4.41-2.69,2.15.27,3.94,3.16,3.53,7.79-.46,7.15-3.3,9.14-4.85,9.62A10.59,10.59,0,0,1,12,21a10.59,10.59,0,0,1-3.09-.52C7.36,20,4.52,18,4.06,10.86,3.65,6.23,5.44,3.34,7.59,3.07c1.81-.23,3.63,0,4.41,2.69Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};
