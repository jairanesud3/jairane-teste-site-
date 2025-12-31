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
  type = 'button', // Default to 'button' to prevent form submission behavior
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark-950 cursor-pointer";
  
  const variants = {
    primary: "bg-gold-500 text-dark-950 hover:bg-gold-400 font-bold",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-950",
    text: "text-gold-500 hover:text-gold-400 underline-offset-4 hover:underline p-0"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // CRITICAL: Always prevent default unless it's explicitly a submit button
    // This stops the browser from trying to navigate or reload the page
    if (type !== 'submit') {
      e.preventDefault();
    }

    // Call external onClick handler if provided
    if (onClick) {
      onClick(e);
    }

    if (!href) return;

    // Internal Anchor - Manual Scroll with Safety Try/Catch
    if (href.startsWith('#')) {
      try {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.error("Erro ao rolar para seção:", error);
      }
      return;
    }

    // External link - Intercept for Demo Mode
    let action = "redirecionado para um link externo";
    if (href.includes('wa.me')) action = "abrir o WhatsApp";
    if (href.includes('mailto')) action = "abrir seu cliente de E-mail";
    if (href.includes('maps')) action = "abrir o Google Maps";
    if (href.includes('instagram')) action = "abrir o Instagram";

    alert(`⚠️ MODO DEMONSTRAÇÃO\n\nEm um site real, esta ação iria ${action}.\n\nLink alvo: ${href}`);
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