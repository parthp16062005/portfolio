"use client";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import CurrentlyCreating from "@/components/CurrentlyCreating";
import Dashboard from "@/components/Dashboard";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Loader />
      <Navbar />
      <Hero />
      <Projects />
      <Process />
      <CurrentlyCreating />
      <Dashboard />
      <CTA />
    </main>
  );
}