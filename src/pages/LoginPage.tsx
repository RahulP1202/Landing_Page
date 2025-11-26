import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      alert(`Login successful!\nEmail: ${email}\nRemember me: ${rememberMe}`);
      setIsLoading(false);
      setEmail('');
      setPassword('');
      setRememberMe(false);
    }, 1000);
  };

  const handleSSOLogin = (provider: string) => {
    alert(`Redirecting to ${provider} login...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] via-[#1b2838] to-[#0d1b2a] flex items-center justify-center p-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden md:block text-white space-y-8">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <img
              src="/pygenicarc_logo.jpeg"
              alt="PyGenicArc Logo"
              className="h-16 w-16 rounded-full border-2 border-[#d4af37] group-hover:scale-110 transition-transform"
            />
            <span className="text-3xl font-serif font-bold">PyGenicArc</span>
          </Link>

          <div className="space-y-6">
            <h1 className="text-5xl font-serif font-bold leading-tight">
              Welcome to Your
              <span className="block text-[#d4af37]">Digital Workspace</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Access your projects, manage deployments, and collaborate with our team in one secure platform.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Enterprise Security</h3>
                <p className="text-white/70">Two-factor authentication and encrypted data storage</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">SSO Integration</h3>
                <p className="text-white/70">Sign in with Google, Microsoft, or your email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-[#1b1f3b] mb-2">Sign In</h2>
            <p className="text-[#2c2c2c]">Enter your credentials to access your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-start gap-2">
              <span className="text-red-500">⚠</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#1b1f3b] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2c2c2c]/50" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#eadbc0] rounded-xl bg-[#fdfaf3] text-[#1b1f3b] placeholder-[#2c2c2c]/50 focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#1b1f3b] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2c2c2c]/50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border-2 border-[#eadbc0] rounded-xl bg-[#fdfaf3] text-[#1b1f3b] placeholder-[#2c2c2c]/50 focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2c2c2c]/50 hover:text-[#d4af37] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#d4af37] border-[#eadbc0] rounded focus:ring-[#d4af37]"
                />
                <span className="text-sm text-[#2c2c2c]">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => alert('Password reset link would be sent to your email')}
                className="text-sm text-[#d4af37] hover:text-[#c49d2e] font-semibold"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#d4af37] text-[#1b1f3b] font-bold rounded-xl hover:bg-[#c49d2e] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#eadbc0]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#2c2c2c]">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleSSOLogin('Google')}
              className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#eadbc0] rounded-xl hover:bg-[#fdfaf3] hover:border-[#d4af37] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-semibold text-[#1b1f3b]">Google</span>
            </button>
            <button
              type="button"
              onClick={() => handleSSOLogin('Microsoft')}
              className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#eadbc0] rounded-xl hover:bg-[#fdfaf3] hover:border-[#d4af37] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 23 23">
                <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                <path fill="#f35325" d="M1 1h10v10H1z" />
                <path fill="#81bc06" d="M12 1h10v10H12z" />
                <path fill="#05a6f0" d="M1 12h10v10H1z" />
                <path fill="#ffba08" d="M12 12h10v10H12z" />
              </svg>
              <span className="font-semibold text-[#1b1f3b]">Microsoft</span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-[#2c2c2c]">
            Don't have an account?{' '}
            <Link to="/#request-demo" className="text-[#d4af37] font-semibold hover:text-[#c49d2e]">
              Request demo access
            </Link>
          </p>

          <p className="mt-4 text-center text-sm text-[#2c2c2c]">
            <Link to="/" className="text-[#d4af37] hover:text-[#c49d2e]">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
