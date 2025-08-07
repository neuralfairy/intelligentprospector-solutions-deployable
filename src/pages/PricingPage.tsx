import { Check, X, Star, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import HeroSection from "@/components/ui/hero-section";
import CTASection from "@/components/sections/CTASection";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      originalPrice: isAnnual ? 39 : null,
      period: "month",
      description: "Perfect for small teams getting started with contact validation",
      features: [
        "5,000 validations/month",
        "Real-time email verification",
        "Basic data enrichment",
        "CSV upload/download",
        "Email support",
        "Standard integrations",
        "Basic analytics"
      ],
      limitations: [
        "No phone validation",
        "Limited API calls",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      href: "https://salescentri.com/get-started/free-trial",
      popular: false
    },
    {
      name: "Professional",
      price: isAnnual ? 99 : 129,
      originalPrice: isAnnual ? 129 : null,
      period: "month",
      description: "Ideal for growing sales teams and marketing departments",
      features: [
        "25,000 validations/month",
        "Real-time email verification",
        "Advanced data enrichment",
        "Phone number validation",
        "Address standardization",
        "API access (10,000 calls/month)",
        "All integrations",
        "Advanced analytics",
        "Priority support",
        "Custom validation rules",
        "Duplicate detection"
      ],
      limitations: [
        "Limited white-label options"
      ],
      cta: "Start Free Trial",
      href: "https://salescentri.com/get-started/free-trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "Tailored solutions for large organizations with specific needs",
      features: [
        "Unlimited validations",
        "All Professional features",
        "White-label solutions",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "SLA guarantees",
        "Custom validation rules",
        "Advanced security",
        "Training & onboarding",
        "Custom reporting",
        "Priority processing"
      ],
      limitations: [],
      cta: "Contact Sales",
      href: "https://salescentri.com/contact/sales-inquiry",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What counts as a validation?",
      answer: "Each email address checked counts as one validation. This includes real-time verification, bulk uploads, and API calls."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You only pay for your monthly or annual subscription."
    },
    {
      question: "How accurate is the validation?",
      answer: "Our validation service maintains a 99.9% accuracy rate across all validation types, including email, phone, and address verification."
    },
    {
      question: "Can I get a custom plan?",
      answer: "Yes, we offer custom Enterprise plans tailored to your specific needs. Contact our sales team to discuss your requirements."
    }
  ];

  const addOns = [
    {
      name: "Additional Validations",
      price: "$0.002",
      unit: "per validation",
      description: "Extra validations beyond your plan limit"
    },
    {
      name: "Premium Support",
      price: "$199",
      unit: "per month",
      description: "24/7 phone support and dedicated success manager"
    },
    {
      name: "Advanced Analytics",
      price: "$99",
      unit: "per month",
      description: "Custom dashboards and advanced reporting features"
    },
    {
      name: "White Label",
      price: "$299",
      unit: "per month",
      description: "Remove branding and customize with your company logo"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        subtitle="Transparent Pricing"
        title="Choose the Perfect Plan for Your Needs"
        description="Simple, transparent pricing that scales with your business. Start with a free trial on any plan."
        className="bg-gradient-subtle"
      >
        {/* Annual/Monthly Toggle */}
        <div className="flex items-center justify-center mb-8">
          <span className={`mr-3 ${!isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`ml-3 ${isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
            Annual
          </span>
          {isAnnual && (
            <Badge className="ml-2 bg-success text-success-foreground">
              Save 25%
            </Badge>
          )}
        </div>
      </HeroSection>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-8 ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'} animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    {typeof plan.price === 'number' ? (
                      <div className="flex items-baseline justify-center">
                        {plan.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through mr-2">
                            ${plan.originalPrice}
                          </span>
                        )}
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground ml-1">/{plan.period}</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold">{plan.price}</div>
                    )}
                  </div>

                  <Button 
                    className={plan.popular ? "btn-hero w-full" : "w-full"} 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href={plan.href}>{plan.cta}</a>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Included Features</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-muted-foreground">Limitations</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start">
                            <X className="h-4 w-4 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Optional Add-ons
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your plan with additional features and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="card-feature animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-semibold mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-primary mb-2">
                  {addon.price}
                  <span className="text-sm font-normal text-muted-foreground">/{addon.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <Calculator className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how much time and money you can save with IntelligentProspector's contact validation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/recommendations">
                  Use ROI Calculator
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://salescentri.com/get-started/book-demo">
                  Book Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/contact/support-request">
                Contact Support <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Join thousands of companies already using IntelligentProspector to improve their outbound success rates."
        primaryCTA={{
          text: "Start Free Trial",
          href: "https://salescentri.com/get-started/free-trial"
        }}
        secondaryCTA={{
          text: "Contact Sales",
          href: "https://salescentri.com/contact/sales-inquiry"
        }}
      />
    </div>
  );
};

export default PricingPage;