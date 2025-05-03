const loadMenuContent = () => {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
  
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    content.appendChild(title);
  
    const dishes = [
      {
        name: 'Mansaf',
        description: 'A traditional Bedouin dish made with lamb cooked in fermented yogurt and served over rice.',
        price: '₪60'
      },
      {
        name: 'Zarb',
        description: 'Bedouin BBQ cooked underground with meat, rice, and vegetables, infused with smoky flavor.',
        price: '₪75'
      },
      {
        name: 'Shorbat Adas',
        description: 'Lentil soup spiced with cumin and lemon, served with fresh flatbread.',
        price: '₪25'
      },
      {
        name: 'Magluba',
        description: 'Upside-down rice dish with lamb, vegetables, and aromatic spices.',
        price: '₪50'
      },
      {
        name: 'Bedouin Tea & Dates',
        description: 'Sweet black tea brewed with sage and served with fresh dates.',
        price: '₪15'
      }
    ];
  
    dishes.forEach(dish => {
      const name = document.createElement('h2');
      name.textContent = dish.name;
  
      const desc = document.createElement('p');
      desc.textContent = dish.description;
  
      const price = document.createElement('p');
      price.textContent = `Price: ${dish.price}`;
  
      content.appendChild(name);
      content.appendChild(desc);
      content.appendChild(price);
    });
  };
  
  export default loadMenuContent;
  