export default function Layout() {
  return (
    <div>
      <Header />
      {this.props.children}
      /* anything else you want to appear on every page that uses this layout */
      <Footer />
    </div>
  );
}
