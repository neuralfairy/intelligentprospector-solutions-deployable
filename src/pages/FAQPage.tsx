import { useState } from "react";
import { Plus, Minus, Search, MessageCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero-section";
import { cn } from "@/lib/utils";

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "Contact Validation",
      faqs: [
        {
          question: "How accurate is your contact validation service?",
          answer: "Our contact validation service maintains a 99.9% accuracy rate. We use advanced algorithms that verify email addresses through multiple validation layers including syntax checking, domain verification, and mailbox existence confirmation."
        },
        {
          question: "What types of contact data can you validate?",
          answer: "We validate email addresses, phone numbers, and postal addresses. Our comprehensive validation covers syntax verification, domain checks, carrier validation for phones, and address standardization using postal service databases."
        },
        {
          question: "How fast is the validation process?",
          answer: "Our real-time API can validate up to 10,000 contacts per second. Bulk validation jobs are processed within minutes, and individual validations return results in under 100 milliseconds."
        },
        {
          question: "Do you validate international contacts?",
          answer: "Yes, we support contact validation for 190+ countries worldwide. Our system understands local formats, regulations, and postal standards for comprehensive global coverage."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      faqs: [
        {
          question: "What's included in the free trial?",
          answer: "The free trial includes 1,000 contact validations, access to our real-time API, basic data enrichment features, and email support. No credit card required to start."
        },
        {
          question: "Can I upgrade or downgrade my plan anytime?",
          answer: "Yes, you can change your plan at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at your next billing cycle to ensure you get full value from your current plan."
        },
        {
          question: "What happens if I exceed my monthly limit?",
          answer: "You can purchase additional validations at $0.002 per validation, or upgrade to a higher plan. We'll notify you when you reach 80% and 100% of your limit to help you manage usage."
        },
        {
          question: "Do you offer custom enterprise pricing?",
          answer: "Yes, we offer custom pricing for enterprises with high-volume needs, specific compliance requirements, or unique integration needs. Contact our sales team for a personalized quote."
        }
      ]
    },
    {
      category: "Integration & API",
      faqs: [
        {
          question: "How do I integrate with your API?",
          answer: "Our REST API is designed for easy integration. We provide comprehensive documentation, SDKs for popular programming languages, and sample code. Most developers can complete integration in under an hour."
        },
        {
          question: "Which CRM systems do you integrate with?",
          answer: "We integrate with all major CRM systems including Salesforce, HubSpot, Pipedrive, Zoho, and Microsoft Dynamics. We also support integration via Zapier for 1000+ additional applications."
        },
        {
          question: "Is there a rate limit on API calls?",
          answer: "Rate limits depend on your plan. Starter plans have 1,000 calls per hour, Professional plans allow 10,000 calls per hour, and Enterprise plans have custom limits based on your needs."
        },
        {
          question: "Do you provide webhooks for real-time updates?",
          answer: "Yes, we support webhooks to notify your application of validation results, batch job completions, and account status changes in real-time."
        }
      ]
    },
    {
      category: "Security & Compliance",
      faqs: [
        {
          question: "How do you ensure data security?",
          answer: "We use enterprise-grade security including AES-256 encryption, SOC 2 Type II compliance, and ISO 27001 certification. All data is encrypted in transit and at rest, with strict access controls."
        },
        {
          question: "Are you GDPR compliant?",
          answer: "Yes, we are fully GDPR compliant. We process data as a processor under GDPR, provide data processing agreements, and support data subject rights including deletion and portability."
        },
        {
          question: "How long do you store contact data?",
          answer: "We store contact data only as long as necessary for validation purposes. Personal data is automatically deleted after 30 days unless longer retention is required for compliance or agreed upon contractually."
        },
        {
          question: "Do you share data with third parties?",
          answer: "No, we never share your contact data with third parties for marketing or commercial purposes. We only use trusted data providers for validation purposes under strict confidentiality agreements."
        }
      ]
    },
    {
      category: "Support & Training",
      faqs: [
        {
          question: "What support channels do you offer?",
          answer: "We provide 24/7 live chat, email support with 4-hour response time, phone support during business hours, and a comprehensive knowledge base. Enterprise customers get dedicated account managers."
        },
        {
          question: "Do you provide onboarding assistance?",
          answer: "Yes, all new customers receive onboarding support including setup assistance, integration guidance, and best practices training. Enterprise customers get dedicated onboarding sessions."
        },
        {
          question: "Is training available for my team?",
          answer: "We offer training sessions for your team including platform usage, API integration, and best practices for contact validation. These can be conducted virtually or on-site for enterprise customers."
        },
        {
          question: "How can I get implementation help?",
          answer: "Our technical support team can assist with implementation. We also offer professional services for complex integrations, custom workflows, and migration from other platforms."
        }
      ]
    }
  ];

  const allFAQs = faqCategories.flatMap((category, categoryIndex) =>
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      categoryIndex,
      globalIndex: categoryIndex * 100 + faqIndex,
      category: category.category
    }))
  );

  const filteredFAQs = searchTerm
    ? allFAQs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allFAQs;

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        subtitle="Frequently Asked Questions"
        title="Get Answers to Your Questions"
        description="Find quick answers to common questions about contact validation, pricing, integration, and more."
        className="bg-gradient-subtle"
      >
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </HeroSection>

      {/* FAQ Categories Overview */}
      {!searchTerm && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-muted-foreground">
                Find answers organized by topic
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faqCategories.map((category, index) => (
                <Card key={index} className="card-feature text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.faqs.length} questions answered
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      const element = document.getElementById(`category-${index}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View Questions
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            <div>
              <h2 className="text-2xl font-bold mb-8 animate-fade-in">
                Search Results ({filteredFAQs.length} found)
              </h2>
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                    <button
                      onClick={() => toggleFAQ(faq.globalIndex)}
                      className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-primary font-medium mb-1">{faq.category}</div>
                          <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                        </div>
                        {openFAQ === faq.globalIndex ? (
                          <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        openFAQ === faq.globalIndex ? "max-h-96 pb-6" : "max-h-0"
                      )}
                    >
                      <div className="px-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} id={`category-${categoryIndex}`} className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      return (
                        <Card key={faqIndex} className="animate-slide-up" style={{ animationDelay: `${faqIndex * 0.1}s` }}>
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                              {openFAQ === globalIndex ? (
                                <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                              ) : (
                                <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                              )}
                            </div>
                          </button>
                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-300",
                              openFAQ === globalIndex ? "max-h-96 pb-6" : "max-h-0"
                            )}
                          >
                            <div className="px-6">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero" asChild>
                <a href="https://salescentri.com/contact/support-request/live-chat">
                  Start Live Chat
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://salescentri.com/contact/support-request">
                  Contact Support
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="https://salescentri.com/docs/user-guide">
                  View Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore more ways to get help and learn about contact validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-feature text-center animate-slide-up">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive guides and API references
              </p>
              <Button variant="outline" asChild>
                <a href="https://salescentri.com/docs/user-guide">Browse Docs</a>
              </Button>
            </Card>

            <Card className="card-feature text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground mb-4">
                Connect with other users and share experiences
              </p>
              <Button variant="outline" asChild>
                <a href="https://salescentri.com/contact">Join Community</a>
              </Button>
            </Card>

            <Card className="card-feature text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Knowledge Base</h3>
              <p className="text-muted-foreground mb-4">
                Tutorials, best practices, and troubleshooting
              </p>
              <Button variant="outline" asChild>
                <a href="https://salescentri.com/resources/tutorials-webinars">Explore</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;