"use client";

import {
  Form,
  TextField,
  Input,
  TextArea,
  Label,
  FieldError,
  Button,
  Switch,
  Select,
  ListBox,
} from "@heroui/react";

export default function NewJobPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const jobData = Object.fromEntries(formData);

    console.log(jobData);
  };

  return (
    <div className="min-h-screen p-1 lg:p-6">
      <div className="mx-auto max-w-3xl space-y-5">
        <div className="overflow-hidden rounded-2xl">
          <div className="">
            <h1 className="text-2xl font-semibold text-white">Post New Job</h1>

            <p className="mt-1 text-sm text-zinc-400">
              Create and publish a new job opening.
            </p>
          </div>

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
                  <Label>Company Name</Label>

                  <Input
                    placeholder="Name Of Company"
                    classNames={{
                      inputWrapper: "bg-zinc-900 border border-zinc-800",
                    }}
                  />

                  <FieldError />
                </TextField>
                <TextField name="title" isRequired>
                  <Label>Job Title</Label>

                  <Input
                    placeholder="Senior Frontend Developer"
                    classNames={{
                      inputWrapper: "bg-zinc-900 border border-zinc-800",
                    }}
                  />

                  <FieldError />
                </TextField>

                <Select name="category">
                  <Label>Job Category</Label>

                  <Select.Trigger className="bg-zinc-900 border border-zinc-800 rounded-lg">
                    <Select.Value placeholder="Select category" />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="development">Development</ListBox.Item>

                      <ListBox.Item id="design">Design</ListBox.Item>

                      <ListBox.Item id="marketing">Marketing</ListBox.Item>

                      <ListBox.Item id="product">Product</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
                <Select name="jobType">
                  <Label>Job Type</Label>

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
                <TextField name="salary">
                  <Label>Salary</Label>

                  <Input
                    placeholder="5000"
                    type="number"
                    classNames={{
                      inputWrapper: "bg-zinc-900 border border-zinc-800",
                    }}
                  />
                </TextField>
                <Select name="currency">
                  <Label>Currency</Label>

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
                <TextField name="location">
                  <Label>Location</Label>

                  <Input
                    placeholder="Cty, Country"
                    type="text"
                    classNames={{
                      inputWrapper: "bg-zinc-900 border border-zinc-800",
                    }}
                  />
                </TextField>
                <TextField name="country">
                  <Label>Country</Label>

                  <Input
                    placeholder="Bangladesh"
                    classNames={{
                      inputWrapper: "bg-zinc-900 border border-zinc-800",
                    }}
                  />
                </TextField>
              </div>
              <div className="mt-2">
                <h2 className="text-lg font-medium text-white">
                  Job Description
                </h2>

                <div className="mt-6 space-y-5">
                  <TextField name="responsibilities">
                    <Label>Responsibilities</Label>

                    <TextArea
                      rows={6}
                      placeholder="Describe responsibilities..."
                      classNames={{
                        inputWrapper: "bg-zinc-900 border border-zinc-800",
                      }}
                    />

                    <FieldError />
                  </TextField>

                  <TextField name="requirements">
                    <Label>Requirements</Label>

                    <TextArea
                      rows={6}
                      placeholder="Required skills and experience..."
                      classNames={{
                        inputWrapper: "bg-zinc-900 border border-zinc-800",
                      }}
                    />

                    <FieldError />
                  </TextField>

                  <TextField name="benefits">
                    <Label>Benefits</Label>

                    <TextArea
                      rows={4}
                      placeholder="Health insurance, bonuses, remote allowance..."
                      classNames={{
                        inputWrapper: "bg-zinc-900 border border-zinc-800",
                      }}
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
        </div>
      </div>
    </div>
  );
}
