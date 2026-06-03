// "use client";

// import {
//   Form,
//   Fieldset,
//   TextField,
//   Input,
//   TextArea,
//   Select,
//   ListBox,
//   Label,
//   Description,
//   FieldError,
//   Button,
//   Switch,
// } from "@heroui/react";

// export default function NewJobPage() {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const jobData = {
//       title: formData.get("title"),
//       category: formData.get("category"),
//       jobType: formData.get("jobType"),
//       salaryMin: formData.get("salaryMin"),
//       salaryMax: formData.get("salaryMax"),
//       currency: formData.get("currency"),
//       city: formData.get("city"),
//       country: formData.get("country"),
//       deadline: formData.get("deadline"),
//       responsibilities: formData.get("responsibilities"),
//       requirements: formData.get("requirements"),
//       benefits: formData.get("benefits"),
//       remote: formData.get("remote") === "on",

//       // backend generated
//       status: "active",
//       visibility: "public",
//     };

//     console.log(jobData);
//   };

//   return (
//     <div className="mx-auto max-w-6xl p-6">
//       <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">
//         {/* Header */}
//         <div className="border-b border-white/10 px-8 py-6">
//           <h1 className="text-2xl font-bold text-white">
//             Post New Job
//           </h1>

//           <p className="mt-2 text-sm text-zinc-400">
//             Create and publish a new job opening.
//           </p>
//         </div>

//         <Form
//           onSubmit={handleSubmit}
//           className="space-y-8 p-8"
//         >
//           {/* ========================= */}
//           {/* JOB INFORMATION */}
//           {/* ========================= */}

//           <Fieldset
//             legend="Job Information"
//             description="Basic information about the role."
//             className="space-y-6"
//           >
//             <div className="grid gap-5 md:grid-cols-2">
//               {/* Job Title */}
//               <TextField name="title" isRequired>
//                 <Label>Job Title</Label>

//                 <Input placeholder="Senior Frontend Developer" />

//                 <FieldError />
//               </TextField>

//               {/* Category */}
//               <Select name="category">
//                 <Label>Job Category</Label>

//                 <Select.Trigger>
//                   <Select.Value placeholder="Select category" />
//                   <Select.Indicator />
//                 </Select.Trigger>

//                 <Select.Popover>
//                   <ListBox>
//                     <ListBox.Item id="development">
//                       Development
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="design">
//                       Design
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="marketing">
//                       Marketing
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="product">
//                       Product
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                   </ListBox>
//                 </Select.Popover>
//               </Select>
//             </div>

//             <div className="grid gap-5 md:grid-cols-2">
//               {/* Job Type */}
//               <Select name="jobType">
//                 <Label>Job Type</Label>

//                 <Select.Trigger>
//                   <Select.Value placeholder="Select job type" />
//                   <Select.Indicator />
//                 </Select.Trigger>

//                 <Select.Popover>
//                   <ListBox>
//                     <ListBox.Item id="full-time">
//                       Full Time
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="part-time">
//                       Part Time
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="contract">
//                       Contract
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="internship">
//                       Internship
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                   </ListBox>
//                 </Select.Popover>
//               </Select>

//               {/* Deadline */}
//               <TextField name="deadline">
//                 <Label>Application Deadline</Label>

//                 <Input type="date" />

//                 <FieldError />
//               </TextField>
//             </div>

//             {/* Salary */}
//             <div className="grid gap-5 md:grid-cols-3">
//               <TextField name="salaryMin">
//                 <Label>Minimum Salary</Label>

//                 <Input
//                   type="number"
//                   placeholder="1000"
//                 />
//               </TextField>

//               <TextField name="salaryMax">
//                 <Label>Maximum Salary</Label>

//                 <Input
//                   type="number"
//                   placeholder="5000"
//                 />
//               </TextField>

//               <Select name="currency">
//                 <Label>Currency</Label>

//                 <Select.Trigger>
//                   <Select.Value placeholder="Currency" />
//                   <Select.Indicator />
//                 </Select.Trigger>

//                 <Select.Popover>
//                   <ListBox>
//                     <ListBox.Item id="usd">
//                       USD
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="bdt">
//                       BDT
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="eur">
//                       EUR
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="gbp">
//                       GBP
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                   </ListBox>
//                 </Select.Popover>
//               </Select>
//             </div>

//             {/* Remote */}
//             <div className="rounded-2xl border border-white/10 p-5">
//               <Switch name="remote">
//                 Remote Position
//               </Switch>
//             </div>

//             {/* Location */}
//             <div className="grid gap-5 md:grid-cols-2">
//               <TextField name="city">
//                 <Label>City</Label>

//                 <Input placeholder="Dhaka" />
//               </TextField>

//               <TextField name="country">
//                 <Label>Country</Label>

//                 <Input placeholder="Bangladesh" />
//               </TextField>
//             </div>
//           </Fieldset>

//           {/* ========================= */}
//           {/* JOB DESCRIPTION */}
//           {/* ========================= */}

//           <Fieldset
//             legend="Job Description"
//             description="Detailed information about the role."
//             className="space-y-6"
//           >
//             <TextField
//               name="responsibilities"
//               isRequired
//             >
//               <Label>Responsibilities</Label>

//               <TextArea
//                 rows={6}
//                 placeholder="Describe responsibilities..."
//               />

//               <Description>
//                 Main duties and daily tasks.
//               </Description>

//               <FieldError />
//             </TextField>

//             <TextField
//               name="requirements"
//               isRequired
//             >
//               <Label>Requirements</Label>

//               <TextArea
//                 rows={6}
//                 placeholder="Required skills and experience..."
//               />

//               <FieldError />
//             </TextField>

//             <TextField name="benefits">
//               <Label>Benefits</Label>

