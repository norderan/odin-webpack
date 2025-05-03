const loadHomeContent = () => {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
  
    const elements = [
      ['h1', 'Welcome to Our Restaurant'],
      ['p', 'Welcome to our restaurant, where we deliver high quality and fresh dishes from the bedouin kitchen.'],
      
      ['h1', 'Hours'],
      ['p', 'Sunday: 8:30 - 22:00'],
      ['p', 'Monday: 8:30 - 22:00'],
      ['p', 'Tuesday: 8:30 - 22:00'],
      ['p', 'Wednesday: 8:30 - 22:00'],
      ['p', 'Thursday: 8:30 - 22:00'],
      ['p', 'Friday: closed'],
      ['p', 'Saturday: 8:30 - 22:00'],
      
      ['h1', 'Location'],
      ['p', 'We are located in the heart of the city, at 123 Main St.']
    ];
  
    elements.forEach(([tag, text]) => {
      const el = document.createElement(tag);
      el.textContent = text;
      content.appendChild(el);
    });
  };
  
  export default loadHomeContent;
  