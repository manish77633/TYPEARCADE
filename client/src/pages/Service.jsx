import React from 'react';

const Service = () => {
    // Screenshot se nikala gaya data
    const sections = [
        {
            id: 1,
            title: "Acceptance of Terms",
            content: "By accessing or using TypeArcade, you agree to these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must not use our service."
        },
        {
            id: 2,
            title: "Changes to Terms",
            content: "We reserve the right to modify or replace these terms at any time. Your continued use of TypeArcade after any such changes constitutes your acceptance of the new terms."
        },
        {
            id: 3,
            title: "User Accounts",
            content: "You are responsible for safeguarding the password that you use to access TypeArcade and for any activities or actions under your password. We encourage you to use \"strong\" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account."
        },
        {
            id: 4,
            title: "Content and Conduct",
            content: "You are solely responsible for your conduct and any data, text, information, usernames, graphics, images, photos, profiles, audio, video, or other content (\"Content\") that you submit, post, or display on TypeArcade."
        },
        {
            id: 5,
            title: "Termination",
            content: "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-gray-300 transition-colors duration-300 pt-24 pb-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-6">Terms of Service</h1>
                <p className="text-lg leading-relaxed mb-12">
                    Welcome to TypeArcade. By using our website and services, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully.
                </p>

                {/* Policy Sections */}
                <div className="space-y-10">
                    {sections.map((section) => (
                        <div key={section.id} className="group">
                            <h2 className="text-xl font-bold text-black dark:text-white mb-4 group-hover:text-yellow-500 transition-colors">
                                {section.id}. {section.title}
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500">
                    Last updated: December 2025
                </div>
            </div>
        </div>
    );
};

export default Service;
