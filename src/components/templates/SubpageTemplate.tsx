import React from "react";
import { PageTemplate } from "./PageTemplate";

export interface SubpageTemplateProps {
  children: React.ReactNode;
  className?: string;
  withTopPadding?: boolean;
}

export function SubpageTemplate({
  children,
  className = "",
  withTopPadding = true,
}: SubpageTemplateProps) {
  return (
    <PageTemplate className={`w-full overflow-x-clip ${withTopPadding ? "pt-24 sm:pt-32 lg:pt-36" : ""} ${className}`}>
      {children}
    </PageTemplate>
  );
}
