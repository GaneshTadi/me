import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Growing Demand */}
                    <div className="relative w-full">
                        {/* Glowing border effect - only visible on hover */}
                        <div className="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" style={{backgroundColor: '#900C3F'}}></div>
                        
                        {/* Main card */}
                        <div className="relative bg-white p-6 rounded-lg border border-[#900C3F] h-full shadow-sm hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start mb-4">
                                <div className="bg-[#900C3F] text-white p-3 rounded-full flex-shrink-0">
                                    {/* SVG Icon for Growing Demand */}
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 6l2.29 2.29c.63.63 1.71.18 1.71-.71V4c0-1.1-.9-2-2-2h-3.59c-.89 0-1.34 1.08-.71 1.71L16 6zM14 8H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold ml-4 text-gray-900">Growing Demand</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                There is a high and increasing demand for web developers as businesses understand the importance of a strong online presence.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Understanding Business Use Cases */}
                    <div className="relative w-full">
                        {/* Glowing border effect - only visible on hover */}
                        <div className="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" style={{backgroundColor: '#900C3F'}}></div>
                        
                        {/* Main card */}
                        <div className="relative bg-white p-6 rounded-lg border border-[#900C3F] h-full shadow-sm hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start mb-4">
                                <div className="bg-[#900C3F] text-white p-3 rounded-full flex-shrink-0">
                                    {/* SVG Icon for Business Use Cases */}
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold ml-4 text-gray-900">Understanding Business Use Cases</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Web developers learn to understand complete business use cases, allowing them to create tailored solutions that meet specific organizational needs.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: On-Time Delivery */}
                    <div className="relative w-full">
                        {/* Glowing border effect - only visible on hover */}
                        <div className="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" style={{backgroundColor: '#900C3F'}}></div>
                        
                        {/* Main card */}
                        <div className="relative bg-white p-6 rounded-lg border border-[#900C3F] h-full shadow-sm hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start mb-4">
                                <div className="bg-[#900C3F] text-white p-3 rounded-full flex-shrink-0">
                                    {/* SVG Icon for On-Time Delivery */}
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold ml-4 text-gray-900">On-Time Delivery</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                You'll develop the skills necessary to deliver projects on time, enhancing client satisfaction and your professional reputation.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Continuous Interaction */}
                    <div className="relative w-full">
                        {/* Glowing border effect - only visible on hover */}
                        <div className="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" style={{backgroundColor: '#900C3F'}}></div>
                        
                        {/* Main card */}
                        <div className="relative bg-white p-6 rounded-lg border border-[#900C3F] h-full shadow-sm hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start mb-4">
                                <div className="bg-[#900C3F] text-white p-3 rounded-full flex-shrink-0">
                                    {/* SVG Icon for Continuous Interaction */}
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold ml-4 text-gray-900">Continuous Interaction</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Engaging in ongoing communication with clients helps gather feedback and ensure the final product meets their expectations.
                            </p>
                        </div>
                    </div>

                    {/* Card 5: Ongoing Support */}
                    <div className="relative w-full">
                        {/* Glowing border effect - only visible on hover */}
                        <div className="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" style={{backgroundColor: '#900C3F'}}></div>
                        
                        {/* Main card */}
                        <div className="relative bg-white p-6 rounded-lg border border-[#900C3F] h-full shadow-sm hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start mb-4">
                                <div className="bg-[#900C3F] text-white p-3 rounded-full flex-shrink-0">
                                    {/* SVG Icon for Ongoing Support */}
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold ml-4 text-gray-900">Ongoing Support</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                You will provide continuous support to clients, ensuring that their websites function smoothly and addressing any issues that arise.
                            </p>
                        </div>
                    </div>

                    {/* Card 6: Creativity and Innovation */}
                    <div className="relative w-full">
                        {/* Glowing border effect - only visible on hover */}
                        <div className="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" style={{backgroundColor: '#900C3F'}}></div>
                        
                        {/* Main card */}
                        <div className="relative bg-white p-6 rounded-lg border border-[#900C3F] h-full shadow-sm hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-start mb-4">
                                <div className="bg-[#900C3F] text-white p-3 rounded-full flex-shrink-0">
                                    {/* SVG Icon for Creativity and Innovation */}
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zM12 3L2 12h3v8h14v-8h3L12 3z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold ml-4 text-gray-900">Creativity and Innovation</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                The role allows you to express creativity through designing and building diverse websites and applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;