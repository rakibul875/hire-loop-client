"use client";

import { createJobs } from "@/lib/action/jobs";
import { Briefcase, Calendar } from "@gravity-ui/icons";
import {
  Form,
  TextField,
  Input,
  TextArea,
  Label,
  FieldError,
  Button,
  Select,
  ListBox,
  DateField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JobFrom({ recruiterCompany }) {
  console.log(recruiterCompany);
  const router = useRouter();

  //   const [mockCompany] = useState({
  //     name: "Acme Corp (Auto-filled)",
  //     id: "company_123",
  //     isApproved: true,
  //   });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!mockCompany.isApproved) {
    //   alert("Your company profile must be approved before you can post jobs.");
    //   return;
    // }

    const formData = new FormData(e.currentTarget);
    const jobData = Object.fromEntries(formData);

    const payload = {
      ...jobData,
      companyId: recruiterCompany._id,
      companyName: recruiterCompany.name,
      companyLogo: recruiterCompany.logo,
      status: "active",
      isPubliclyVisible: true,
    };

    const res = await createJobs(payload);
    if (res.insertedId) {
      alert("Job Add successful");
      router.push("/dashboard/recruiter/jobs");
    }
  };

  return (
    <div className="min-h-screen p-1 lg:p-6">
      <div className="mx-auto max-w-3xl space-y-5">
        <div className="overflow-hidden rounded-2xl">
          <div className="border-b border-zinc-800 pb-6 mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Post a New Job
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
              Fill out the details below to publish your open position.
            </p>

            {/* Company verification status panel */}
            <div className="mt-4 inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-400">
              <Briefcase size={14} className="text-zinc-500" />
              Posting as:{" "}
              <span className="font-semibold text-zinc-300">
                {recruiterCompany.name}
              </span>
              <span className={`${recruiterCompany.status === "Approved" ? "text-emerald-500 font-medium bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/50" : "text-yellow-500 font-medium bg-yellow-950/30 px-1.5 py-0.5 rounded border border-yellow-900/50"}`}>
                {recruiterCompany.status}
              </span>
            </div>
          </div>
          {
            recruiterCompany.status==="Pending"&&<div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4">
              <h1>Waiting For Approval</h1>
            </div>
          }
          {recruiterCompany.status === "Approved" && (
            <Form onSubmit={handleSubmit} className="space-y-8 p-8">
              <section className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                <h2 className="text-lg font-medium text-white">
                  Job Information
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Basic information about the position.
                </p>

                <div className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-2">
                  <TextField name="companyName" isRequired>
                    <Label className="text-zinc-300">Company Name</Label>
                    <Input
                      placeholder="Name Of Company"
                      variant="bordered"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl"
                    />
                    <FieldError />
                  </TextField>

                  <TextField name="title" isRequired>
                    <Label className="text-zinc-300">Job Title</Label>
                    <Input
                      placeholder="Senior Frontend Developer"
                      variant="bordered"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl"
                    />
                    <FieldError />
                  </TextField>

                  <Select name="category" isRequired>
                    <Label className="text-zinc-300">Job Category</Label>
                    <Select.Trigger className="bg-zinc-900 border border-zinc-800 rounded-lg">
                      <Select.Value placeholder="Select category" />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="development">
                          Development
                        </ListBox.Item>
                        <ListBox.Item id="design">Design</ListBox.Item>
                        <ListBox.Item id="marketing">Marketing</ListBox.Item>
                        <ListBox.Item id="product">Product</ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <Select name="jobType" isRequired>
                    <Label className="text-zinc-300">Job Type</Label>
                    <Select.Trigger className="bg-zinc-900 border border-zinc-800 rounded-lg">
                      <Select.Value placeholder="Select job type" />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="full-time">Full Time</ListBox.Item>
                        <ListBox.Item id="part-time">Part Time</ListBox.Item>
                        <ListBox.Item id="contract">Contract</ListBox.Item>
                        <ListBox.Item id="internship">Internship</ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <TextField name="salary" isRequired>
                    <Label className="text-zinc-300">Salary</Label>
                    <Input
                      placeholder="5000"
                      type="number"
                      variant="bordered"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl"
                    />
                  </TextField>

                  <Select name="currency" isRequired>
                    <Label className="text-zinc-300">Currency</Label>
                    <Select.Trigger className="bg-zinc-900 border border-zinc-800 rounded-lg">
                      <Select.Value placeholder="Currency" />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="usd">USD</ListBox.Item>
                        <ListBox.Item id="bdt">BDT</ListBox.Item>
                        <ListBox.Item id="eur">EUR</ListBox.Item>
                        <ListBox.Item id="gbp">GBP</ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <TextField name="location" isRequired>
                    <Label className="text-zinc-300">Location</Label>
                    <Input
                      placeholder="City, Country"
                      type="text"
                      variant="bordered"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl"
                    />
                  </TextField>

                  <DateField className="w-[256px]" name="date">
                    <Label className="text-zinc-300">Date</Label>
                    <DateField.Group>
                      <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                      </DateField.Input>
                      <DateField.Suffix>
                        <Calendar className="size-4 text-muted" />
                      </DateField.Suffix>
                    </DateField.Group>
                  </DateField>
                </div>

                <div className="mt-6">
                  <h2 className="text-lg font-medium text-white">
                    Job Description
                  </h2>

                  <div className="mt-6 space-y-5">
                    <TextField name="responsibilities">
                      <Label className="text-zinc-300">Responsibilities</Label>
                      <TextArea
                        rows={6}
                        placeholder="Describe responsibilities..."
                        variant="bordered"
                        className="bg-zinc-900 border border-zinc-800 rounded-xl"
                      />
                      <FieldError />
                    </TextField>

                    <TextField name="requirements">
                      <Label className="text-zinc-300">Requirements</Label>
                      <TextArea
                        rows={6}
                        placeholder="Required skills and experience..."
                        variant="bordered"
                        className="bg-zinc-900 border border-zinc-800 rounded-xl"
                      />
                      <FieldError />
                    </TextField>

                    <TextField name="benefits">
                      <Label className="text-zinc-300">Benefits</Label>
                      <TextArea
                        rows={4}
                        placeholder="Health insurance, bonuses, remote allowance..."
                        variant="bordered"
                        className="bg-zinc-900 border border-zinc-800 rounded-xl"
                      />
                    </TextField>
                  </div>
                </div>

                <div className="flex justify-end mt-3 gap-3 py-6 px-3">
                  <Button variant="bordered">Cancel</Button>
                  <Button color="primary" type="submit">
                    Publish Job
                  </Button>
                </div>
              </section>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}
