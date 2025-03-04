import Container from "@/src/Shared/Container";
import newsAnimation from "../../../assets/newsletter/news-Animation.json"
import Lottie from "lottie-react";

const NewsLetter = () => {
  return (
    <div className="pb-20 pt-10">
      <Container>
        <div className="flex items-center flex-col-reverse md:flex-row">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold exo-font mb-2">
              Join Our Newsletter
            </h1>
            <h3 className="text-lg mb-6">
              Stay updated with the latest news, exclusive offers, and special
              discounts. Subscribe to our newsletter and never miss out on
              exciting updates!.
            </h3>

            <div className="flex flex-col md:flex-row gap-4">
                <input type="email" placeholder="Email Address" className="w-full md:w-3/5 px-4 py-3 border rounded-md focus:outline-[#925e0b]" />
                <input type="submit" value="Subscribe" className="text-white bg-[#f39c12] hover:bg-[#925e0b] px-10 py-3 rounded-lg cursor-pointer transition-all" />
            </div>
          </div>
          <div>
          <Lottie animationData={newsAnimation} loop={true} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;
