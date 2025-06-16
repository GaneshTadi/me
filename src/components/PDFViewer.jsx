import React from "react";
import resumePDF from '../assets/Ganesh-Tadi-Resume.pdf';

const PDFViewer = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF; // Use the imported PDF path
        link.download = 'Ganesh-Tadi-Resume.pdf';
        link.click();
    };

    return (
        <div id="resume" className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-2xl mb-4">View and Download</h1>
            <h2 className="text-xl mb-2">Full Stack Developer Resume</h2>
            <div className="border border-gray-400 p-4 mb-4">
                <iframe
                    src={resumePDF}
                    width="600"
                    height="500"
                    title="PDF Viewer"
                    style={{ cursor: 'pointer' }} // Add cursor style
                ></iframe>
            </div>
            <div className="flex space-x-4">
                <button
                    className="btn-primary"
                    onClick={() => window.open(resumePDF, '_blank')} // Open PDF in new tab
                >
                    Preview
                </button>
                <button
                    className="btn-primary" // Use custom button style for Download
                    onClick={handleDownload}
                >
                    Download
                </button>
            </div>
        </div>
    );
};

export default PDFViewer;