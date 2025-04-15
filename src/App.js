import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import BlogListing from './pages/blogslisting';
import Top10CRMs2025 from './pages/blogs/top-10-crms-2025';
import NanoInfluencers2025 from './pages/blogs/nano-influencers-2025';
import MicroVsMacroBlog from './pages/blogs/micro-vs-macro-influencers';
import NegotiationBlog from './pages/blogs/how-to-negotiate-with-influencers';
import AgencySuccessBlog from './pages/blogs/agency-success-1000-influencers';
import ContentRightsBlog from './pages/blogs/influencer-content-rights';
import CRMToolsBlog from './pages/blogs/how-to-use-crm-tools';
import AIInfluencerMarketing from './pages/blogs/ai-influencer-marketing-2025';
import CreatorEconomyMonetization from './pages/blogs/creator-economy-monetization-2025';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<BlogListing />} />
            <Route path="/blogs/top-10-crms-2025" element={<Top10CRMs2025 />} />
            <Route path="/blogs/nano-influencers-2025" element={<NanoInfluencers2025 />} />
            <Route path="/blogs/micro-vs-macro-influencers" element={<MicroVsMacroBlog />} />
            <Route path="/blogs/how-to-negotiate-with-influencers" element={<NegotiationBlog />} />
            <Route path="/blogs/agency-success-1000-influencers" element={<AgencySuccessBlog />} />
            <Route path="/blogs/influencer-content-rights" element={<ContentRightsBlog />} />
            <Route path="/blogs/how-to-use-crm-tools" element={<CRMToolsBlog />} />
            <Route path="/blogs/ai-influencer-marketing-2025" element={<AIInfluencerMarketing />} />
            <Route path="/blogs/creator-economy-monetization-2025" element={<CreatorEconomyMonetization />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
