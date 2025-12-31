import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  className?: string;
  href?: string; 
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark-950 cursor-pointer select-none";
  
  const variants = {
    primary: "bg-gold-500 text-dark-950 hover:bg-gold-400 font-bold shadow-lg hover:shadow-gold-500/20",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-950",
    text: "text-gold-500 hover:text-gold-400 underline-offset-4 hover:underline p-0"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 1. Aggressively prevent default behavior unless it's a submit button
    // This stops the browser from navigating/reloading which causes the white screen
    if (type !== 'submit') {
      e.preventDefault();
      e.stopPropagation(); 
    }

    // 2. Run custom onClick if exists
    if (onClick) {
      onClick(e);
    }

    if (!href) return;

    // 3. Handle Internal Links (Smooth Scroll)
    if (href.startsWith('#')) {
      try {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.warn("Seção não encontrada:", href);
      }
      return;
    }

    // 4. Handle External Links (Open in New Tab)
    // CRITICAL: Force _blank to prevent iframe preview crashes
    try {
      window.open(href, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error("Erro ao abrir link externo", err);
    }
  };

  return (
    <button 
      type={type} 
      className={combinedClasses} 
      onClick={handleClick} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;