import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/ui/hero-section";

const BlogPage = () => {
  const featuredPost = {
    title: "The Complete Guide to Email Deliverability in 2024",
    excerpt: "Learn the latest strategies and best practices to improve your email deliverability rates and avoid the spam folder.",
    author: "Sarah Martinez",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Email Marketing",
    image: "/api/placeholder/600/400",
    href: "https://salescentri.com/resources/whitepapers-ebooks"
  };

  const blogPosts = [
    {
      title: "5 Signs Your Contact Database Needs Cleaning",
      excerpt: "Discover the warning signs that indicate your contact database needs immediate attention and validation.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "5 min read",
      category: "Data Quality",
      href: "https://salescentri.com/resources/case-studies"
    },
    {
      title: "ROI Calculator: The True Cost of Bad Data",
      excerpt: "Calculate exactly how much poor data quality is costing your business and the potential savings from validation.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Business Impact",
      href: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "GDPR Compliance for Contact Validation",
      excerpt: "Understanding GDPR requirements and how to maintain compliance while validating contact data across Europe.",
      author: "David Thompson",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Compliance",
      href: "https://salescentri.com/trust/security-privacy"
    },
    {
      title: "API Integration Best Practices",
      excerpt: "Step-by-step guide to integrating contact validation APIs into your existing sales and marketing workflows.",
      author: "Technical Team",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Technical",
      href: "https://salescentri.com/docs/api-reference"
    },
    {
      title: "B2B Sales Outreach: Quality vs Quantity",
      excerpt: "Why focusing on contact quality leads to better conversion rates than casting a wide net with unvalidated data.",
      author: "Sarah Martinez",
      date: "March 3, 2024",
      readTime: "4 min read",
      category: "Sales Strategy",
      href: "https://salescentri.com/resources/case-studies"
    },
    {
      title: "Industry Spotlight: Healthcare Contact Validation",
      excerpt: "Special considerations and requirements for validating contact data in the healthcare industry.",
      author: "Compliance Team",
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "Industry Focus",
      href: "https://salescentri.com/solutions/by-industry/healthcare"
    }
  ];

  const categories = [
    "All Posts",
    "Email Marketing",
    "Data Quality",
    "Business Impact",
    "Compliance",
    "Technical",
    "Sales Strategy",
    "Industry Focus"
  ];

  const popularTags = [
    "Email Validation",
    "Data Quality",
    "GDPR",
    "API Integration",
    "Sales Outreach",
    "Deliverability",
    "B2B Sales",
    "Contact Management"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        subtitle="Knowledge Hub"
        title="Insights & Best Practices"
        description="Stay updated with the latest trends, strategies, and insights in contact validation and data quality management."
        className="bg-gradient-subtle"
      >
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input 
              placeholder="Search articles..." 
              className="flex-1"
            />
            <Button>Search</Button>
          </div>
        </div>
      </HeroSection>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Featured Article
            </h2>
          </div>

          <Card className="overflow-hidden animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Featured Article</p>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <Badge className="mb-4">{featuredPost.category}</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button asChild>
                  <a href={featuredPost.href}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8 animate-fade-in">Latest Articles</h2>
              
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="card-feature animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="sm:w-48 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                          <a href={post.href}>{post.title}</a>
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="h-4 w-4 mr-1" />
                            <span className="mr-4">{post.author}</span>
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{post.date}</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={post.href}>
                              Read More <ArrowRight className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://salescentri.com/resources/whitepapers-ebooks">
                    Load More Articles
                  </a>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8 sticky top-24">
                {/* Categories */}
                <Card className="p-6 animate-fade-in">
                  <h3 className="font-semibold text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="block w-full text-left text-sm py-2 px-3 rounded hover:bg-accent transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Popular Tags */}
                <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <h3 className="font-semibold text-lg mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Newsletter Signup */}
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest insights delivered to your inbox weekly.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Your email address" type="email" />
                    <Button className="w-full" asChild>
                      <a href="https://salescentri.com/contact">Subscribe</a>
                    </Button>
                  </div>
                </Card>

                {/* Resources */}
                <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <h3 className="font-semibold text-lg mb-4">Additional Resources</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://salescentri.com/resources/whitepapers-ebooks"
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      📖 Whitepapers & eBooks
                    </a>
                    <a 
                      href="https://salescentri.com/resources/case-studies"
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      📊 Case Studies
                    </a>
                    <a 
                      href="https://salescentri.com/resources/tutorials-webinars"
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      🎥 Tutorials & Webinars
                    </a>
                    <a 
                      href="https://salescentri.com/docs/user-guide"
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      📚 Documentation
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Improve Your Data Quality?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Put these insights into practice with our contact validation platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-background text-background hover:bg-background hover:text-foreground px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="https://salescentri.com/get-started/book-demo">Book a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;