//               <TextArea
//                 rows={4}
//                 placeholder="Health insurance, bonuses, remote allowance..."
//               />
//             </TextField>
//           </Fieldset>

//           {/* ========================= */}
//           {/* COMPANY */}
//           {/* ========================= */}

//           <Fieldset
//             legend="Company"
//             description="Automatically linked with recruiter account."
//           >
//             <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-semibold text-white">
//                     Tech Company Ltd
//                   </h3>

//                   <p className="text-sm text-zinc-400">
//                     Approved company profile
//                   </p>
//                 </div>

//                 <span className="rounded-full border border-emerald-500/30 px-3 py-1 text-xs text-emerald-400">
//                   VERIFIED
//                 </span>
//               </div>
//             </div>
//           </Fieldset>

//           {/* Footer */}
//           <div className="flex justify-end gap-4 border-t border-white/10 pt-6">
//             <Button variant="bordered">
//               Cancel
//             </Button>

//             <Button
//               color="primary"
//               type="submit"
//             >
//               Publish Job
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }


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

    const jobData = {
      title: formData.get("title"),
      category: formData.get("category"),
      jobType: formData.get("jobType"),
      salaryMin: formData.get("salaryMin"),
      salaryMax: formData.get("salaryMax"),
      currency: formData.get("currency"),
      city: formData.get("city"),
      country: formData.get("country"),
      deadline: formData.get("deadline"),
      responsibilities: formData.get("responsibilities"),
      requirements: formData.get("requirements"),
      benefits: formData.get("benefits"),
      remote: formData.get("remote") === "on",
    };

    console.log(jobData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,.4)]">

          {/* Header */}
          <div className="border-b border-zinc-800 px-8 py-6">
            <h1 className="text-2xl font-semibold text-white">
              Post New Job
            </h1>

            <p className="mt-1 text-sm text-zinc-400">
              Create and publish a new job opening.
            </p>
          </div>

          <Form
            onSubmit={handleSubmit}
            className="space-y-8 p-8"
          >
            {/* ================================================= */}
            {/* JOB INFORMATION */}
            {/* ================================================= */}

            <section className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h2 className="text-lg font-medium text-white">
                Job Information
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Basic information about the position.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <TextField name="title" isRequired>
                  <Label>Job Title</Label>

                  <Input
                    placeholder="Senior Frontend Developer"
                    classNames={{
                      inputWrapper:
                        "bg-zinc-900 border border-zinc-800",
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
                      <ListBox.Item id="development">
                        Development
                      </ListBox.Item>

                      <ListBox.Item id="design">
                        Design
                      </ListBox.Item>

                      <ListBox.Item id="marketing">
                        Marketing
                      </ListBox.Item>

                      <ListBox.Item id="product">
                        Product
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">

                <Select name="jobType">
                  <Label>Job Type</Label>

                  <Select.Trigger className="bg-zinc-900 border border-zinc-800 rounded-lg">
                    <Select.Value placeholder="Select job type" />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="full-time">
                        Full Time
                      </ListBox.Item>

                      <ListBox.Item id="part-time">
                        Part Time
                      </ListBox.Item>

                      <ListBox.Item id="contract">
                        Contract
                      </ListBox.Item>

                      <ListBox.Item id="internship">
                        Internship
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>

                <TextField name="deadline">
                  <Label>Application Deadline</Label>

                  <Input
                    type="date"
                    classNames={{
                      inputWrapper:
                        "bg-zinc-900 border border-zinc-800",
                    }}
                  />
                </TextField>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-3">

                <TextField name="salaryMin">
                  <Label>Minimum Salary</Label>

                  <Input
                    placeholder="1000"
                    type="number"
                    classNames={{
                      inputWrapper:
                        "bg-zinc-900 border border-zinc-800",
                    }}
                  />
                </TextField>

                <TextField name="salaryMax">
                  <Label>Maximum Salary</Label>

                  <Input
                    placeholder="5000"
                    type="number"
                    classNames={{
                      inputWrapper:
                        "bg-zinc-900 border border-zinc-800",
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

              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                <Switch name="remote">
                  Remote Position
                </Switch>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <TextField name="city">
                  <Label>City</Label>

                  <Input
                    placeholder="Dhaka"
                    classNames={{
                      inputWrapper:
                        "bg-zinc-900 border border-zinc-800",
                    }}
                  />
                </TextField>

                <TextField name="country">
                  <Label>Country</Label>

                  <Input
                    placeholder="Bangladesh"
                    classNames={{
                      inputWrapper:
                        "bg-zinc-900 border border-zinc-800",
                    }}
                  />
                </TextField>
              </div>
            </section>

            {/* ================================================= */}
            {/* JOB DESCRIPTION */}
            {/* ================================================= */}

            <section className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
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
                      inputWrapper:
                        "bg-zinc-900 border border-zinc-800",
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
                      inputWrapper:
                        "bg-zinc-900 border border-zinc-800",
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
                      inputWrapper:
                        "bg-zinc-900 border border-zinc-800",
                    }}
                  />
                </TextField>
              </div>
            </section>

            {/* ================================================= */}
            {/* COMPANY */}
            {/* ================================================= */}

            <section className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h2 className="text-lg font-medium text-white">
                Company
              </h2>

              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-white">
                      Tech Company Ltd
                    </h3>

                    <p className="text-sm text-zinc-400">
                      Approved company profile
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    VERIFIED
                  </span>
                </div>
              </div>
            </section>

            {/* Footer */}

            <div className="flex justify-end gap-3 border-t border-zinc-800 pt-6">
              <Button variant="bordered">
                Cancel
              </Button>

              <Button
                color="primary"
                type="submit"
              >
                Publish Job
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}