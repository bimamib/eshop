const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://eshop-6t3s-dhika.vercel.app/';
// export const server = dev ? 'http://localhost:3000':'https://next-ecommerce-front.vercel.app';