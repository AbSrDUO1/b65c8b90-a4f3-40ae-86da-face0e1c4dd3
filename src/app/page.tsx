"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarBase 
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          logoText="Xeven Solutions"
          leftButtonText="Get a demo"
          onLeftButtonClick={() => { /* Handle Demo Click */ }}
          className=""
          containerClassName=""
          logoClassName=""
          buttonClassName=""
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero 
          title="Welcome to Xeven Solutions"
          subtitle="Your Partner in Innovative Solutions"
          primaryButtonText="Learn More"
          secondaryButtonText="Get Started"
          onPrimaryButtonClick={() => { /* Handle Primary Click */ }}
          onSecondaryButtonClick={() => { /* Handle Secondary Click */ }}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout 
          title="About Us"
          descriptions={[
            "We are committed to providing innovative solutions that help businesses succeed,",
            "Crafting technology-driven strategies to drive growth and efficiency,"
            "Dedicated to supporting our clients with cutting-edge resources and insights."
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D 
          title="How to Buy Our Products"
          steps={[
            { title: "Step 1", description: "Visit our website and explore products", position: "left", image: "/images/placeholder1.avif", isCenter: false },
            { title: "Step 2", description: "Add to cart and proceed to checkout", position: "center", image: "/images/placeholder2.avif", isCenter: true },
            { title: "Step 3", description: "Complete your purchase and enjoy!", position: "right", image: "/images/placeholder3.avif", isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics 
          title="Our Tokenomics"
          description="Check out our economic model and distribution strategy."
          kpiItems={[
            { value: "1M", description: "Total Supply" },
            { value: "50K", description: "Market Cap" },
            { value: "20%", description: "Circulated" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo 
          logoSrc="/images/logo.svg"
          logoAlt="Logo"
          logoText="Xeven Solutions"
          columns={[
            { title: "Company", items: [{ label: "About Us", onClick: () => { /* About Click */ } }, { label: "Contact", onClick: () => { /* Contact Click */ } }, { label: "Careers", onClick: () => { /* Careers Click */ } }] },
            { title: "Support", items: [{ label: "FAQs", onClick: () => { /* FAQs Click */ } }, { label: "Help Center", onClick: () => { /* Help Center Click */ } }, { label: "Terms", onClick: () => { /* Terms Click */ } }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => { /* Privacy Click */ } }, { label: "Licenses", onClick: () => { /* Licenses Click */ } }] },
          ]}
          copyrightText="© 2023 Xeven Solutions"
        />
      </div>
    </SiteThemeProvider>
  );
}