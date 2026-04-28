import React from 'react';
import { PageWrapper } from '../components/PageWrapper';

export function TermsPage() {
  return (
    <PageWrapper>
      <section className="py-24 px-4 bg-beige min-h-screen">
        <div className="max-w-4xl mx-auto bg-cream p-8 md:p-20 rounded-4xl shadow-sm border border-stone-100">
          <div className="text-center mb-16 underline-offset-8">
            <h1 className="text-4xl md:text-6xl text-stone-900 mb-6">Terms & Conditions</h1>
            <p className="text-rose font-medium tracking-widest uppercase text-sm">Please read carefully prior to booking</p>
          </div>

          <div className="prose prose-stone max-w-none space-y-12 text-stone-700 leading-relaxed font-light">
            <div className="text-center italic text-lg mb-12">
              By booking with The Picnic Project, you agree to the following Terms & Conditions. 
              Please read carefully prior to filling out the booking form.
            </div>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4 border-b border-rose/20 pb-2">1. Booking & Payment</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>A deposit is required to secure your booking.</li>
                <li>Your booking is only confirmed and locked in once the deposit has been received.</li>
                <li>Final payment is due 2 days prior to the event date.</li>
                <li>If final payment is not received by this time, The Picnic Project reserves the right to cancel the booking.</li>
                <li>Optional extras must be selected and confirmed prior to the event date.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4 border-b border-rose/20 pb-2">2. Cancellations & Refunds</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cancellations made more than 7 days prior to the event will receive a refund of payments made, with 25% of the deposit retained to cover administrative and booking costs.</li>
                <li>Cancellations made within 2 days of the booked date are non-refundable, unless the picnic is rescheduled within a two-month period, subject to availability.</li>
                <li>Rescheduled bookings must take place within two months of the original event date.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4 border-b border-rose/20 pb-2">3. Outdoor Events & Wet Weather</h2>
              <div className="space-y-4">
                <p>Outdoor events are subject to weather conditions. The client is responsible for arranging an alternative indoor location if required or if showers are forecast.</p>
                <p>Upon booking, you will receive a document highlighting suggested wet weather venue options around Newcastle; however, it is the client’s responsibility to enquire, secure, and book these venues.</p>
                <p>The Picnic Project does not provide wet weather venues.</p>
                <p>If rain is forecast and no suitable backup location has been organised, a refund will be provided excluding the deposit, which will be retained.</p>
                <p className="font-medium text-rose underline decoration-rose/30 underline-offset-4 tracking-tight">Our picnic setups are not weatherproof.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4 border-b border-rose/20 pb-2">4. Access & Event Timing</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>The client must ensure clear and safe access to the venue for setup and pack down.</li>
                <li>The standard picnic hire duration is 2 hours, unless otherwise agreed in writing.</li>
                <li>The standard hire period includes agreed access for setup and pack down.</li>
                <li>If a longer or shorter duration is requested, this must be arranged in advance.</li>
                <li>If access is delayed or restricted, The Picnic Project is not responsible for reduced picnic time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4 border-b border-rose/20 pb-2">5. Food & Catering</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>The Picnic Project does not provide food or catering services.</li>
                <li>Clients are welcome to BYO food, beverages and serving platters etc.</li>
                <li>Upon booking, clients will receive a guide including recommended catering providers and wet weather venue suggestions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4 border-b border-rose/20 pb-2">6. Client Responsibilities & Damage</h2>
              <p className="mb-4">The client is responsible for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The conduct of all guests during the event</li>
                <li>Ensuring all hired equipment and styling items are treated with care</li>
                <li>Any damage, breakage, staining, theft, or loss of equipment or styling items will be charged to the client at the full replacement value.</li>
                <li>All styling items remain the property of The Picnic Project unless otherwise stated (e.g., personalised signage).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4 border-b border-rose/20 pb-2">7. Liability & Safety</h2>
              <p className="mb-4">The Picnic Project takes reasonable care to provide a safe and professional setup. However, we are not liable for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Injuries or accidents occurring during the event</li>
                <li>Loss, theft, or damage to personal belongings</li>
                <li>Weather-related disruptions</li>
                <li>Children must be supervised at all times.</li>
                <li>Candles may be used during the picnic; however, they will not be used if wind speeds exceed 15 km/h or if conditions are deemed unsafe at the time of setup.</li>
                <li>For safety reasons, umbrellas will not be installed or may be removed if winds exceed 20 km/h, or if conditions are deemed unsafe at the time of setup.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4 border-b border-rose/20 pb-2">8. Force Majeure</h2>
              <p>The Picnic Project is not liable for cancellations, delays, or changes resulting from circumstances beyond our reasonable control. This includes, but is not limited to, extreme weather conditions, natural disasters, government restrictions, public health orders, venue closures, emergencies, or other unforeseen events.</p>
              <p className="mt-4">In such circumstances, we will make reasonable efforts to reschedule your booking where possible; however, refunds will remain subject to the cancellation policy outlined above.</p>
            </section>
          </div>
          
          <div className="mt-20 text-center">
            <p className="font-handwriting text-3xl text-sage mb-8">We can't wait to host you!</p>
            <div className="w-16 h-1 bg-rose/20 mx-auto rounded-full" />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
