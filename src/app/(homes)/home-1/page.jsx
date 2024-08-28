import { useState } from 'react';
import Footer1 from "../../../components/footer/Footer1";
import Header1 from "../../../components/headers/Header1";
import Categories from "../../../components/homes/common/Categories";
import Collections from "../../../components/homes/common/Collections";
import Hero from "../../../components/homes/home-1/Hero";
import Hotbids from "../../../components/homes/home-1/Hotbids";
import Process from "../../../components/homes/common/Process";
import Swap from "../../../components/Swap/Swap";

export const metadata = {
  title: "Home 1 || Xhibiter | NFT Marketplace Nextjs Template",
};

export default function HomePage1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header1 />
      <main>
        <Hero setOpen={()=>{setIsModalOpen(true)}} />
      </main>
      {isModalOpen && <Swap onClose={() => setIsModalOpen(false)} />}
      <Footer1 />
    </>
  );
}
