import "@/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Layout from "@/components/Layout";
import Config from "@/components/Config";
import Menu from "@/components/Menu";
import Submenu from "@/components/Submenu";
import Footer from "@/components/Footer";
import Page from "@/components/Page";
import Blog from "@/components/Blog";
import Section from "@/components/Section";
import Review from "@/components/Review";
import Comparisons from "@/components/Comparisons";
import Blogs from "@/components/Blogs";
import Grid from "@/components/Grid";
import Cols from "@/components/Cols";
import Content from "@/components/Content";
import HtmlElements from "@/components/HtmlElements";
import Picture from "@/components/Picture";
import SectionHeader from "@/components/SectionHeader";
import TitleH1 from "@/components/TitleH1";
import TitleH2 from "@/components/TitleH2";
import TitleH3 from "@/components/TitleH3";
import Button from "@/components/Button";

const components = {
  config: Config,
  menu: Menu,
  submenu: Submenu,
  footer: Footer,
  page: Page,
  blog: Blog,
  section: Section,
  review: Review,
  comparisons: Comparisons,
  blogs: Blogs,
  grid: Grid,
  cols: Cols,
  content: Content,
  htmlElements: HtmlElements,
  picture: Picture,
  sectionHeader: SectionHeader,
  titleH1: TitleH1,
  titleH2: TitleH2,
  titleH3: TitleH3,
  button: Button,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return (
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  );
}
