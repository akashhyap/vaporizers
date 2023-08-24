import Head from "next/head";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story }) {
  // console.log("slug story", story);
  // story = useStoryblokState(story);
  return (
    <>
      <Head>
        <title>
          {story.content.metatags
            ? story.content?.metatags?.title
            : story?.name}
        </title>
      </Head>

      <div className="max-w-[90%] xl:max-w-4xl mx-auto min-h-screen py-10">
        <StoryblokComponent blok={story.content} all={story} />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  // console.log("params:", params);
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft", // or 'published'
    resolve_links: "url",
    // resolve_relations: ["related-articles.articles"],
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get("cdn/stories/config");

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
