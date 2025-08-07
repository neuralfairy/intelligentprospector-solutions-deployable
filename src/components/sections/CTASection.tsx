import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

const CTASection = ({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href={primaryCTA.href}>{primaryCTA.text}</a>
            </Button>
            {secondaryCTA && (
              <Button 
                size="lg" 
                variant="outline" 
                className="border-background text-background hover:bg-background hover:text-foreground px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;