import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-4xl px-4 md:px-6 mt-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none">
          <h3>Eligibility</h3>
          <ol>
            <li>1. Participants must bring a valid student ID card.</li>
            <li>2. Organizers are not responsible for any technical failures, data loss, or personal injury.</li>
            <li>3. Participants are responsible for their own devices.</li>
            <li>4. Teams must submit original work — plagiarism or pre-built projects are not allowed.</li>
            <li>5. The organizers reserve the right to disqualify teams for any form of misconduct.</li>
            <li>6. The decision of the judges will be final and binding.</li>
            <li>7. Participants are expected to adhere to the event’s schedule and guidelines.</li>
          </ol>
          <br></br>
          <h3>Refund Policy</h3>
          <ol>
            <li>1. The registration fee is non-refundable.</li>
            <li>2. Refunds for event fees will be considered only in the following cases:
              <ul>
                <li>    • Event cancellation by the organizers due to unforeseen circumstances.</li>
                <li>    • Technical issues preventing participation, verified by the organizers.</li>
              </ul>
            </li>
          </ol>
          <br></br>
          <h3>Code of Conduct</h3>
          <ol>
            <li>1. All participants are expected to behave respectfully and professionally.</li>
            <li>2. Harassment, discrimination, or any form of misconduct will not be tolerated and may result in disqualification and expulsion from the event.</li>
          </ol>
        </div>
      </section>
      <Footer />
    </main>
  )
}
