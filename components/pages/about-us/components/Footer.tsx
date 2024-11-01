import React from 'react';

const Footer = () => {
    return (
        <div className="w-full py-10 px-18 bg-black text-text-darken-2 flex flex-col justify-start items-start gap-10">
            <div className="w-full flex justify-between items-start">
                <div className="flex items-start gap-10">
                    <div>
                        support@elevanceit.com
                    </div>
                    <div className="cursor-pointer">
                        Terms of Service
                    </div>
                    <div className="cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                <div>
                    © 2024 ELEVANCE LTD. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;