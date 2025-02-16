const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-600 to-neutral-100">
      {children}
    </main>
  );
};

export default AuthLayout;
