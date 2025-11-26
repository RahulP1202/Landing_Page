import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Brain, Video, Users, BarChart3, LayoutDashboard, Bot, Code, FileText, Sparkles, Calendar, MessageSquare 
} from "lucide-react";

// Page-level animation variants
const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.8
    } 
  }
};

// Card animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } },
};

// Feature card component with neon glow
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.6)" }}
    className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-indigo-300 transition-all group cursor-pointer"
  >
    {/* Neon glow effect */}
    <div className="absolute inset-0 rounded-2xl pointer-events-none">
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 blur-2xl mix-blend-screen"
      />
    </div>

    <div className="relative">
      <motion.div
        whileHover={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
        className="text-indigo-600 text-4xl mb-4 group-hover:text-indigo-500"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default function LMS() {
  return (
    <motion.div 
      className="min-h-screen bg-white relative overflow-hidden"
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      {/* Floating gradient AI orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-400 to-indigo-400 rounded-full blur-3xl opacity-30"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 leading-tight"
        >
          Learning Management System (LMS)
        </motion.h1>
        <motion.p className="mt-6 text-xl text-gray-600">
          The world’s most intelligent education platform — completely powered by AI.
        </motion.p>
      </section>

      {/* Instructors Section */}
      <section className="py-24 px-6">
        <motion.h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          For Instructors
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature icon={<Brain />} title="AI-Powered Workspace" description="Generate smarter lectures, auto-create presentations, and manage materials effortlessly using AI." />
          <Feature icon={<Video />} title="Live Classroom" description="Conduct interactive sessions with attendance tracking, whiteboards, polls & live engagement." />
          <Feature icon={<Users />} title="Live Meetings" description="Host secure, free meetings without switching platforms." />
          <Feature icon={<BarChart3 />} title="Student Insights" description="Auto-generated performance reports with predictive analytics." />
          <Feature icon={<LayoutDashboard />} title="Virtual Classroom" description="Assign, review & manage academic activities with seamless workflow." />
        </motion.div>
      </section>

      {/* Students Section */}
      <section className="py-24 px-6 bg-gray-50/50">
        <motion.h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          For Students
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature icon={<Bot />} title="Smart Virtual Classroom" description="Attempt AI-evaluated quizzes & assignments with instant feedback." />
          <Feature icon={<Users />} title="Project Management" description="Collaborate on team projects and directly push code to GitHub." />
          <Feature icon={<Code />} title="Code Sandbox" description="Compile, debug & practice programming in a multi-language environment." />
          <Feature icon={<FileText />} title="Summarizer" description="Convert long notes into crisp, study-friendly summaries." />
          <Feature icon={<Sparkles />} title="AI Assistant" description="Clear academic doubts instantly with real-time responses." />
          <Feature icon={<Code />} title="Code Helper" description="Fix bugs and optimize code with AI-based guidance." />
        </motion.div>
      </section>

      {/* Common Features */}
      <section className="py-24 px-6">
        <motion.h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Common Features
        </motion.h2>
        <motion.ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          <li className="flex items-center gap-3"><Sparkles className="w-6 h-6 text-indigo-600"/> AI Tools – Smarter tools for smarter minds.</li>
          <li className="flex items-center gap-3"><MessageSquare className="w-6 h-6 text-indigo-600"/> Discussion Forums – Reimagine your academic community.</li>
          <li className="flex items-center gap-3"><Bot className="w-6 h-6 text-indigo-600"/> ChatAssist – Your interactive academic chatbot.</li>
          <li className="flex items-center gap-3"><LayoutDashboard className="w-6 h-6 text-indigo-600"/> ResolveIt – 24×7 technical support.</li>
          <li className="flex items-center gap-3"><MessageSquare className="w-6 h-6 text-indigo-600"/> Messaging System – Real-time communication within the platform.</li>
          <li className="flex items-center gap-3"><Calendar className="w-6 h-6 text-indigo-600"/> Smart Calendar – Sync all classes, events, deadlines & exams in one smart view.</li>
        </motion.ul>
      </section>
    </motion.div>
  );
}
