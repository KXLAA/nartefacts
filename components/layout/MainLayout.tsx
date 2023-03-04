type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout(props: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{props.children}</main>
    </div>
  );
}
