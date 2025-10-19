import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-4xl px-4 md:px-6 mt-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By participating in CICADA 2025, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not participate in the event.
          </p>

          <h2>2. Event Participation</h2>
          <p>
            Participation in CICADA 2025 is open to students of Atria Institute of Technology. All participants must register for events through the provided Google Forms. Teams must adhere to event-specific rules and guidelines.
          </p>

          <h2>3. Registration and Fees</h2>
          <p>
            Registration for events may require payment of fees as specified on the event page. All fees are non-refundable except in cases outlined in the refund policy below.
          </p>

          <h2>4. Refund Policy</h2>
          <p>
            Refunds for event fees will be considered only in the following cases:
          </p>
          <ul>
            <li>Event cancellation by the organizers due to unforeseen circumstances.</li>
            <li>Technical issues preventing participation, verified by the organizers.</li>
            <li>Medical emergencies or other extenuating circumstances, subject to approval.</li>
          </ul>
          <p>
            Requests for refunds must be submitted via email to cicada@ait.edu within 7 days of the event date. Approved refunds will be processed within 14-21 business days. A processing fee may apply.
          </p>

          <h2>5. Code of Conduct</h2>
          <p>
            All participants are expected to behave respectfully and professionally. Harassment, discrimination, or any form of misconduct will not be tolerated and may result in disqualification and expulsion from the event.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            Participants retain ownership of their work but grant CICADA 2025 the right to use submitted materials for promotional purposes.
          </p>

          <h2>7. Liability</h2>
          <p>
            CICADA 2025 organizers are not liable for any loss, damage, or injury incurred during the event. Participants attend at their own risk.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            These terms may be updated at any time. Participants will be notified of significant changes.
          </p>

          <h2>9. Contact</h2>
          <p>
            For questions regarding these terms, contact us at cicada@ait.edu.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
