import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  BlogListingContainer,
  BlogHeader,
  BlogHeaderTitle,
  BlogHeaderSubtitle,
  BlogGrid,
  BlogItem,
  BlogImage,
  BlogContent,
  BlogMeta,
  BlogCategory,
  BlogTitle,
  BlogExcerpt,
  ReadMore,
  AnimatedEmoticon,
  AnnouncementContainer,
  SearchContainer,
  SearchInput,
  FilterContainer,
  FilterButton,
  AnimatedBlogCard,
  GradientText,
  AnimatedBackground,
  BackgroundShape,
  BackgroundDot
} from './style';
import { isMobile } from '../../components/utils/constants';

const BlogListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Sample blog data with trend-focused articles
  const blogs = [
    {
      id: 1,
      title: "Top 10 Influencer Marketing CRMs to Watch in 2025",
      excerpt: "An in-depth comparison of leading influencer marketing platforms, featuring Admirian's innovative approach to automation and ROI tracking. Discover which CRM fits your needs in 2025.",
      date: "March 6, 2024",
      readTime: "15 min read",
      category: "For Agency",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      link: `#/blogs/top-10-crms-2025`
    },
    {
      id: 2,
      title: "Nano-Influencers: 2025's Tiny Titans of Influence",
      excerpt: "Nano-influencers might sound small—think 1,000 to 10,000 followers—but in 2025, they're proving size isn't everything. These tiny titans of influence are flipping the script on influencer marketing, delivering sky-high engagement, authentic vibes, and ROI that leaves bigger names in the dust.",
      date: "March 5, 2024",
      readTime: "12 min read",
      category: "For Brands",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
      link: `#/blogs/nano-influencers-2025`
    },
    {
      id: 3,
      title: "Micro vs. Macro Influencers: Who Wins the ROI Game in 2025?",
      excerpt: "A data-driven analysis of influencer tiers and their impact on campaign performance, backed by real campaign metrics.",
      date: "March 4, 2024",
      readTime: "12 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60",
      link: `#/blogs/micro-vs-macro-influencers`
    },
    {
      id: 4,
      title: "How to Negotiate with Influencers: Scripts and Strategies That Work",
      excerpt: "Expert negotiation templates and proven approaches to secure win-win partnerships with influencers at any level.",
      date: "March 3, 2024",
      readTime: "15 min read",
      category: "For Agency",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
      link: `${process.env.PUBLIC_URL}/blogs/how-to-negotiate-with-influencers`
    },
    {
      id: 5,
      title: "Agency Success: Managing 1000+ Influencers with Admirian",
      excerpt: "How a leading marketing agency scaled their influencer operations while reducing management time by 70%.",
      date: "March 2, 2024",
      readTime: "8 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60",
      link: `${process.env.PUBLIC_URL}/blogs/agency-success-1000-influencers`
    },
    {
      id: 6,
      title: "The Brand's Playbook to Influencer Content Rights",
      excerpt: "A comprehensive guide to content licensing, usage rights, and creating influencer contracts that protect your brand.",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "For Brands",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60",
      link: `${process.env.PUBLIC_URL}/blogs/influencer-content-rights`
    },
    {
      id: 7,
      title: "How to Use CRM Tools Like Admirian to Streamline Influencer Campaigns",
      excerpt: "A comprehensive guide on leveraging CRM tools like Admirian to manage influencer campaigns efficiently, track performance, and maximize ROI.",
      date: "March 31, 2024",
      readTime: "10 min read",
      category: "For Brands",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=60",
      link: `${process.env.PUBLIC_URL}/blogs/how-to-use-crm-tools`
    }
  ];

  // Predefined categories in specific order
  const categories = ['All', 'For Agency', 'For Brands', 'Case Studies'];

  // Filter blogs based on search query and category
  useEffect(() => {
    let filtered = [...blogs];

    if (searchQuery) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === activeCategory);
    }

    setFilteredBlogs(filtered);
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    // Add blogs to dependency array
    setFilteredBlogs(blogs);
  }, [blogs]);

  return (
    <BlogListingContainer>
      <Helmet>
        <title>Influencer Marketing Blog | CRM Tips & Strategies | Admirian</title>
        <meta name="description" content="Expert insights on influencer marketing, CRM strategies, and campaign optimization. Learn how to maximize ROI with Admirian's influencer marketing platform." />
        <meta name="keywords" content="influencer marketing, CRM, influencer campaigns, ROI optimization, social media marketing, brand partnerships" />
        <meta property="og:title" content="Influencer Marketing Blog | CRM Tips & Strategies | Admirian" />
        <meta property="og:description" content="Expert insights on influencer marketing, CRM strategies, and campaign optimization. Learn how to maximize ROI with Admirian's influencer marketing platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blogs.admirian.com" />
        <meta property="og:image" content="https://static.admirian.com/blog-header-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Influencer Marketing Blog | Admirian" />
        <meta name="twitter:description" content="Expert insights on influencer marketing and CRM strategies" />
        <meta name="twitter:image" content="https://static.admirian.com/blog-header-image.jpg" />
        <link rel="canonical" href="https://blogs.admirian.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Admirian Influencer Marketing Blog",
              "description": "Expert insights on influencer marketing, CRM strategies, and campaign optimization",
              "url": "https://blogs.admirian.com",
              "publisher": {
                "@type": "Organization",
                "name": "Admirian",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <AnimatedBackground>
        <BackgroundShape size={200} top={10} left={5} delay={0} />
        <BackgroundShape size={200} top={60} left={80} delay={1} />
        <BackgroundShape size={150} top={30} left={40} delay={2} />
        <BackgroundShape size={250} top={70} left={20} delay={3} />
        <BackgroundDot top={20} left={30} delay={0} />
        <BackgroundDot top={40} left={70} delay={1} />
        <BackgroundDot top={60} left={50} delay={2} />
        <BackgroundDot top={80} left={20} delay={3} />
      </AnimatedBackground>

      <Header />
      <a href="https://admirian.com/request-demo" style={{ textDecoration: 'none' }}>
        <AnnouncementContainer isMobile={isMobile}>
          <span>
            <AnimatedEmoticon>🎉</AnimatedEmoticon> Admirian is now live{' '}
            <AnimatedEmoticon>🎉</AnimatedEmoticon> First 3 Months Free for Brands & Agencies!{' '}
            <AnimatedEmoticon>🚀</AnimatedEmoticon> Click to Join{' '}
            <AnimatedEmoticon>👈</AnimatedEmoticon>
          </span>
        </AnnouncementContainer>
      </a>

      <BlogHeader>
        <BlogHeaderTitle>
          Influencer Marketing <GradientText>Insights</GradientText>
        </BlogHeaderTitle>
        <BlogHeaderSubtitle>
          Expert strategies, success stories, and actionable tips to help <strong>agencies and brands</strong> master influencer marketing and maximize ROI
        </BlogHeaderSubtitle>
      </BlogHeader>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for tips, strategies, and case studies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>

      <FilterContainer>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={activeCategory === category}
            category={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      <BlogGrid>
        {filteredBlogs.map((blog, index) => (
          <AnimatedBlogCard key={blog.id} delay={index * 0.1}>
            <BlogImage>
              <img src={blog.image} alt={blog.title} />
            </BlogImage>
            <BlogContent>
              <BlogMeta>
                <BlogCategory category={blog.category} onClick={() => setActiveCategory(blog.category)}>
                  {blog.category}
                </BlogCategory>
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </BlogMeta>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
              <ReadMore href={blog.link}>
                Read More
                <span>→</span>
              </ReadMore>
            </BlogContent>
          </AnimatedBlogCard>
        ))}
      </BlogGrid>
      <Footer />
    </BlogListingContainer>
  );
};

export default BlogListing;
