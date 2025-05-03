const loadContactContent = () => {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
  
    const elements = [
      ['h1', 'Contact Us'],
      ['p', 'Phone: +972 50-123-4567'],
      ['p', 'Email: info@abuqueidercuisine.com'],
      ['p', 'Address: 123 Main St, City Center, Israel'],
      ['p', 'Follow us on Instagram: @abuqueidercuisine']
    ];
  
    elements.forEach(([tag, text]) => {
      const el = document.createElement(tag);
      el.textContent = text;
      content.appendChild(el);
    });
  };
  
  export default loadContactContent;
  