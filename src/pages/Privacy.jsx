import React from "react";
import "/src/components/Privacy.css"; 

export const Privacy = () => {
    return (
        <div id="root">
            <div className="privacy-policy">
                <div className="content">
                    <h1 className="title">Privacy Policy</h1>
                    <h2 className="header">Policy</h2>
                    <p className="text">This Privacy Policy outlines the practices for collecting, using, maintaining, 
                        and disclosing the information collected by the To-Go Bot.</p>
 
                    <h2 className="header">Information Collection and Use</h2>
                    <p className="text">We collect your email, display name, and profile picture. This information 
                        is displayed on the website's location page after you conduct your order to 
                        customize your user experience.</p>

                    <h2 className="header">Data Sharing</h2>
                    <p className="text">The data collected in the To-Go Bot project is used 
                        only on the location page for the sole purpose of customizing
                        each user's experience. 
                    </p>

                    <h2 className="header">Data Storage and Security</h2>
                    <p className="text">User data is stored and encrypted in a secure database. </p>

                    <h2 className="header">Changes to Privacy Policy</h2>
                    <p className="text">When there are changes to the Privacy Policy, this page will be updated accordingly. Users will
                        be notified of any changes through email.</p>
   
                    <h2 className="header">Contact Us!</h2>
                    <p className="text">If you have any questions about our Privacy Policy, please reach out to natalie.tran01@sjsu.edu.</p>
                    <p className="bottom-margin"></p>
                </div>
            </div>
        </div>
    );
};
