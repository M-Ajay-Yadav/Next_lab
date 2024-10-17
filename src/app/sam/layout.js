export default function sam({ children, left, right }) {
  const isSidebar = false;
  return (
    <section>
      {children}
      {/* {left}
      {right} */}
      {isSidebar ? left : right}
    </section>
  );
}
