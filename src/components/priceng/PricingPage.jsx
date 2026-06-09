"use client";

import React, { useState } from "react";
import { Card, Button, Accordion, AccordionItem } from "@heroui/react";

const PricingPage = () => {
  // Toggle state: 'seekers' or 'recruiters'
  const [userType, setUserType] = useState("seekers");

  // Data from image_5c8428.png
  const seekerPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      description: "Perfect for getting started and exploring opportunities.",
      features: [
        "Browse & save up to 10 jobs",
        "Apply to up to 3 jobs per month",
        "Basic profile setup",
        "Standard email alerts",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Accelerate your job hunt with active tracking tools.",
      features: [
        "Apply to up to 30 jobs per month",
        "Unlimited saved jobs",
        "Advanced application tracking",
        "Detailed salary insights",
      ],
      buttonText: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Premium",
      price: "$39",
      period: "/month",
      description: "Ultimate visibility to land your dream role faster.",
      features: [
        "Everything in Pro",
        "Unlimited job applications",
        "Profile boost to top recruiters",
        "Early access to new job postings",
        "Priority customer support",
      ],
      buttonText: "Go Premium",
      popular: false,
    },
  ];

  const recruiterPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      description: "Great for a company's first year of hiring.",
      features: [
        "Up to 3 active job posts",
        "Basic applicant management",
        "Standard listing visibility",
      ],
      buttonText: "Start Posting",
      popular: false,
    },
    {
      name: "Growth",
      price: "$49",
      period: "/month",
      description: "Scale your recruitment with tracking and metrics.",
      features: [
        "Up to 10 active job posts",
        "Full applicant tracking system (ATS)",
        "Basic recruitment analytics",
        "Standard email support",
      ],
      buttonText: "Choose Growth",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "Power tools for structured corporate HR teams.",
      features: [
        "Up to 50 active job posts",
        "Advanced analytics dashboard",
        "Featured job listings boost",
        "Team collaboration modules",
        "Custom company branding",
        "Priority 24/7 support",
      ],
      buttonText: "Contact Enterprise",
      popular: false,
    },
  ];

  const activePlans = userType === "seekers" ? seekerPlans : recruiterPlans;

  return (
    <div className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black transition-colors duration-300">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-xs font-bold tracking-wider uppercase text-primary px-3 py-1 bg-primary-100/60 dark:bg-primary-950/40 rounded-full">
          Pricing Plans
        </span>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-zinc-50 mt-4 mb-4">
          Ready to scale your next move?
        </h1>
        <p className="text-base sm:text-lg text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
          Choose the perfect plan tailored for your career growth or recruitment
          cycle.
        </p>

        {/* Animated Toggle Switch */}
        <div className="flex justify-center mt-10">
          <div className="relative flex p-1 bg-slate-200/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl border border-slate-300/30 dark:border-zinc-700/30">
            <button
              onClick={() => setUserType("seekers")}
              className={`relative px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 z-10 ${
                userType === "seekers"
                  ? "text-white dark:text-zinc-950"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              For Job Seekers
            </button>
            <button
              onClick={() => setUserType("recruiters")}
              className={`relative px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 z-10 ${
                userType === "recruiters"
                  ? "text-white dark:text-zinc-950"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              For Recruiters
            </button>

            {/* Background Slider Indicator */}
            <div
              className={`absolute top-1 bottom-1 left-1 bg-gradient-to-r from-primary to-primary-600 dark:from-primary-400 dark:to-primary-500 rounded-lg transition-all duration-300 ease-out shadow-md`}
              style={{
                width: "calc(50% - 4px)",
                transform:
                  userType === "seekers"
                    ? "translateX(0%)"
                    : "translateX(100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
        {activePlans.map((plan, index) => (
          <Card
            key={index}
            className={`relative flex flex-col justify-between p-8 border bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              plan.popular
                ? "border-primary shadow-primary/10 dark:shadow-none scale-100 md:scale-[1.03] z-20"
                : "border-white/20 dark:border-zinc-800/60"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-[10px] font-extrabold tracking-widest uppercase text-white bg-primary px-3 py-1 rounded-full shadow-sm">
                Most Popular
              </span>
            )}

            <div>
              {/* Card Header */}
              <Card.Header className="p-0 flex flex-col items-start gap-1 bg-transparent border-none">
                <Card.Title className="text-xl font-bold text-slate-800 dark:text-zinc-100">
                  {plan.name}
                </Card.Title>
                <Card.Description className="text-xs text-slate-400 dark:text-zinc-500 mt-1 min-h-[32px]">
                  {plan.description}
                </Card.Description>
              </Card.Header>

              {/* Price Presentation */}
              <div className="my-6 flex items-baseline text-slate-900 dark:text-zinc-50">
                <span className="text-4xl sm:text-5xl font-black tracking-tight">
                  {plan.price}
                </span>
                <span className="text-sm font-semibold text-slate-400 dark:text-zinc-500 ml-1">
                  {plan.period}
                </span>
              </div>

              <hr className="border-slate-100 dark:border-zinc-800 my-6" />

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Button */}
            <Card.Content className="p-0 bg-transparent">
              <form action="/api/checkout_sessions" method="POST">
                <section>
                  <Button
                    type="submit"
                    role="link"
                    color={plan.popular ? "primary" : "default"}
                    variant={plan.popular ? "solid" : "flat"}
                    size="lg"
                    radius="xl"
                    className={`w-full font-bold text-sm tracking-wide transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-primary-600 shadow-lg shadow-primary/20 dark:shadow-none"
                        : "bg-slate-100 dark:bg-zinc-800/50 hover:bg-slate-200 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                  {/* <button type="submit" role="link">
                    Checkout
                  </button> */}
                </section>
              </form>

              {/* <Button
                color={plan.popular ? "primary" : "default"}
                variant={plan.popular ? "solid" : "flat"}
                size="lg"
                radius="xl"
              
              >
                {plan.buttonText}
              </Button> */}
            </Card.Content>
          </Card>
        ))}
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-3xl mx-auto border-t border-slate-200 dark:border-zinc-800/80 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-zinc-500 mt-2">
            Everything you need to know about plans, cancellation, and payments.
          </p>
        </div>

        <Accordion
          variant="splitted"
          className="gap-3 p-0"
          itemClasses={{
            base: "bg-white/60 dark:bg-zinc-900/40 border border-white/10 dark:border-zinc-800/40 rounded-xl px-4 shadow-sm",
            title: "text-sm font-semibold text-slate-800 dark:text-zinc-200",
            trigger: "py-4",
            content:
              "text-xs sm:text-sm text-slate-500 dark:text-zinc-400 pb-4 leading-relaxed",
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Can I switch plans anytime?"
            title="Can I switch plans anytime?"
          >
            Yes, absolutely! You can upgrade or downgrade your plan at any point
            directly from your billing dashboard. If you upgrade, the new
            features will be unlocked instantly.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="How do cancellations work?"
            title="How do cancellations work?"
          >
            You can cancel your subscription whenever you want. Once cancelled,
            you will retain access to your premium tier features until the end
            of your current billing cycle.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="What payment methods do you accept?"
            title="What payment methods do you accept?"
          >
            We support all major international credit/debit cards (Visa,
            MasterCard, American Express) along with automated local payment
            gateways depending on your operational location.
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Do you offer refunds?"
            title="Do you offer refunds?"
          >
            Since we offer a fully functional Free Plan to test Heire Loop, we
            generally do not issue refunds for active subscription months.
            However, if you experience a technical billing issue, please reach
            out to support.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PricingPage;
