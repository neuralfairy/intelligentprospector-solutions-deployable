import { Mail, Phone, MapPin, Clock, MessageSquare, HeadphonesIcon, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import HeroSection from "@/components/ui/hero-section";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      href: "https://salescentri.com/contact/support-request/live-chat",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      href: "tel:+1-555-0123",
      available: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      href: "mailto:support@intelligentprospector.com",
      available: "Response within 4 hours"
    },
    {
      icon: FileText,
      title: "Submit Ticket",
      description: "Create a support ticket for tracking",
      action: "Submit Ticket",
      href: "https://salescentri.com/contact/support-request/submit-ticket",
      available: "24/7"
    }
  ];

  const contactReasons = [
    {
      title: "Sales Inquiry",
      description: "Questions about pricing, plans, or demos",
      icon: Phone,
      href: "https://salescentri.com/contact/sales-inquiry"
    },
    {
      title: "Technical Support",
      description: "Help with integration, API, or platform issues",
      icon: HeadphonesIcon,
      href: "https://salescentri.com/contact/support-request"
    },
    {
      title: "Partnership Opportunities",
      description: "Explore integration and business partnerships",
      icon: FileText,
      href: "https://salescentri.com/contact/partnerships"
    }
  ];

  const offices = [
    {
      city: "Charlotte, NC",
      address: "1234 South Tryon Street, Suite 500",
      zipcode: "Charlotte, NC 28203",
      phone: "+1 (555) 012-3456",
      email: "charlotte@intelligentprospector.com",
      primary: true
    },
    {
      city: "Austin, TX",
      address: "567 Congress Avenue, Suite 200",
      zipcode: "Austin, TX 78701",
      phone: "+1 (555) 789-0123",
      email: "austin@intelligentprospector.com",
      primary: false
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        subtitle="Get in Touch"
        title="We're Here to Help"
        description="Have questions about contact validation? Need help with implementation? Our team of experts is ready to assist you."
        className="bg-gradient-subtle"
      />

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              How Can We Help You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-feature text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <p className="text-sm text-primary font-medium mb-4">{method.available}</p>
                <Button className="w-full" asChild>
                  <a href={method.href}>{method.action}</a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Contact Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactReasons.map((reason, index) => (
              <Card key={index} className="card-feature animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground mb-4">{reason.description}</p>
                    <Button variant="outline" asChild>
                      <a href={reason.href}>Get Started</a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="p-8 animate-slide-up">
            <form className="space-y-6" action="https://salescentri.com/contact" method="post">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <Input id="company" name="company" required />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                    Inquiry Type *
                  </label>
                  <Select name="inquiryType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="demo">Request Demo</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  placeholder="Tell us about your needs, questions, or how we can help you..."
                  required 
                />
              </div>

              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  name="newsletter"
                  className="rounded border-border"
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  Subscribe to our newsletter for product updates and industry insights
                </label>
              </div>

              <div className="text-center">
                <Button type="submit" size="lg" className="btn-hero px-12">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit us or get in touch with our local teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className={`card-feature ${office.primary ? 'border-primary' : ''} animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{office.city}</h3>
                  {office.primary && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                      Headquarters
                    </span>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-muted-foreground">{office.address}</p>
                      <p className="text-muted-foreground">{office.zipcode}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Monday - Friday, 9AM - 6PM EST</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`https://maps.google.com?q=${encodeURIComponent(office.address + ', ' + office.zipcode)}`} target="_blank" rel="noopener noreferrer">
                      View on Map
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get help right away with our instant support options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="https://salescentri.com/contact/support-request/live-chat">Start Live Chat</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-background text-background hover:bg-background hover:text-foreground px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="https://salescentri.com/get-started/book-demo">Book Demo Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;