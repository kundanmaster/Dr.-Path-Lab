import Link from 'next/link';
import TestView from "@/components/pages/common/TestView";
const Plans = () => {
  return (
    <>
      <div className="lg:flex px-5 lg:px-20 xl:px-24 2xl:px-72 grid gap-6 justify-center lg:justify-between pt-12">
        <div className="flex items-center gap-4">
          <img
            src="images/Guarantee.png"
            className="bg-[#C7FDF9] rounded-2xl"
            width="50"
            alt=""
          />
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">NABL certified</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="images/Heart-with-Pulse.png"
            className="bg-[#C7FDF9] rounded-2xl"
            width="50"
            alt=""
          />
          <p className="text-lg sm:text-xl  md:text-2xl font-semibold">100% Trusted</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="images/happy-cutomer.png"
            className="bg-[#C7FDF9] rounded-2xl"
            width="50"
            alt=""
          />
          <p className="text-lg sm:text-xl  md:text-2xl  font-semibold">Happy Customers</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="images/Healthy-Eating.png"
            className="bg-[#C7FDF9] rounded-2xl"
            width="50"
            alt=""
          />
          <p className="text-lg sm:text-xl  md:text-2xl font-semibold">Diet Consultation</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-20 xl:px-24 2xl:px-72 py-20 gap-12 lg:mb-12">

      <TestView testname={"Basic Package"} totaltest={"80 parameters included"} originalprice={"₹3500"} saleprice={"₹1150"} estimatetime={"Report Within 6 Hours"} url={"/basic-package"} />
        
      <TestView testname={"Standard Package"} totaltest={"90 parameters included"} originalprice={"₹4500"} saleprice={"₹1650"} estimatetime={"Report Within 6 Hours"} url={"/standard-package"} />
        
      <TestView testname={"Platinum Package"} totaltest={"102 parameters included"} originalprice={"₹7500"} saleprice={"₹3999"} estimatetime={"Report Within 6 Hours"} url={"/platinum-package"} />
        
      </div>
    </>
  );
};
export default Plans;
