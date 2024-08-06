'use client'
import React from "react";
import Footer from "@/components/Footer";
import Cities from "@/components/pages/Cities";
import BlogSection from "@/components/pages/blog/BlogSection";
import SubscribeNewsletter from "@/components/pages/SubscribeNewsletter";
import Nav from "@/components/Nav";
import HomeBanner from "@/components/pages/home/HomeBanner";
import Plans from "@/components/pages/home/Plans";
import ThirdSection from "@/components/pages/home/ThirdSection";
import ThreeOffers from "@/components/pages/home/ThreeOffers";
import FullVitalBody from "@/components/pages/home/FullVitalBody";
import WeAre from "@/components/pages/home/WeAre";
import CtaStrip from "@/components/pages/home/CtaStrip";
import SwiperDeals from "@/components/pages/home/SwiperDeals";
import ClientsReview from "@/components/pages/home/ClientsReview";
import SidebarToggle from '@/hooks/cart/SidebarToggle';
export default function Home() {
  const [isCartOpen, toggleCart] = SidebarToggle(false);
    console.log(isCartOpen);
  return (
    <div>
      <Nav />
  
      <main className="">
        <HomeBanner />
        <Plans />
        <ThirdSection />
        <SwiperDeals />
        <ThreeOffers />
        <FullVitalBody />
        <WeAre />
        <ClientsReview />
        <CtaStrip />
        <BlogSection />
        <SubscribeNewsletter />
        <Cities />
      </main>
      <Footer />
    </div>
  );
}
