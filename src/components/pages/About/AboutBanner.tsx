import Image from 'next/image';
const Contents = () => {
  return (
    <section className="px-5 lg:px-20 xl:px-24 2xl:px-56 pt-14 lg:pt-18">
      <div className="mb-20">
        <h1 className="text-center text-4xl font-semibold mb-3">About Us</h1>

        <p className="mb-3">
          DrPathCares Is One Of The Most Trusted Leading Preventive Healthcare
          Company And Provides Highest Quality Diagnostic Tests And Health
          Packages To You At The Comfort Of Your Home. At DrPathcares ,
          Quality Is A Way Of Functioning, Our Stringent Quality Control
          Parameters.
        </p>

        <p className="mb-3">
          Coupled With Technology Enabled Systems Ensure The Consistent
          Reproducibility Of Results And Reports. Our Tele-Consultation Services
          From India Most Prestigious Medical Colleges And Clinical
          Nutritionists And Dieticians Make Staying Healthy Convenient And
          Hassle Free.
        </p>
      </div>

      <div
        className="my-6 bg-center bg-no-repeat rounded-2xl"
        style={{ backgroundImage: "url('images/banner-background.webp')" }}>
        <h2 className="text-center text-3xl mb-3 pt-8 font-medium">
          Why Choose DrPathcares
        </h2>
        <div className="lg:flex items-center justify-center">
            <div className="flex justify-center">
            <img src="/images/whychooseus.webp" width="400" height="300" alt="" />
            </div>
          <ul className="list-disc list-inside text-lg font-medium p-6">
            <li>Affordable & Honest Pricing With 100% Accurate Reports</li>
            <li>Expert Team Of Phlebotomists With MD Pathologist</li>
            <li>Get On Time Fast & Accurate Service With Quality</li>
            <li>Easy To Download E Reports At A Click</li>
            <li>Fast & Accurate Test Reports</li>
            <li>Free Medical Consultation</li>
            <li>Fully Automated Machines</li>
            <li>Professional Staff</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Contents;
