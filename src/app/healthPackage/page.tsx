


// import Nav from '@/components/Nav';
// import Image from 'next/image';
// import { FaCheckCircle } from 'react-icons/fa';

// const HealthCheckup = () => {
//   return (
//     <div>
//       <Nav />

//       {/* Hero Section */}
//       <div className="flex flex-col items-center">
//         {/* Background Section */}
//         <div className="w-full h-64 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/banner-background.webp')" }}>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-4xl font-bold text-[#002D62]">Health Checkup Packages</h1>
//           </div>
//         </div>

//         {/* Overview Section */}
//         <div className="max-w-5xl mx-auto p-6 text-center space-y-4">
//           <h2 className="text-3xl font-semibold text-gray-800">Dr. Path Cares Comprehensive Health Checkup Packages</h2>
//           <p className="text-gray-600">
//             These packages are designed to ensure your overall well-being by incorporating imaging, blood work, and screenings. Detect early warning signs for potential health issues and get effective treatments to ensure long-term benefits. Customize packages based on age, gender, or health conditions.
//           </p>
//         </div>

//         {/* Package Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
//           {/* Card 1 */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <Image
//               src="/images/standardcheckup.webp"
//               alt="Platinum Healthcare Package"
//               width={300}
//               height={150}
//               className=""
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">Platinum Healthcare Package</h2>
//               <p className="text-gray-500 line-through">₹7999</p>
//               <p className="text-green-500 text-lg font-bold">₹3499</p>
//               <button className="mt-4 w-full bg-[#002D62] text-white py-2 px-4 rounded">Book Now</button>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <Image
//               src="/images/whychooseus.webp"
//               alt="Special Full Body Health Checkup With IGG Immunity Antibody"
//               width={300}
//               height={150}
//               className=""
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">Full Body Checkup With IGG Antibody</h2>
//               <p className="text-green-500 text-lg font-bold">₹3499 <span className="text-sm">(After discount ₹1749)</span></p>
//               <button className="mt-4 w-full bg-[#002D62] text-white py-2 px-4 rounded">Book Now</button>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <Image
//               src="/images/test-banners.webp"
//               alt="Health Checkup Special Combo Package"
//               width={300}
//               height={140}
//               className=""
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">Health Checkup Special Combo Package</h2>
//               <p className="text-gray-500 line-through">₹4999</p>
//               <p className="text-green-500 text-lg font-bold">₹2999</p>
//               <button className="mt-4 w-full bg-[#002D62] text-white py-2 px-4 rounded">Book Now</button>
//             </div>
//           </div>
//         </div>

//         {/* Test Details Section */}
//         <div className="bg-gray-100 p-8 max-w-5xl mx-auto my-10 rounded-lg">
//           <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Common Tests in Our Health Checkup Packages</h2>
//           <ul className="space-y-4">
//             <li className="flex items-start">
//               <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//               <p><strong>Complete Blood Count (CBC):</strong> Detects potential anemia or infection issues by measuring components such as hemoglobin, WBCs, RBCs, and platelets.</p>
//             </li>
//             <li className="flex items-start">
//               <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//               <p><strong>Cholesterol and Blood Sugar Tests:</strong> Check HDL, LDL, triglycerides, and glucose levels to assess heart disease risk and detect early signs of diabetes.</p>
//             </li>
//             <li className="flex items-start">
//               <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//               <p><strong>Thyroid Function Test:</strong> Assess thyroid health for detecting disorders like hypothyroidism or hyperthyroidism.</p>
//             </li>
//             <li className="flex items-start">
//               <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//               <p><strong>Liver Function Test:</strong> Measures liver enzymes and proteins to evaluate liver health and detect potential disease.</p>
//             </li>
//             <li className="flex items-start">
//               <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//               <p><strong>Kidney Function Test:</strong> Measures creatinine and urea levels to check for kidney health and detect potential issues.</p>
//             </li>
//             <li className="flex items-start">
//               <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//               <p><strong>Chest X-ray and Ultrasound:</strong> Diagnose respiratory/cardiac issues or identify internal conditions like cysts or tumors with safe imaging technology.</p>
//             </li>
//           </ul>
//         </div>

//         {/* Age-Specific Recommendations Section */}
//         <div className="max-w-5xl mx-auto my-10 p-8 space-y-6">
//           <h2 className="text-2xl font-semibold text-gray-800 text-center">Health Checkups for Children and Adults</h2>
          
//           {/* For Age Group 20-30 */}
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">Ages 20-30</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>An annual physical exam to check blood pressure, weight, and lifestyle factors.</p>
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Cholesterol check every 4-6 years to monitor heart health.</p>
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Blood sugar tests for individuals at risk of diabetes.</p>
//               </li>
//             </ul>
//           </div>

