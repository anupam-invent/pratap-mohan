import { LegalPage } from "@/components/site";

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <p><strong>Last Updated:</strong> July 31, 2026</p>
      <p>Your privacy matters. This website collects only the information necessary to improve your experience and respond to your inquiries.</p>

      <h2 className="mt-6 text-xl font-semibold text-white">Information We Collect</h2>
      <p>We may collect:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-400">
        <li>Name and email address (if you contact us).</li>
        <li>Basic technical information such as IP address, browser type, and device information.</li>
        <li>Anonymous usage data through cookies and analytics.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-white">How We Use Your Information</h2>
      <p>Your information may be used to:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-400">
        <li>Respond to your messages.</li>
        <li>Improve the website and user experience.</li>
        <li>Analyze website traffic.</li>
        <li>Maintain website security.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-white">Cookies &amp; Analytics</h2>
      <p>This website may use cookies and analytics services to understand visitor behavior and improve performance. You can disable cookies through your browser settings.</p>

      <h2 className="mt-6 text-xl font-semibold text-white">Affiliate Links</h2>
      <p>Some pages contain affiliate links. If you make a purchase through these links, we may earn a commission at no additional cost to you.</p>

      <h2 className="mt-6 text-xl font-semibold text-white">Third-Party Services</h2>
      <p>Links to external websites are provided for your convenience. We are not responsible for their privacy practices or content.</p>

      <h2 className="mt-6 text-xl font-semibold text-white">Changes to This Policy</h2>
      <p>This Privacy Policy may be updated from time to time. Any changes will be posted on this page.</p>

      <h2 className="mt-6 text-xl font-semibold text-white">Contact</h2>
      <p>For any privacy-related questions, please contact us at <a href="mailto:your@email.com" className="text-signal hover:underline">your@email.com</a>.</p>
    </LegalPage>
  );
}
