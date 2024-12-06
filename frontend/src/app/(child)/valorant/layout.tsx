export const metadata = {
  title: "VALORANT",
  description: "Welcome to VALORANT",
  icons: "/imgs/valorant/valorant-icon.png",
};
export default function ValorantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