//           {/* For Age Group 40s */}
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">Ages 40s</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Continue regular physical exams to manage overall health.</p>
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Annual cholesterol and blood sugar tests to maintain optimal health.</p>
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Mammograms every 1-2 years for women over 40.</p>
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Regular prostate exams for men aged 45-50.</p>
//               </li>
//             </ul>
//           </div>

//           {/* For Age Group 50+ */}
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">Ages 50+</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Annual physical exams to stay on top of your health.</p>
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Colonoscopy every 10-15 years for colorectal cancer screening.</p>
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Bone density tests for women over 65 at risk of osteoporosis.</p>
//               </li>
//               <li className="flex items-start">
//                 <FaCheckCircle className="text-green-500 mr-2 mt-1" />
//                 <p>Hearing tests every 3 years to detect early signs of hearing loss or dementia.</p>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="bg-[#002D62] text-white p-8 text-center">
//           <h2 className="text-2xl font-semibold mb-4">Stay Healthy with Dr. Path Cares</h2>
//           <p className="mb-4">Regular checkups are key to detecting health problems early and preventing further issues. Contact us today to schedule an appointment or learn more about our comprehensive health packages!</p>
//           <button className="bg-green-500 text-white py-2 px-4 rounded">Schedule Appointment</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthCheckup;


import Nav from '@/components/Nav';
import Image from 'next/image';
import { FaArrowCircleDown, FaCheckCircle } from 'react-icons/fa';

const HealthCheckup = () => {
  return (
    <div>
      <Nav />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Health Checkup Packages</h1>
        
        {/* Vertical Stepper */}
        <div className="space-y-10">
          {/* Step 1: Packages */}
          <div className="bg-white shadow-md p-6 rounded-lg relative">
            <div className="absolute top-4 right-4 text-blue-500">
              <FaArrowCircleDown size={30} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Package Card */}
              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image src="/images/blogpost.webp" alt="Platinum Healthcare Package" width={400} height={250} className="w-full" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Platinum Healthcare Package</h2>
                  <p className="text-gray-500 line-through">₹7999</p>
                  <p className="text-green-500 text-lg font-bold">₹3499</p>
                  <button className="mt-4 w-full bg-[#002D62] text-white py-2 rounded">Book Now</button>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image src="/images/blogpost.webp" alt="Platinum Healthcare Package" width={400} height={250} className="w-full" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Platinum Healthcare Package</h2>
                  <p className="text-gray-500 line-through">₹7999</p>
                  <p className="text-green-500 text-lg font-bold">₹3499</p>
                  <button className="mt-4 w-full bg-[#002D62] text-white py-2 rounded">Book Now</button>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image src="/images/blogpost.webp" alt="Platinum Healthcare Package" width={400} height={250} className="w-full" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Platinum Healthcare Package</h2>
                  <p className="text-gray-500 line-through">₹7999</p>
                  <p className="text-green-500 text-lg font-bold">₹3499</p>
                  <button className="mt-4 w-full bg-[#002D62] text-white py-2 rounded">Book Now</button>
                </div>
              </div>
              
              {/* Repeat other packages */}
            </div>
          </div>

          {/* Step 2: Tests */}
          <div className="bg-white shadow-md p-6 rounded-lg relative">
            <div className="absolute top-4 right-4 text-blue-500">
              <FaArrowCircleDown size={30} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <p className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Complete Blood Count (CBC)
                </p>
                <p className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Cholesterol and Blood Sugar Tests
                </p>
              </div>
              <div className="space-y-3">
                <p className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Thyroid Function Test
                </p>
                <p className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Liver Function Test
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Age-Specific Recommendations */}
          <div className="bg-white shadow-md p-6 rounded-lg relative">
            <div className="absolute top-4 right-4 text-blue-500">
              <FaArrowCircleDown size={30} />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Ages 20-30</h3>
                <ul className="ml-6 mt-2 space-y-2">
                  <li>• Annual physical exam and lifestyle review.</li>
                  <li>• Cholesterol checks every 4-6 years.</li>
                  <li>• Blood sugar tests for at-risk individuals.</li>
                </ul>
              </div>
              {/* Repeat for other age groups */}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#008E97] text-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold">Ready to Take Control of Your Health?</h2>
            <p className="mt-4">Contact us today to schedule an appointment or learn more about our health packages.</p>
            <button className="mt-6 bg-white py-3 px-6 rounded-lg text-black font-semibold">Schedule Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckup;
