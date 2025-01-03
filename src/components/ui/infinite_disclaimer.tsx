import Marquee from "react-fast-marquee";

export const InfiniteMarquee = () => {
    return (
        <Marquee speed={100} gradient={false}>
          <span className="text-lg text-white px-24">
        Looking for AI/ML/SWE Internships (July 2025+)!
      </span>
            <span className="text-lg text-white px-24">
        Looking for AI/ML/SWE Internships (July 2025+)!
      </span>
            <span className="text-lg text-white px-24">
        Looking for AI/ML/SWE Internships (July 2025+)!
      </span>
        </Marquee>
    );
};