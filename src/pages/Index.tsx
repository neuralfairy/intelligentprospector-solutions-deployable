import { Shield, CheckCircle, Users, BarChart3, Zap, Target, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero-section";
import CTASection from "@/components/sections/CTASection";
import heroImage from "@/assets/hero-image.jpg";
import featuresImage from "@/assets/features-image.jpg";
import validationIcons from "@/assets/validation-icons.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "99.9% Accuracy",
      description: "Industry-leading contact validation with real-time verification across multiple data sources."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Validate thousands of contacts in seconds with our high-performance API infrastructure."
    },
    {
      icon: Target,
      title: "Higher Deliverability",
      description: "Improve email deliverability rates by up to 40% with our advanced validation algorithms."
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Comprehensive reporting and insights to optimize your outbound campaigns."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "VP of Sales, TechCorp",
      content: "IntelligentProspector has transformed our outbound efforts. Our email deliverability improved by 35% in the first month.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Sales Director, DataFlow Inc",
      content: "The accuracy of their contact validation is unmatched. We've seen a significant reduction in bounced emails.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Marketing Manager, GrowthLabs",
      content: "Easy integration and fantastic support. The ROI was evident within weeks of implementation.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50M+", label: "Contacts Validated" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "500+", label: "Happy Customers" },
    { number: "40%", label: "Average Improvement" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        subtitle="Contact Validator"
        title="Validate Contacts. Boost Deliverability. Close More Deals."
        description="Professional contact validation and data verification that improves your outbound success rate with 99.9% accuracy."
        variant="gradient"
        className="min-h-[80vh] flex items-center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold" asChild>
            <a href="/contact">Start Free Trial</a>
          </Button>
          <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground px-8 py-4 text-lg font-semibold" asChild>
            <a href="/features">Watch Demo</a>
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img 
            src={heroImage} 
            alt="Professional team working on contact validation and data verification" 
            className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
          />
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </HeroSection>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose IntelligentProspector?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our Contact Validator combines advanced AI algorithms with real-time data verification 
              to ensure your outbound campaigns reach the right people, reducing bounce rates and improving deliverability.
            </p>
            <div className="mb-12 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={featuresImage} 
                alt="Contact validation dashboard showing email verification and data analytics" 
                className="rounded-xl shadow-lg mx-auto max-w-2xl w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-feature animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, powerful contact validation in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Upload Your Data",
                description: "Import your contact lists via CSV, API, or direct CRM integration."
              },
              {
                step: "02",
                title: "AI Validation",
                description: "Our advanced algorithms verify each contact across multiple data sources."
              },
              {
                step: "03",
                title: "Get Clean Data",
                description: "Receive validated contacts with detailed accuracy scores and insights."
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-6 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of satisfied customers who trust our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-feature animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with your favorite tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {["Salesforce", "HubSpot", "Pipedrive", "Monday.com", "Zapier", "Microsoft", "Google", "Slack"].map((integration, index) => (
              <div key={index} className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-12 w-12 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{integration.slice(0, 2)}</span>
                </div>
                <p className="text-sm font-medium">{integration}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="/features">
                View All Integrations <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Boost Your Outbound Success?"
        description="Join thousands of sales teams who trust IntelligentProspector for accurate contact validation. Start your free trial today."
        primaryCTA={{
          text: "Start Free Trial",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Book a Demo",
          href: "/contact"
        }}
      />
    </div>
  );
};

export default Index;
