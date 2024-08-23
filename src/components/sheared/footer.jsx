import React from 'react';
import Logo from '@/components/sheared/logo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 h-24">
      <div className="h-full flex items-center justify-evenly mb-4">
        <Logo size="sm" className="mr-4" />
        <p className="text-center text-sm text-muted-foreground pt-6 pb-4">
          &copy; {year} job4you. All rights reserved.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;

