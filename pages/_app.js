import "@/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "@/components/Page";
import Blog from "@/components/Blog";
import Section from "@/components/Section";
import Review from "@/components/Review";
import Grid from "@/components/Grid";
import Cols from "@/components/Cols";
import Content from "@/components/Content";
import HtmlElements from "@/components/HtmlElements";
import Picture from "@/components/Picture";
import TitleH1 from "@/components/TitleH1";
import TitleH2 from "@/components/TitleH2";
import TitleH3 from "@/components/TitleH3";

const components = {
  page: Page,
  blog: Blog,
  section: Section,
  review: Review,
  grid: Grid,
  cols: Cols,
  content: Content,
  htmlElements: HtmlElements,
  picture: Picture,
  titleH1: TitleH1,
  titleH2: TitleH2,
  titleH3: TitleH3,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
