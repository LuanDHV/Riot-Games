// RootLayout.tsx
import "./globals.css";
import StoreProvider from "../store/providers/StoreProvider";
import ToastProvider from "../store/providers/ToastProvider";

export const metadata = {
  title: "Riot Games",
  description: "Welcome to Riot Games",
  icons: "/imgs/riotgames/others/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <ToastProvider />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
