import { AnimatedSection } from "./AnimatedSection"

import IntroHome from "./IntroHome";
import HistoricalEpochs from "./HistoricalEpochs";
import EarthNatureSection from "./EarthNatureSection";
import StoriesSection from "./StoriesSection";
import ContinentsSection from "./ContinentsSection";
import TimelineSection from "./TimelineSection";

const Home = () => {


  return(
    <>
        <IntroHome />

        <AnimatedSection>
          <HistoricalEpochs />
        </AnimatedSection>

        <AnimatedSection>
          <EarthNatureSection />
        </AnimatedSection>

        <AnimatedSection>
          <StoriesSection />
        </AnimatedSection>

        <AnimatedSection>
          <ContinentsSection />
        </AnimatedSection>

        <AnimatedSection>
          <TimelineSection />
        </AnimatedSection>
    </>
  );
};

export default Home;