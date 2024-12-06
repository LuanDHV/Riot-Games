export const metadata = {
  title: "League Of Legends",
  description: "Welcome to League Of Legends",
  icons: "/imgs/leagueoflegends/leagueoflegends-icon.png",
};
export default function LeagueOfLegendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
