import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, Users, Code2, LayoutDashboard, BarChart3 } from "lucide-react";

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

export default function ELearning() {
  const features = [
    // Learners
    {
      icon: <Sparkles />,
      title: "Personalized Learning Paths",
      description: "AI-powered adaptive learning paths tailored to each student.",
    },
    {
      icon: <Users />,
      title: "Gamified Learning",
      description: "Earn badges, scores, and leaderboard rankings while learning.",
    },
    {
      icon: <BarChart3 />,
      title: "Domain-Specific Recommendations",
      description: "AI recommends courses and content specific to your interests.",
    },
    {
      icon: <Code2 />,
      title: "Certified Courses",
      description: "Expert-curated courses with official certification.",
    },
    {
      icon: <LayoutDashboard />,
      title: "Course Marketplace",
      description: "Access 5000+ courses in one integrated AI-driven marketplace.",
    },
    {
      icon: <Sparkles />,
      title: "Smart Assignments",
      description: "AI generates assignments based on your course progress.",
    },
    // Content Creators
    {
      icon: <Users />,
      title: "Publish Custom Courses",
      description: "Create and publish courses to reach thousands of learners.",
    },
    {
      icon: <Sparkles />,
      title: "Earn Rewards & Recognition",
      description: "Gain creator perks, recognition, and incentives for high-quality content.",
    },
    {
      icon: <Code2 />,
      title: "AI-Assisted Content Creation",
      description: "Use AI tools to design course modules faster and smarter.",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden px-6 py-24">
      {/* Background AI gradient orbs */}
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
        E-Learning Hub
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
