"use client";

import React, { useState } from "react";
import { Button, Card, TextField, Label, Input, TextArea } from "@heroui/react";
import { handelApplication } from "@/lib/action/application";

const JobApplyForm = ({ job, applicant }) => {
  const jobTitle = job?.title || "Position";
  const companyName = job?.companyName || "the Company";
  const defaultName = applicant?.name || "";
  const defaultEmail = applicant?.email || "";

  const [formData, setFormData] = useState({
    name: defaultName,
    email: defaultEmail,
    resumeLink: "",
    portfolioLink: "",
    expectedSalary: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const applicationData = {
      jobId: job?._id,
      jobTitle:job?.title,
      ...formData,
    };
    const res= await handelApplication(applicationData)
    if(res.insertedId){
        alert("Application Submit SuccessFul")
    }
  };

  // Shared Tailwind design tokens
  const inputStyles =
    "w-full bg-slate-100/70 dark:bg-zinc-800/60 hover:bg-slate-200/50 dark:hover:bg-zinc-800/80 focus:bg-white dark:focus:bg-zinc-950 border border-transparent focus:border-primary px-4 py-2.5 rounded-xl transition-all duration-200 outline-none text-sm text-slate-800 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500";
  const labelStyles =
    "text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-1.5 inline-block ml-1";

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <Card className="w-full max-w-2xl border border-white/20 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-primary/5">
        {/* Header Section */}
        <Card.Header className="flex flex-col items-start gap-1 p-6 sm:p-8 border-b border-gray-100 dark:border-zinc-800 bg-gradient-to-r from-primary-50/30 to-transparent dark:from-primary-950/10">
          <span className="text-xs font-bold tracking-wider uppercase text-primary px-2.5 py-1 bg-primary-100/50 dark:bg-primary-950/50 rounded-full mb-2">
            Heire Loop Careers
          </span>
          <Card.Title className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
            Apply for {jobTitle}
          </Card.Title>
          <Card.Description className="text-sm font-medium text-slate-500 dark:text-zinc-400">
            at {companyName}
          </Card.Description>
        </Card.Header>

        {/* Form Body */}
        <Card.Content className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Responsive Grid System */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <TextField isRequired className="flex flex-col">
                <Label className={labelStyles}>Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className={inputStyles}
                  value={formData.name}
                  onChange={handleChange}
                />
              </TextField>

              {/* Email Address */}
              <TextField isRequired className="flex flex-col">
                <Label className={labelStyles}>Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className={inputStyles}
                  value={formData.email}
                  onChange={handleChange}
                />
              </TextField>

              {/* Portfolio Link */}
              <TextField className="flex flex-col">
                <Label className={labelStyles}>
                  Portfolio Link{" "}
                  <span className="text-slate-400 dark:text-zinc-500 font-normal lowercase">
                    (optional)
                  </span>
                </Label>
                <Input
                  type="url"
                  name="portfolioLink"
                  placeholder="https://yourportfolio.com"
                  className={inputStyles}
                  value={formData.portfolioLink}
                  onChange={handleChange}
                />
              </TextField>

              {/* Expected Salary */}
              <TextField className="flex flex-col">
                <Label className={labelStyles}>
                  Expected Salary{" "}
                  <span className="text-slate-400 dark:text-zinc-500 font-normal lowercase">
                    (optional)
                  </span>
                </Label>
                <Input
                  type="text"
                  name="expectedSalary"
                  placeholder="e.g., $75,000 / year"
                  className={inputStyles}
                  value={formData.expectedSalary}
                  onChange={handleChange}
                />
              </TextField>

              {/* Resume Link - Full width on desktop */}
              <TextField isRequired className="flex flex-col md:col-span-2">
                <Label className={labelStyles}>Resume Link</Label>
                <Input
                  type="url"
                  name="resumeLink"
                  placeholder="https://drive.google.com/your-resume"
                  className={inputStyles}
                  value={formData.resumeLink}
                  onChange={handleChange}
                />
                <p className="text-[11px] text-slate-400 dark:text-zinc-500 ml-1 mt-1">
                  Provide a public cloud link (Google Drive, Notion, Dropbox).
                </p>
              </TextField>

              {/* Message / Cover Letter - Full width on desktop */}
              <TextField className="flex flex-col md:col-span-2">
                <Label className={labelStyles}>Message to Hiring Manager</Label>
                <TextArea
                  name="message"
                  placeholder="Introduce yourself and explain why you're a perfect match for Heire Loop..."
                  rows={4}
                  className={inputStyles}
                  value={formData.message}
                  onChange={handleChange}
                />
              </TextField>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              color="primary"
              size="lg"
              radius="lg"
              className="font-bold text-sm tracking-wide mt-2 bg-gradient-to-r from-primary to-primary-600 hover:opacity-95 shadow-lg shadow-primary/20 dark:shadow-none transition-transform active:scale-[0.98]"
              fullWidth
            >
              Submit Application
            </Button>
          </form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default JobApplyForm;
