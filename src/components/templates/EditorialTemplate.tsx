import React from "react";

export interface EditorialTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export function EditorialTemplate({
  children,
  className = "",
}: EditorialTemplateProps) {
  return (
    <div
      className={`relative min-h-screen bg-[#faf8fc] text-[#0e0a20] font-sans antialiased selection:bg-[#ff008e] selection:text-white overflow-x-clip w-full max-w-full ${className}`}
    >
      {/* Editorial High-Key Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[800px] overflow-hidden -z-10"
      >
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-b from-[#f3e9fb]/80 via-[#f9f3fd]/50 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[80px] right-[5%] w-[450px] h-[450px] bg-gradient-to-tr from-[#ff008e]/08 to-transparent blur-[100px] rounded-full" />
        <div className="absolute top-[140px] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-[#581de3]/06 to-transparent blur-[90px] rounded-full" />
      </div>

      {children}
    </div>
  );
}
