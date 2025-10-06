"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          buttonText="Get a demo"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to Xeven Solutions"
          subtitle="Innovative solutions for a digital world"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="At Xeven, we provide top-notch SaaS solutions tailored to your needs. Our innovative approach combines modern technology with a user-friendly experience, ensuring optimal performance and satisfaction."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Choose your plan", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Create an account", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Confirm payment", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Understand the key aspects of our tokenomics which drive the value of our ecosystem."
          cardItems={[
            { id: 1, title: "Ticker", description: "XEV" },
            { id: 2, title: "Supply", description: "1 Billion XEV" },
            { id: 3, title: "Liquidity", description: "80% locked for 1 year" },
            { id: 4, title: "Ownership", description: "10% community fund" },
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[
            { title: "What is Xeven Solutions?", content: "Xeven Solutions is a SaaS company..." },
            { title: "How to use our service?", content: "Simply sign up and follow the guided tutorial..." },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          logoText="Xeven Solutions"
          items={[
            { label: "Home", onClick: () => {} },
            { label: "About", onClick: () => {} },
            { label: "Services", onClick: () => {} },
            { label: "Contact", onClick: () => {} },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}