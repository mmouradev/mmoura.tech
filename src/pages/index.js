import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import PostBlog from '../components/PostBlog';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostBlog />
  </Layout>
);

export default IndexPage;
