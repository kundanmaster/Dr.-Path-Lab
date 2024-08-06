'use client';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const ContactContent = () => {
    const [formData, setFormData] = useState({ name: '', date: '', email: '', time: '' });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/email`, formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(response);
            if (response.status === 200) {
                toast.success('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
    return (
        <section className="px-5 lg:px-20 xl:px-24 2xl:px-56 pb-20 lg:my-12 py-10">
            <Toaster/>
            <h1 className="text-3xl font-bold text-center pb-3">Contact Us</h1>
            <p className="text-lg text-center py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, autem.</p>
            <div className="mt-5 2xl:w-1/2 mx-auto">
                <form method='POST' onSubmit={handleSubmit}>
                    <div className=" grid gap-5 lg:gap-8">
                        <div className="grid gap-5 lg:gap-8">
                            <input type="text" onKeyDown={(e)=> /[a-z]/i.test(e.key)} onChange={handleChange} placeholder="Name" name="name" className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]" required/>
                            <input type="date" name="date" onChange={handleChange} className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]" />
                        </div>
                        <div className="grid gap-5 lg:gap-8">
                            <input type="email" name="email" onChange={handleChange} placeholder="Email" className=" px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]" required/>
                            <input type="time" name="time" onChange={handleChange} className=" px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]" required/>
                        </div>
                        <div className="grid gap-5 lg:gap-8">
                            <input type="text" name="number" maxLength={10} minLength={10} onChange={handleChange} placeholder="Phone Number" className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]" required/>
                            <button type="submit" className="bg-[#00B7AB] text-white px-3 py-2 rounded-2xl mt-5 hover:bg-[#46716f] duration-300" >Book An Appointment</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="grid md:grid-cols-3 gap-4 justify-between mt-20 divide-x-1 text-lg">
                <div className="flex items-center gap-3 px-5 justiy-center">
                    <img src="images/phone-number.webp" width={28} className="" alt="" />
                    <a href="tel:+918929062906" className="text-lg">+91 89290 62906</a>
                </div>
                <div className="flex items-center gap-3 px-5 md:justify-center">
                    <img src="images/email-address.webp" width={28} className="" alt="" />
                    <a href="mailto:Info@Drpathcares.com" className="text-lg">Info@Drpathcares.com</a>
                </div>
                <div className="flex items-center gap-3 pl-5 justify-end">
                    <img src="images/address.webp" width={28} className="" alt="" />
                    <p className="text-lg">Plot No D-26, Noida Sector 2, Noida, 201301, Uttar Pradesh</p>
                </div>
            </div>
        </section>
    );
};
export default ContactContent;
