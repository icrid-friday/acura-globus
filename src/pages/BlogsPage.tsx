
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding U.S. Tax Compliance for International Businesses",
      excerpt: "Navigate the complexities of U.S. tax requirements when operating internationally. Learn about key compliance areas and best practices.",
      author: "AccuraGlobus Team",
      date: "2024-06-15",
      readTime: "8 min read",
      category: "Tax Planning",
      content: "Detailed content about U.S. tax compliance for international businesses..."
    },
    {
      id: 2,
      title: "Maximizing Cost Savings Through Strategic Outsourcing",
      excerpt: "Discover how strategic accounting outsourcing can reduce costs by 40-60% while maintaining quality and compliance standards.",
      author: "Financial Advisory Team",
      date: "2024-06-10",
      readTime: "6 min read",
      category: "Business Strategy",
      content: "Comprehensive guide on strategic outsourcing benefits..."
    },
    {
      id: 3,
      title: "QuickBooks vs Xero: Choosing the Right Platform",
      excerpt: "A comprehensive comparison of two leading accounting software platforms to help you make the right choice for your business.",
      author: "Technology Team",
      date: "2024-06-05",
      readTime: "10 min read",
      category: "Technology",
      content: "In-depth comparison of QuickBooks and Xero platforms..."
    },
    {
      id: 4,
      title: "GST Compliance Made Simple: A Guide for Indian Businesses",
      excerpt: "Simplify your GST compliance process with our step-by-step guide covering registration, filing, and common pitfalls to avoid.",
      author: "Indian Tax Team",
      date: "2024-05-28",
      readTime: "7 min read",
      category: "Indian Tax",
      content: "Complete guide to GST compliance for Indian businesses..."
    },
    {
      id: 5,
      title: "Financial Reporting Best Practices for CPAs",
      excerpt: "Enhance your financial reporting processes with industry best practices and automated solutions for improved accuracy.",
      author: "Audit Team",
      date: "2024-05-20",
      readTime: "9 min read",
      category: "Financial Reporting",
      content: "Best practices for financial reporting and audit processes..."
    },
    {
      id: 6,
      title: "Leveraging Time Zone Advantages in Global Finance Operations",
      excerpt: "How businesses can maximize productivity and efficiency by leveraging global time zones for continuous finance operations.",
      author: "Operations Team",
      date: "2024-05-15",
      readTime: "5 min read",
      category: "Operations",
      content: "Strategic guide on leveraging global time zones..."
    }
  ];

  const categories = ["All", "Tax Planning", "Business Strategy", "Technology", "Indian Tax", "Financial Reporting", "Operations"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AccuraGlobus Insights</h1>
            <p className="text-xl text-gray-600">
              Expert insights on accounting, tax planning, compliance, and business growth strategies from our team of qualified professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;

