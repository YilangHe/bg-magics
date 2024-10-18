"use client";

import { ParallaxScroll } from "./ui/parallax-scroll";

import mamba from '@/public/mamba.png' 
import mambaGradient from '@/public/mamba-gradient.png'
import mambaGradient2 from '@/public/mamba-gradient-2.png'

export function HeroGradientParallaxImages() {
  return <ParallaxScroll images={images} className="w-full"/>;
}

const images = [
  mamba, mambaGradient, mambaGradient2
];
