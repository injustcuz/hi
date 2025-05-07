import './globals.css';

export const metadata = {
  metadataBase: new URL("https://your-miniapp-domain.com"),
  title: "Channel Videos Mini App",
  description: "Displays YouTube videos from a Farcaster channel.",
  openGraph: {
    title: "Channel Videos Mini App",
    description: "Displays embedded YouTube videos from Farcaster channel posts.",
    images: [{
      url: "/images/preview.png",
      width: 1200,
      height: 630
    }]
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://your-miniapp-domain.com/images/preview.png",
    "fc:frame:button:1:text": "Open Videos",
    "fc:frame:button:1:url": "https://your-miniapp-domain.com"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
