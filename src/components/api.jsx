
const Html_Pdf = (html,styles) => {
    // Create a data object to send to the backend
    const data = {
        html_content: html,
        styles: styles,
      };
      
      // const local = "http://localhost:5000/"
      const prod = "https://backend.jaiwin.co.in/"
      // Make an HTTP POST request to your backend API
      fetch(`${prod}convert_to_python`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the HTML content and styles to the backend
      })
        .then(response => {
          if (response.ok) {
            return response.blob();
          } else {
            throw new Error('Network response was not ok.');
          }
        }).then(blob => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'output.pdf';
          a.click();
          URL.revokeObjectURL(url);
        })
        .catch(error => {
          // Handle any errors
          console.error('Error:', error);
        });
}


export default Html_Pdf