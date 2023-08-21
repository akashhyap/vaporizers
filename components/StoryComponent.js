"use client"
import React from 'react'
import { StoryblokComponent } from "@storyblok/react";

const StoryComponent = ({blok}) => {
  return (
    <StoryblokComponent blok={blok} />
  )
}

export default StoryComponent