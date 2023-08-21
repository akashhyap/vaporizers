/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Blog from "./Blog";
import Section from "./Section";
import Reviews from "./Review";
import Grid from "./Grid";
import Cols from "./Cols";
import Content from "./Content";
import HtmlElements from "./HtmlElements";
import Picture from "./Picture";
import TitleH1 from "./TitleH1";
import TitleH2 from "./TitleH2";
import TitleH3 from "./TitleH3";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    blog: Blog,
    section: Section,
    reviews: Reviews,
    grid: Grid,
    cols: Cols,
    content: Content,
    htmlElements: HtmlElements,
    picture: Picture,
    titleH1: TitleH1,
    titleH2: TitleH2,
    titleH3: TitleH3,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
