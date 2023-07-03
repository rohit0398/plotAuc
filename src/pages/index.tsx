import {
  MarketSense,
  Landing,
  Features,
  WrittingPartner,
  AboutWebsite,
  IncreaseSales,
  ContactUs,
} from '@/molecules';
import { Reviews } from '@/molecules/dashboard/reviews';

const Dashboard = () => {
  return (
    <div className="container">
      <Landing />
      <MarketSense />
      <Features />
      <WrittingPartner />
      <AboutWebsite />
      <IncreaseSales />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Dashboard;
