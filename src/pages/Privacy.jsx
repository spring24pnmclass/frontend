import React from "react";
import "/src/components/Privacy.css"; 

export const Privacy = () => {
    return (
        <div id="root">
            <div className="privacy-policy">
                <h1 className="title">Privacy Policy</h1>
                <div className="content">
                    <div className="column">
                        <h2>Information Collected</h2>
                        <p>Details about what information is collected...</p>
                    </div>
                    <div className="column">
                        <h2>Data Collection</h2>
                        <p>Details about the data collection practices...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
