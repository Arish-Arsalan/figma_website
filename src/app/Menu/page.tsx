import React from 'react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}
import Image from 'next/image';
const Menu: React.FC = () => {
  const items: MenuItem[] = [
    { name: 'Espresso', price: 'Rs.500', description: 'Rich and bold espresso shot with a concentrated coffee flavor.', image: '/Espresso.jpg' },
    { name: 'Cappuccino', price: 'Rs.480', description: 'Creamy cappuccino topped with a layer of foam and a hint of cocoa.', image: '/Cappuccino.jpg' },
    { name: 'Latte', price: 'Rs.450', description: 'Smooth latte with steamed milk, a perfect balance of espresso and milk.', image: '/Latte.jpg' },
    { name: 'Mocha', price: 'Rs.370', description: 'A sweet blend of chocolate and espresso, topped with whipped cream.', image: '/Mocha.jpg' },
    { name: 'Flat White', price: 'Rs.370', description: 'Velvety smooth coffee with a balance of espresso and steamed milk.', image: '/Flat-white.jpg' },
    { name: 'Irish Coffee', price: 'Rs.350', description: 'A warm blend of coffee with a touch of Irish whiskey and cream.', image: '/IRISH-cofee.jpg' },
    { name: 'Freddo Coffee', price: 'Rs.350', description: 'A cold coffee with strong espresso base and a layer of frothy foam.', image: '/Freddo-cofee.jpg' },
    { name: 'Raf Coffee', price: 'Rs.300', description: 'A creamy coffee with vanilla syrup and steamed milk, unique to Russia.', image: '/RAF_cofee.jpg' },
    { name: 'Glace Coffee', price: 'Rs.300', description: 'A classic French coffee served with a scoop of ice cream for a cold treat.', image: '/galce cofee.jpg' },
    { name: 'Glazed Doughnuts', price: 'Rs.150', description: 'A soft doughnut covered in a classic sugary glaze.', image: '/Glazed-Doughnuts.jpg' },
    { name: 'Powdered Doughnuts', price: 'Rs.180', description: 'Delicate doughnut dusted with fine powdered sugar.', image: '/Pwoder-dounts.jpg' },
    { name: 'Crumb Doughnuts', price: 'Rs.200', description: 'Soft doughnut with a crunchy crumb topping.', image: '/crumb Doughnuts.jpg' },
    { name: 'Chocolate Doughnuts', price: 'Rs.220', description: 'Rich chocolate glaze over a classic doughnut.', image: '/Chucolate.jpg' },
    { name: 'Vanilla Sprinkle Doughnuts', price: 'Rs.250', description: 'Vanilla-glazed doughnut topped with colorful sprinkles.', image: '/vanilla sprinkle donuts.jpg' },
    { name: 'Cinnamon Roll Doughnuts', price: 'Rs.280', description: 'Cinnamon-flavored doughnut with sweet icing drizzle.', image: '/Cinnamin Roll dounats.jpg' },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="bg-white shadow-lg rounded-lg p-4">
            <Image src={item.image} alt={item.name} width={160} height={160} className="w-full h-40 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-lg">{item.price}</p>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;