import React from "react";

export interface PageTemplateProps {
  children: React.ReactNode;
  className?: string;
  withAmbientGlow?: boolean;
}

export function PageTemplate({
  children,
  className = "",
  withAmbientGlow = true,
}: PageTemplateProps) {
  return (
    <div className={`relative min-h-screen bg-[#080610] text-white selection:bg-[#ff008e] selection:text-white overflow-x-clip w-full max-w-full ${className}`}>
      {withAmbientGlow && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[500px] overflow-hidden pointer-events-none -z-10"
        >
          <div className="mx-auto w-[800px] max-w-full h-[500px] bg-gradient-to-tr from-[#ff008e]/15 via-[#581de3]/20 to-transparent blur-[160px]" />
        </div>
      )}
      {children}
    </div>
  );
}
