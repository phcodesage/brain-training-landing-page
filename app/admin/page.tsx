"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, XCircle, Clock, LogOut, Eye, X, EyeOff, Home, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Payment {
  _id: string;
  name: string;
  phone: string;
  reference: string;
  screenshot: string;
  courseName: string;
  amount: string;
  status: "pending" | "verified" | "rejected";
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const [payments, setPayments] = useState<Payment[]>([]);
  const [fetching, setFetching] = useState(true);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    setFetching(true);
    try {
      const res = await fetch("/api/admin/payments");
      if (res.ok) {
        const data = await res.json();
        setPayments(data.payments);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        fetchPayments();
      } else {
        const data = await res.json();
        setLoginError(data.error || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      setLoginError("An error occurred connecting to the server.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: "verified" | "rejected") => {
    try {
      const res = await fetch(`/api/admin/payments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setPayments((prev) =>
          prev.map((p) => (p._id === id ? { ...p, status } : p))
        );
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      alert("Error updating status");
    }
  };

  const handleLogout = () => {
    document.cookie = "admin_token=; Max-Age=0; path=/";
    setIsAuthenticated(false);
    setPayments([]);
  };

  if (fetching && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#05264d]/20 border-t-[#05264d] rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50/50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

        <div className="w-full max-w-md relative z-10">
          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#05264d] mb-6 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-[#05264d]/20 group-hover:bg-blue-50 transition-all">
              <Home className="w-4 h-4" />
            </div>
            Back to Home
          </Link>

          <div className="bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
            {/* Decorative background element inside card */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-50/50 blur-3xl pointer-events-none" />
            
            <div className="text-center mb-8 relative">
              <div className="inline-flex items-center justify-center bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <Image
                  src="/exceed-logo.png"
                  alt="Exceed Logo"
                  width={140}
                  height={50}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#05264d] tracking-tight">Admin Area</h1>
              <p className="text-gray-500 text-sm mt-2">Secure access to payment management</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5 relative">
              {loginError && (
                <div className="p-4 bg-red-50/80 text-red-600 text-sm rounded-2xl border border-red-100 text-center animate-in fade-in slide-in-from-top-2">
                  {loginError}
                </div>
              )}
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">
                  Username
                </label>
                <input
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-[#05264d] focus:ring-4 focus:ring-[#05264d]/10 outline-none transition-all text-gray-900"
                />
              </div>
              
              <div className="space-y-1.5 relative">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-5 py-3.5 pr-12 rounded-2xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-[#05264d] focus:ring-4 focus:ring-[#05264d]/10 outline-none transition-all text-gray-900"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05264d]/20"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full py-4 mt-2 rounded-2xl bg-[#05264d] text-white font-bold text-lg shadow-lg shadow-[#05264d]/20 hover:bg-[#063366] hover:shadow-xl hover:shadow-[#05264d]/30 transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Sign In <ChevronRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block p-2 bg-gray-50 rounded-xl border border-gray-100">
              <Image src="/exceed-logo.png" alt="Exceed" width={80} height={30} className="h-6 w-auto object-contain" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-none">Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Manage Zelle Payments</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl text-sm font-medium text-gray-600 transition-colors shadow-sm flex-1 sm:flex-none"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl text-sm font-medium transition-colors shadow-sm flex-1 sm:flex-none"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            Recent Submissions
            <span className="bg-blue-100 text-[#05264d] text-xs px-2.5 py-0.5 rounded-full font-bold">
              {payments.length}
            </span>
          </h2>
          <button
            onClick={fetchPayments}
            disabled={fetching}
            className="text-sm text-[#05264d] font-medium hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <RefreshIcon fetching={fetching} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>

        {fetching && payments.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center">
             <div className="w-8 h-8 border-4 border-[#05264d]/20 border-t-[#05264d] rounded-full animate-spin mb-4" />
             <p className="text-gray-500 font-medium">Loading payments...</p>
          </div>
        ) : payments.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-100">
              <CheckCircle2 className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No payments found</h3>
            <p className="text-gray-500">There are currently no Zelle payment submissions to review.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {payments.map((payment) => (
              <div
                key={payment._id}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group relative"
              >
                {/* Status indicator bar */}
                <div className={`h-1.5 w-full absolute top-0 left-0 ${
                  payment.status === 'verified' ? 'bg-green-500' : 
                  payment.status === 'rejected' ? 'bg-red-500' : 'bg-yellow-400'
                }`} />

                <div className="p-6 pb-5 flex-1 mt-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          payment.status === "verified"
                            ? "bg-green-100 text-green-700"
                            : payment.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {payment.status === "verified" && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {payment.status === "rejected" && <XCircle className="w-3.5 h-3.5" />}
                        {payment.status === "pending" && <Clock className="w-3.5 h-3.5" />}
                        {payment.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">{payment.amount}</div>
                      <div className="text-[10px] text-gray-400 font-medium uppercase mt-0.5">
                        {new Date(payment.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">{payment.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
                         {payment.phone}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Course</p>
                      <p className="text-sm font-medium text-gray-900">{payment.courseName}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Ref No.</p>
                        <code className="text-xs font-bold text-[#05264d] bg-blue-50 px-2 py-1 rounded-lg truncate block max-w-[140px] sm:max-w-full">
                          {payment.reference}
                        </code>
                      </div>
                      <button
                        onClick={() => setSelectedScreenshot(payment.screenshot)}
                        className="shrink-0 flex items-center gap-1.5 px-3 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl text-xs font-semibold transition-colors"
                      >
                        <Eye className="w-4 h-4" /> View Image
                      </button>
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                {payment.status === "pending" && (
                  <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3">
                    <button
                      onClick={() => handleStatusChange(payment._id, "verified")}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 transition-colors shadow-sm shadow-green-600/20 active:scale-[0.98]"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Verify
                    </button>
                    <button
                      onClick={() => handleStatusChange(payment._id, "rejected")}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-100 text-red-700 rounded-xl text-sm font-bold hover:bg-red-200 transition-colors active:scale-[0.98]"
                    >
                      <XCircle className="w-4 h-4" />
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Screenshot Modal */}
      {selectedScreenshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white z-10 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg">Payment Screenshot</h3>
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex justify-center bg-gray-50/50" data-lenis-prevent="true">
              <img
                src={selectedScreenshot}
                alt="Payment Screenshot"
                className="max-w-full h-auto rounded-xl shadow-md border border-gray-200"
              />
            </div>
            <div className="p-5 bg-white border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setSelectedScreenshot(null)}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-sm transition-colors"
                >
                  Close
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RefreshIcon({ fetching }: { fetching: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${fetching ? "animate-spin" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}
