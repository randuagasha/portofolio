"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
} from "lucide-react";

/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mvzabjzg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.section
      id="contact"
      className="relative w-full py-32"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        className="text-center max-w-3xl mx-auto px-6 mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Contact <span className="text-blue-500">Me</span>
        </h2>
        <p className="mt-4 text-[#94A3B8]">
          Let's discuss your project or exciting collaboration opportunities
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <motion.div variants={fadeUp} className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Let’s Connect
            </h3>
            <p className="text-[#94A3B8] max-w-md">
              I'm always open to new projects, creative ideas, or just discussing
              technology. Don't hesitate to reach out to me!
            </p>
          </div>

          <div className="space-y-5">
            <ContactItem
              icon={<Mail />}
              title="Email"
              value="randukeola@gmail.com"
            />
            <ContactItem
              icon={<Phone />}
              title="Phone"
              value="+6289654554976"
            />
            <ContactItem
              icon={<MapPin />}
              title="Location"
              value="Jakarta, Indonesia"
            />
            <ContactItem
              icon={<Linkedin />}
              title="LinkedIn"
              value="linkedin.com/in/randuagasha"
            />
            <ContactItem
              icon={<Instagram />}
              title="Instagram"
              value="instagram.com/notrannnnn"
            />
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          variants={fadeUp}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Name"
                name="name"
                placeholder="Your Full Name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="email@example.com"
              />
            </div>

            <Input
              label="Subject"
              name="subject"
              placeholder="Message subject"
            />

            <Textarea
              label="Message"
              name="message"
              placeholder="Write your message here..."
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-medium py-3 rounded-xl transition"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p className="text-green-400 text-sm pt-2">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm pt-2">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ================= COMPONENTS ================= */

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-[#94A3B8]">{title}</p>
        <p className="text-white text-sm">{value}</p>
      </div>
    </div>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="text-sm text-[#94A3B8]">{label}</label>
      <input
        {...props}
        required
        className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Textarea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="text-sm text-[#94A3B8]">{label}</label>
      <textarea
        {...props}
        required
        rows={5}
        className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
    </div>
  );
}
