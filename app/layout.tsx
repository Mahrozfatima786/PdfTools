// import './globals.css';
// import Script from 'next/script';

// export const metadata = {
//   title: 'Free PDF Tools Online',
//   description:
//     'Merge PDF, Split PDF, Compress PDF, Rotate PDF, JPG to PDF and PDF to JPG Converter.',
//   keywords: [
//     'PDF Tools',
//     'Merge PDF',
//     'Split PDF',
//     'Compress PDF',
//     'Rotate PDF',
//     'JPG to PDF',
//     'PDF to JPG',
//   ],
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* AdSense Script */}
//         <Script
//           async
//           strategy="afterInteractive"
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
//           crossOrigin="anonymous"
//         />

//         {children}
//       </body>
//     </html>
//   );
// }
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Free PDF Tools Online',
  description:
    'Merge PDF, Split PDF, Compress PDF, Rotate PDF, JPG to PDF and PDF to JPG Converter.',
  keywords: [
    'PDF Tools',
    'Merge PDF',
    'Split PDF',
    'Compress PDF',
    'Rotate PDF',
    'JPG to PDF',
    'PDF to JPG',
  ],

  verification: {
    google: 'ABC123XYZ456...',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
          crossOrigin="anonymous"
        />

        {children}
      </body>
    </html>
  );
}