export const metadata = {
  title: "Runeterra",
  description: "Welcome to Runeterra",
  icons: "/imgs/runeterra/runeterra-icon.png",
};
export default function RuneterraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
