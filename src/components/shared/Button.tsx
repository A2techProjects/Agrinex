import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  href = "#",
  ...props
}) => {
  
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-between
        text-black
        pl-4 rounded-full
        shadow-sm transition-all duration-200 hover:shadow-md
        group cursor-pointer
        ${className}
      `}
      {...props}
    >
      {/* Dynamic Content or Default Text */}
      <span className="text-sm md:text-xl whitespace-nowrap font-cottorway uppercase font-semibold">
        {children || 'GET STARTED'}
      </span>

      {/* Green Arrow Circle */}
      <span className="flex items-center justify-center bg-primary text-black size-8 md:size-12 ml-6 m-0.5 rounded-full transition-transform duration-200 flex-shrink-0">
        <ArrowRight className="size-4 md:size-8 stroke-[2]" />
      </span>
    </Link>
  );
};

export default Button;