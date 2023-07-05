import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Workout Bee',
  description: 'Your virtual workout buddy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
