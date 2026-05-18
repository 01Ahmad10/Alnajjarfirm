import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-top">
            <div className="footer-left">
              <Image
                className="footer-logo"
                src="/favicon.png"
                alt="Alnajjar Firm"
                width={56}
                height={56}
              />
              <p className="footer-description">
                We build your influence, your image, and your online authority
                so the world sees you the way you were meant to be seen.
              </p>
            </div>
            <div className="footer-right">
              <h4>Contact</h4>
              <address>
                <a href="https://wa.me/96181623936" target="_blank" rel="noreferrer" aria-label="WhatsApp Alnajjar Firm">
                  +961 81 623 936
                </a>
                <a href="mailto:info@alnajjarfirm.com" aria-label="Email Alnajjar Firm">
                  info@alnajjarfirm.com
                </a>
                <span>Awkar, Mount Lebanon, Lebanon</span>
              </address>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-service-links">
              <h4>Our Services</h4>
              <div className="service-links-row">
                <Link href="/" title="Content creation agency in Lebanon">Content Creation</Link>
                <Link href="/" title="Social media management Lebanon">Social Media Management</Link>
                <Link href="/" title="Reels production Lebanon">Reels Production</Link>
                <Link href="/" title="Video editing services Lebanon">Video Editing</Link>
                <Link href="/" title="Branding agency Lebanon">Branding &amp; Design</Link>
                <Link href="/" title="Web development Lebanon">Web Development</Link>
              </div>
              <h4 style={{ marginTop: "1rem" }}>Customer Service</h4>
              <div className="service-links-row">
                <Link href="/contacts">Contact us</Link>
                <Link href="/privacy-policy">Privacy policy</Link>
                <Link href="/terms-conditions">Terms &amp; Condition</Link>
              </div>
            </div>
            <p className="footer-copy">&copy; 2025 Al Najjar Firm. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
