export default function About() {
    return (
        <div className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h1 className="text-5xl font-bold mb-4 text-gray-900 text-center">
                        About Sharda Home Estate
                    </h1>
                    <p className="text-xl text-gray-600 text-center">
                        Your trusted partner in finding the perfect home
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                            Our Mission
                        </h2>
                        <p className="text-gray-600">
                            At Sharda Home Estate, we are dedicated to helping individuals and families find their dream homes. With years of experience in the real estate industry, we understand that buying or selling a property is one of life&apos;s most significant decisions.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                            Our Values
                        </h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Integrity in every transaction
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Transparent communication
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Client satisfaction first
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Professional excellence
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                            Why Choose Us?
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Experienced Team
                                </h3>
                                <p className="text-gray-600">Over 10 years of combined experience in real estate</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                    Fast Results
                                </h3>
                                <p className="text-gray-600">Quick and efficient property transactions</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    Customer Support
                                </h3>
                                <p className="text-gray-600">24/7 dedicated support for our clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
