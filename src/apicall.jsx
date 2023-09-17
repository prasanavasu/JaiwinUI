import axios from 'axios';

const convertToHTML = () => {
    // Get all modal elements
    const modals = document.querySelectorAll(".modal");

    // Create a new document to store the modal content
    const newHTMLDocument = document.implementation.createHTMLDocument("ModalContent");
    const newHTMLBody = newHTMLDocument.body;

    // Iterate through all modals and append their content to the new HTML document
    modals.forEach((modal) => {
        const modalContent = modal.querySelector(".modal-body");
        newHTMLBody.appendChild(modalContent.cloneNode(true));
    });

    // Get the new HTML content as a string
    const newHTMLString = newHTMLDocument.documentElement.outerHTML;
    console.log(newHTMLString)
    // Send the new HTML content to the server
    axios
        .post('http://3.108.190.159:5000/convert_to_python', { html_content: newHTMLString }, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then((data) => {
            // Create a Blob from the response data
            const blob = new Blob([data], { type: 'application/pdf' });

            // Create a URL for the Blob
            const url = URL.createObjectURL(blob);

            // Create a link and trigger a download
            const a = document.createElement('a');
            a.href = url;
            a.download = 'output.pdf';
            a.click();

            // Revoke the Object URL to free up resources
            URL.revokeObjectURL(url);
        })
        .catch((error) => {
            console.error('Error sending data to Python function:', error);
        });
};


export default convertToHTML;
