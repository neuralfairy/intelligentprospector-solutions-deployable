import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "minimal";
}

const HeroSection = ({
  title,
  subtitle,
  description,
  children,
  className,
  variant = "default"
}: HeroSectionProps) => {
  const variants = {
    default: "bg-gradient-subtle",
    gradient: "bg-gradient-hero text-primary-foreground",
    minimal: "bg-background"
  };

  return (
    <section className={cn(
      "py-20 px-4 sm:px-6 lg:px-8",
      variants[variant],
      className
    )}>
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          {subtitle && (
            <p className="text-sm font-semibold tracking-wide uppercase mb-4 text-primary">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {children && (
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;