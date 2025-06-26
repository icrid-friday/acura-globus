
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  read_time: string;
  created_at: string;
}

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showLoadMore, setShowLoadMore] = useState(false);
  
  const BLOGS_PER_LOAD = 6;

  const fetchBlogs = async (offset = 0, isLoadMore = false) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })
        .range(offset, offset + BLOGS_PER_LOAD - 1);

      if (error) throw error;

      if (data) {
        if (isLoadMore) {
          setBlogs(prev => [...prev, ...data]);
        } else {
          setBlogs(data);
          setShowLoadMore(data.length >= BLOGS_PER_LOAD);
        }
        
        setHasMore(data.length === BLOGS_PER_LOAD);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      fetchBlogs(blogs.length, true);
    }
  };

  const handleBlogClick = () => {
    navigate("/blogs");
  };

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Insights & Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with expert insights on accounting, tax planning, and business growth strategies.
            </p>
          </div>

          {blogs.length > 0 ? (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <Card 
                    key={blog.id}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 border-blue-100 hover:border-blue-300"
                    onClick={handleBlogClick}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-600 font-medium">{blog.category}</span>
                        <span className="text-sm text-gray-500">{blog.read_time}</span>
                      </div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{blog.author}</span>
                        <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {showLoadMore && (
                <div className="text-center">
                  <Button
                    onClick={handleLoadMore}
                    disabled={loading}
                    variant="outline"
                    className="px-8 py-2"
                  >
                    {loading ? "Loading..." : hasMore ? "Load More Articles" : "No more articles"}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center">
              <Card 
                className="max-w-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 border-blue-100 hover:border-blue-300"
                onClick={handleBlogClick}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    Explore Our Blog
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 text-lg">
                    Discover expert insights on accounting best practices, tax strategies, compliance updates, and business growth tips from our team of qualified professionals.
                  </p>
                  
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="font-medium">Read Our Articles</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

