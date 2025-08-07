import { Shield, Zap, Target, BarChart3, Globe, Clock, Database, CheckCircle2, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/ui/hero-section";
import CTASection from "@/components/sections/CTASection";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: "Real-Time Email Verification",
      description: "Verify email addresses in real-time with our advanced validation algorithms that check syntax, domain validity, and mailbox existence.",
      benefits: ["99.9% accuracy rate", "Instant verification", "Bulk processing", "API integration"],
      badge: "Core Feature"
    },
    {
      icon: Database,
      title: "Data Enrichment",
      description: "Enhance your contact data with additional information including social profiles, company data, and contact preferences.",
      benefits: ["Complete profiles", "Social data", "Company insights", "Contact scoring"],
      badge: "Popular"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Validate contacts across 190+ countries with local expertise and compliance for international data regulations.",
      benefits: ["190+ countries", "GDPR compliant", "Local regulations", "Multi-language"],
      badge: "Enterprise"
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process thousands of contacts per second with our high-performance infrastructure and optimized algorithms.",
      benefits: ["10k+ contacts/sec", "Parallel processing", "99.9% uptime", "Auto-scaling"],
      badge: "Performance"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get detailed insights into your contact quality, campaign performance, and data health with comprehensive reporting.",
      benefits: ["Quality scores", "Trend analysis", "Custom reports", "Data visualization"],
      badge: "Insights"
    },
    {
      icon: Target,
      title: "Smart Segmentation",
      description: "Automatically segment your contacts based on validation results, engagement scores, and demographic data.",
      benefits: ["Auto-segmentation", "Custom rules", "Engagement scoring", "Dynamic lists"],
      badge: "AI-Powered"
    }
  ];

  const additionalFeatures = [
    "Duplicate detection and removal",
    "Phone number validation",
    "Address standardization",
    "Company domain matching",
    "Role-based email detection",
    "Disposable email filtering",
    "Bounce prediction",
    "Deliverability scoring",
    "Custom validation rules",
    "Real-time monitoring",
    "Webhook notifications",
    "White-label solutions"
  ];

  const integrations = [
    {
      category: "CRM Systems",
      tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Microsoft Dynamics"]
    },
    {
      category: "Email Platforms",
      tools: ["Mailchimp", "Constant Contact", "SendGrid", "Campaign Monitor", "ActiveCampaign"]
    },
    {
      category: "Sales Tools",
      tools: ["Outreach", "SalesLoft", "Apollo", "ZoomInfo", "LinkedIn Sales Navigator"]
    },
    {
      category: "Automation",
      tools: ["Zapier", "Microsoft Power Automate", "IFTTT", "Integromat", "Workato"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        subtitle="Powerful Features"
        title="Everything You Need for Contact Validation"
        description="Comprehensive tools and features designed to maximize your outbound success rate and data quality."
        className="bg-gradient-subtle"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="btn-hero" asChild>
            <a href="https://salescentri.com/solutions/use-case-navigator/demo">
              <Play className="mr-2 h-5 w-5" />
              Watch Interactive Demo
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
          </Button>
        </div>
      </HeroSection>

      {/* Main Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="card-feature animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Additional Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive features to handle all your contact validation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with your favorite tools and existing workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((category, index) => (
              <Card key={index} className="card-feature animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold mb-4 text-primary">{category.category}</h3>
                <ul className="space-y-2">
                  {category.tools.map((tool, i) => (
                    <li key={i} className="text-muted-foreground flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://salescentri.com/solutions/psa-suite/integrations">
                View All Integrations <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Performance That Delivers
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading metrics you can count on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "Accuracy Rate", icon: Shield },
              { metric: "<100ms", label: "Response Time", icon: Clock },
              { metric: "50M+", label: "Contacts Processed", icon: Database },
              { metric: "190+", label: "Countries Supported", icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Experience the Power of Accurate Data"
        description="Start validating your contacts today and see the immediate impact on your outbound campaigns."
        primaryCTA={{
          text: "Start Free Trial",
          href: "https://salescentri.com/get-started/free-trial"
        }}
        secondaryCTA={{
          text: "Schedule Demo",
          href: "https://salescentri.com/get-started/book-demo"
        }}
      />
    </div>
  );
};

export default FeaturesPage;