export const metadata = {
  title: "Homepage | Riot Game Store",
  description: "Welcome to Riot Game Store",
  icons: "/imgs/riotgames/others/icon.png",
};
export default function RiotMerchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
