import H3GradientText from "@/components/pages/common/H3GradientText";
const FullVitalBody = () => {
  return (
    <section className="px-5 lg:px-20 xl:px-24 2xl:px-72 pb-20">
      <div className="lg:flex gap-16">
        <div className="lg:w-2/4">
        <H3GradientText textalign="text-left" text="For Vital Body Organs"  />
          <p className="py-3 text-gray-900 text-md">
            Explore our comprehensive range of diagnostic tests tailored for
            vital body organs. Our specialized diagnostic tests focus on
            evaluating the well-being of essential body organs, ensuring you
            receive the care you deserve.
          </p>
          <div className="grid jusitfy-start items-end">
            <button className="w-fit px-6 py-2 border-2 border-[#00B7AB] text-[#00B7AB] rounded-2xl font-semibold">
              View All Checkups
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-4 lg:mt-0 lg:grid-cols-3 gap-6 lg:w-2/4 p-6">
        <div className="flex flex-col gap-2 justify-center items-center">
            <img src="images/heart-icon.png" width="80" alt="" />
            <p className="font-semibold">Heart</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
            <img src="images/kidney-icon.png" width="80" alt="" />
            <p className="font-semibold">Heart</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
            <img src="images/liver-icon.png" width="80" alt="" />
            <p className="font-semibold">Liver</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
            <img src="images/bone-icon.png" width="80" alt="" />
            <p className="font-semibold">Bone</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
            <img src="images/vitamin.png" width="80" alt="" />
            <p className="font-semibold">Vitamin</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
            <img src="images/hormones.png" width="80" alt="" />
            <p className="font-semibold">Hormones</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
            <img src="images/gut-icon.png" width="80" alt="" />
            <p className="font-semibold">Gut Health</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
            <img src="images/blood-icon.png" width="80" alt="" />
            <p className="font-semibold">Blood</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
            <img src="images/reproductive-organs-icon.png" width="80" alt="" />
            <p className="font-semibold">Reproductive Organs</p>
        </div>
        </div>

      </div>
    </section>
  );
};
export default FullVitalBody;
