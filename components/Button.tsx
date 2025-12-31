import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  className?: string;
  href?: string; // If provided, renders as an <a> tag
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark-950 cursor-pointer";
  
  const variants = {
    primary: "bg-gold-500 text-dark-950 hover:bg-gold-400 font-bold",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-950",
    text: "text-gold-500 hover:text-gold-400 underline-offset-4 hover:underline p-0"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Internal Anchor - Manual Scroll to prevent routing crash
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // External link - Intercept for Demo Mode
    if (href && (href.startsWith('http') || href.startsWith('mailto'))) {
      e.preventDefault();
      
      let action = "redirecionado para um link externo";
      if (href.includes('wa.me')) action = "abrir o WhatsApp";
      if (href.includes('mailto')) action = "abrir seu cliente de E-mail";
      if (href.includes('maps')) action = "abrir o Google Maps";
      if (href.includes('instagram')) action = "abrir o Instagram";

      alert(`⚠️ MODO DEMONSTRAÇÃO\n\nEm um site real, esta ação iria ${action}.\n\nLink alvo: ${href}`);
    }
  };

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={handleLinkClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;