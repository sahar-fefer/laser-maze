import type {Metadata} from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Laser Maze',
  description: 'Welcome to the Laser Maze!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
