import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, BarChart3, Code, FileText } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.5)" }}
      className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-indigo-300 transition-all"
    >
      <div className="text-indigo-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function AISuite() {
  const features = [
    {
      icon: <Sparkles />,
      title: "Plagiarism Checker",
      description:
        "AI-powered semantic scanning, detailed similarity reports, paraphrasing assistance, academic integrity scoring.",
    },
    {
      icon: <Code />,
      title: "AI Code Detector",
      description:
        "Detect AI-generated code, highlight line-by-line probability, provide human-style rewrites, AI vs Human % breakdown.",
    },
    {
      icon: <FileText />,
      title: "AI Phrase Detector",
      description:
        "Spot AI-generated text, suggest natural human-like revisions, highlight sentences with probability, AI vs Human chart.",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden px-6 py-24">
      {/* Background AI glow orbs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 140, ease: "linear" }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-200 to-indigo-200 rounded-full blur-3xl opacity-30"
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
      >
        AI-With-Integrity Suite
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {features.map((f, i) => (
          <Feature key={i} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </motion.div>
    </div>
  );
}
