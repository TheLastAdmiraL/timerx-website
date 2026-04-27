import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | TimerX</title>
      </Head>

      <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 text-slate-900 shadow-lg sm:p-8">
          <h1 className="mb-6 text-4xl font-bold">Privacy Policy for TimerX</h1>

          <p className="mb-4">
            At TimerX, your privacy is extremely important to us. This policy
            outlines how we collect, use, and safeguard your personal
            information when you use our app and services.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold">
            Information We Collect
          </h2>
          <p className="mb-4">
            - Personal Information: TimerX does not collect personal
            identifiable information like name, email, or contact details
            unless voluntarily provided through our contact page.
            <br />- Usage Data: We may collect anonymous usage statistics, such
            as the amount of time spent on the app, features used, and crash
            reports to improve TimerX.
            <br />- Device Information: Basic information such as device model,
            operating system version, and language settings may be collected to
            ensure compatibility and improve user experience.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            - To monitor app performance and user engagement.
            <br />- To fix bugs, improve stability, and enhance the TimerX
            experience.
            <br />- To communicate important updates, if voluntarily subscribed.
            <br />- To comply with legal obligations if necessary.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold">
            Data Protection and Security
          </h2>
          <p className="mb-4">
            TimerX uses industry-standard security practices to protect your
            data. All analytics data collected is anonymized and secured. We do
            not sell, rent, or trade user information to third parties.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold">
            Third-Party Services
          </h2>
          <p className="mb-4">
            TimerX may use third-party services like Google Analytics for
            anonymous usage tracking. These third parties are bound by their own
            privacy policies and terms.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold">User Control</h2>
          <p className="mb-4">
            You have full control over your usage of TimerX. You can choose to
            uninstall the app at any time if you do not agree with our privacy
            practices.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold">
            Changes to This Policy
          </h2>
          <p className="mb-4">
            TimerX may update this privacy policy from time to time. We
            encourage users to review this page periodically. Changes are
            effective immediately upon posting.
          </p>

          <h2 className="mb-2 mt-6 text-2xl font-semibold">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, feel free to
            contact us through the TimerX Contact page.
          </p>
        </div>
      </main>
    </>
  );
}
  
