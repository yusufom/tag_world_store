import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <div className="space-y-10">
        <Carousel title="Trending" />
        <Carousel title="New Arrivals" />
        <Carousel title="Discount Sales" />
        <Carousel title="Category" />
      </div>
      <Footer />
    </>
  );
}
