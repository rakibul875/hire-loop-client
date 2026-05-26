import Banner from "@/components/Banner";
import FeatureJobs from "@/components/FeatureJobs";
import PaySection from "@/components/PaySection";
import Seekers from "@/components/Seekers";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Seekers />
      <FeatureJobs/>
      <PaySection/>
    </div>
  );
};

export default HomePage;
