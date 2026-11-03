export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Anggoro & Associates. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
