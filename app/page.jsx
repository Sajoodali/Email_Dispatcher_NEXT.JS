"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Loader2,
  Mail,
  Send,
  Type,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import SkeletonLoader from "@/components/SkeletonLoader";
import Image from "next/image";

const formSchema = z.object({
  to: z.string().email("Please enter a valid recipient email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message body is required"),
});

export default function EmailDispatcher() {
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Email dispatched successfully!", {
          description: `Sent to ${data.to}`,
        });
        reset();
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      toast.error("Dispatch Failed", {
        description: error.message,
      });
    } finally {
      setIsSending(false);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center justify-center p-4 md:p-8">
        <SkeletonLoader />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative z-10">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/GC-Logo.jpg"
                alt="Globium Clouds"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                Email Dispatcher
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </h1>
              <p className="text-cyan-100 mt-1 font-medium text-sm">
                Powered by Globium Clouds
              </p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          {/* Recipient Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Mail size={16} className="text-cyan-600" />
              Recipient Email
            </label>
            <div className="relative group">
              <input
                {...register("to")}
                type="email"
                placeholder="client@example.com"
                className={cn(
                  "w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white outline-none transition-all duration-200",
                  "focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100",
                  "group-hover:border-slate-300",
                  errors.to &&
                    "border-red-400 focus:border-red-500 focus:ring-red-100"
                )}
              />
            </div>
            {errors.to && (
              <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                {errors.to.message}
              </p>
            )}
          </div>

          {/* Subject Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Type size={16} className="text-cyan-600" />
              Subject Line
            </label>
            <input
              {...register("subject")}
              type="text"
              placeholder="Important Update Regarding Your Project"
              className={cn(
                "w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white outline-none transition-all duration-200",
                "focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100",
                errors.subject &&
                  "border-red-400 focus:border-red-500 focus:ring-red-100"
              )}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs font-medium mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <MessageSquare size={16} className="text-cyan-600" />
              Message Body
            </label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Type your message here..."
              className={cn(
                "w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white outline-none transition-all duration-200 resize-none",
                "focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100",
                errors.message &&
                  "border-red-400 focus:border-red-500 focus:ring-red-100"
              )}
            />
            {errors.message && (
              <p className="text-red-500 text-xs font-medium mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={cn(
              "w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-3",
              "active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100",
              "hover:shadow-xl hover:shadow-cyan-500/40"
            )}
          >
            {isSending ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Send size={20} />
            )}
            {isSending ? "Sending Email..." : "Send Email"}
          </button>

          {/* Trust Footer */}
          <div className="pt-4 flex items-center justify-center gap-2 text-slate-400 text-xs font-medium border-t border-slate-100">
            <ShieldCheck size={14} className="text-cyan-600" />
            <span className="text-slate-600">Secure Email Dispatch System</span>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
