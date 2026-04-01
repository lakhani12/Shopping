import React from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

export const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-[#cebdb5]/30 text-[#3b2f2f]">
      {/* Hero */}
      <section className="bg-[#cebdb5] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full text-sm">
            Contact Support
          </span>
          <h1 className="text-3xl md:text-4xl font-medium mt-4 mb-3">
            We'd Love To Hear From You
          </h1>
          <p className="text-black/60">
            Have questions about orders, products, or anything else? Our team is
            ready to help you anytime.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <InfoCard
              icon={<Phone />}
              title="Call Us"
              value="+91 98765 43210"
              desc="Mon - Sat : 10AM - 7PM"
            />

            <InfoCard
              icon={<Mail />}
              title="Email"
              value="support@yourstore.com"
              desc="We reply within 24 hours"
            />

            <InfoCard
              icon={<MapPin />}
              title="Office"
              value="Ahmedabad, Gujarat"
              desc="India"
            />

            <InfoCard
              icon={<Clock />}
              title="Working Hours"
              value="Monday - Saturday"
              desc="10:00 AM - 7:00 PM"
            />

            {/* Chat box */}
            <div className="bg-[#583101] text-white p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle />
                <h3 className="font-medium text-lg">Live Chat</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Chat with our team for instant help and quick support.
              </p>
              <button className="bg-white text-[#583101] px-4 py-2 rounded-lg text-sm font-medium">
                Start Chat
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-medium mb-6">Send us a message</h2>

            <form className="grid md:grid-cols-2 gap-4">
              <Input label="Full Name" placeholder="John Doe" />
              <Input label="Email" placeholder="john@example.com" />
              <Input label="Phone" placeholder="+91 98765 43210" />
              <Input label="Subject" placeholder="Order Issue" />

              <div className="md:col-span-2">
                <label className="text-sm text-black/60">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#583101]/30"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-[#583101] text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:opacity-95 active:scale-95"
                >
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-sm">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Surat&output=embed"
            className="w-full h-[350px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, title, value, desc }) {
  return (
    <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl flex gap-4 items-start hover:shadow-md transition">
      <div className="text-[#583101] mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm">{value}</p>
        <p className="text-xs text-black/50">{desc}</p>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm text-black/60">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full mt-1 px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#583101]/30"
      />
    </div>
  );
}
export default ContactUs;
