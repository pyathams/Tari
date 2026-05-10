import { Analytics } from '@vercel/analytics/react';
import './globals.css'; // This line might already exist, keep it!

export const metadata = {
  title: 'My Website',
  description: 'Powered by Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* This renders your actual website content */}
        {children}
        
        {/* This adds the Vercel Analytics tracker */}
        <Analytics />
      </body>
    </html>
  );
}