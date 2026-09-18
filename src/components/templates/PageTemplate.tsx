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
    <div className={`relative min-h-screen bg-[#080610] text-white selection:bg-[#ff008e] selection:text-white ${className}`}>
      {withAmbientGlow && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#ff008e]/15 via-[#581de3]/20 to-transparent blur-[160px] pointer-events-none -z-10"
        />
      )}
      {children}
    </div>
  );
}
