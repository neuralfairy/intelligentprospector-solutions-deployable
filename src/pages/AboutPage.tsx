import { Users, Target, Award, Globe, Shield, Zap, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero-section";
import CTASection from "@/components/sections/CTASection";

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Data Privacy & Security",
      description: "We prioritize the security and privacy of your data with enterprise-grade infrastructure and compliance standards."
    },
    {
      icon: Target,
      title: "Accuracy First",
      description: "Our commitment to 99.9% accuracy drives everything we do, from algorithm development to quality assurance."
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our success. We're dedicated to helping you achieve your outbound goals with exceptional support."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge AI and machine learning to stay ahead of industry needs."
    }
  ];

  const team = [
    {
      name: "Sarah Martinez",
      role: "CEO & Co-Founder",
      bio: "Former VP of Sales at TechFlow with 15+ years in B2B sales and data analytics. Led teams that generated $100M+ in revenue.",
      experience: "Stanford MBA, Ex-Salesforce"
    },
    {
      name: "Dr. Michael Chen",
      role: "CTO & Co-Founder",
      bio: "AI/ML expert with PhD in Computer Science. Previously led data science teams at Google and Amazon, specializing in large-scale data processing.",
      experience: "PhD Stanford, Ex-Google, Ex-Amazon"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Engineering",
      bio: "Full-stack engineer with expertise in scalable systems. Built high-performance APIs serving millions of requests daily at unicorn startups.",
      experience: "MIT CS, Ex-Stripe, Ex-Uber"
    },
    {
      name: "David Thompson",
      role: "VP of Sales",
      bio: "B2B sales leader with track record of building and scaling sales teams. Expertise in SaaS, data solutions, and enterprise sales.",
      experience: "Wharton MBA, Ex-HubSpot"
    }
  ];

  const stats = [
    { number: "2019", label: "Founded" },
    { number: "50M+", label: "Contacts Processed" },
    { number: "500+", label: "Enterprise Customers" },
    { number: "25+", label: "Team Members" }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a mission to solve data quality challenges for sales teams"
    },
    {
      year: "2020",
      title: "Series A Funding",
      description: "Raised $5M to accelerate product development and expand our team"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Launched international operations covering 190+ countries"
    },
    {
      year: "2022",
      title: "AI Platform Launch",
      description: "Introduced advanced AI-powered validation and enrichment capabilities"
    },
    {
      year: "2023",
      title: "Enterprise Growth",
      description: "Reached 500+ enterprise customers and 50M+ contacts processed"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as the leading contact validation platform with 99.9% accuracy"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        subtitle="About IntelligentProspector"
        title="Empowering Sales Teams with Accurate Data"
        description="We're on a mission to help businesses build stronger relationships through better data quality and contact validation."
        className="bg-gradient-hero text-primary-foreground"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </HeroSection>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To revolutionize B2B sales by providing the most accurate and comprehensive 
                contact validation platform, enabling sales teams to focus on building 
                relationships instead of chasing bad data.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that quality data is the foundation of successful sales outreach. 
                Our advanced AI-powered platform ensures every contact in your database is 
                verified, enriched, and ready for meaningful engagement.
              </p>
            </div>
            
            <div className="animate-slide-up">
              <Card className="card-elevated p-8">
                <Globe className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the global standard for contact data quality, empowering 
                  businesses worldwide to build authentic connections and drive growth 
                  through trusted, accurate information.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-feature text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced leaders driving innovation in data quality and sales technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-feature animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://salescentri.com/company/careers">
                Join Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our growth and innovation
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <Card className="flex-1 p-6 border-l-4 border-l-primary">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by industry leaders and certified for enterprise security
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "SOC 2 Type II", type: "Security" },
              { name: "GDPR Compliant", type: "Privacy" },
              { name: "ISO 27001", type: "Security" },
              { name: "CCPA Compliant", type: "Privacy" },
              { name: "Best Data Platform 2024", type: "Award" },
              { name: "Top 50 SaaS 2024", type: "Recognition" },
              { name: "G2 Leader", type: "Review" },
              { name: "TrustRadius Top Rated", type: "Review" }
            ].map((cert, index) => (
              <Card key={index} className="card-feature text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.type}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work with Us?"
        description="Join hundreds of companies that trust IntelligentProspector for their contact validation needs."
        primaryCTA={{
          text: "Start Free Trial",
          href: "https://salescentri.com/get-started/free-trial"
        }}
        secondaryCTA={{
          text: "Contact Our Team",
          href: "https://salescentri.com/contact/sales-inquiry"
        }}
      />
    </div>
  );
};

export default AboutPage;