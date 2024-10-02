export const metadata = {
  title: "Sign In",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="">Sign In Layout </div>
      {children}
    </>
  );
}
