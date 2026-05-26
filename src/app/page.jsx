import Banner from "@/components/Banner";
import FeatureJobs from "@/components/FeatureJobs";
import PaySection from "@/components/PaySection";
import Seekers from "@/components/Seekers";
import Subscription from "@/components/Subscription";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Seekers />
      <FeatureJobs/>
      <PaySection/>
      <Subscription/>
    </div>
  );
};

export default HomePage;
