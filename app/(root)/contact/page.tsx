"use client";

import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log("Call send API here");
  };
  return (
    <main className={`flex flex-col items-center p-24 min-h-screen`}>
      <div className="relative flex flex-col gap-4 ">
        <div className="flex flex-col place-items-center gap-4">
          <h1 className={`m-0 text-center text-3xl`}>Contact US</h1>
        </div>
        <form
          className="mt-6 flex flex-col max-w-xl gap-4 z-10"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            className="rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            className="rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email-address" className="sr-only">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="phone"
            required
            value={phone}
            className="rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            type="submit"
            className="flex justify-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            {loading ? (
              <div
                style={{
                  borderTopColor: "transparent",
                }}
                className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
              ></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
