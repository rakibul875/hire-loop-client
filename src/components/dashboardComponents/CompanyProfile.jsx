'use client';

import React, { useState } from 'react';
import { 
    Form, 
    Input, 
    Select, 
    ListBox, 
    Button,
    Label,
    TextField,
    FieldError,
    TextArea
} from '@heroui/react';
import { ArrowUpToLine, Globe, Factory, ArrowRight, Pencil, ChevronDown } from '@gravity-ui/icons';
import { createCompany } from '@/lib/action/company';

// ড্রপডাউন পপওভার এবং লিস্ট আইটেমের জন্য স্টাইল
const popoverClasses = "bg-zinc-950 border border-zinc-800 rounded-lg p-1 shadow-xl min-w-[200px]";
const listItemClasses = "text-zinc-300 px-3 py-2 rounded-md cursor-pointer hover:bg-zinc-900 hover:text-white outline-none data-[focused=true]:bg-zinc-900";

export default function CompanyProfile() {
    // ১. ফ্রন্টএন্ড স্টেট ম্যানেজমেন্ট
    const [company, setCompany] = useState(null); 
    const [isEditing, setIsEditing] = useState(false);
    const [logoUrl, setLogoUrl] = useState('');

    // ২. লোগো প্রিভিউ হ্যান্ডলার
    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert("File size exceeds 5MB limit");
            return;
        }

        const fakeUrl = URL.createObjectURL(file);
        setLogoUrl(fakeUrl);
    };

    // ৩. ফর্ম সাবমিট হ্যান্ডলার
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const companyName = formData.get('companyName');
        const websiteUrl = formData.get('websiteUrl');
        const industry = formData.get('industry');
        const location = formData.get('location');
        const employeeCount = formData.get('employeeCount');
        const description = formData.get('description');

        const formattedWebsite = websiteUrl?.startsWith('http') ? websiteUrl : `https://${websiteUrl}`;

        const newCompany={
            _id: "fake-id-123",
            name: companyName,
            websiteUrl: formattedWebsite,
            industry: industry || 'technology',
            location,
            employeeCount: employeeCount || '1-10',
            description,
            logo: logoUrl,
            status: company ? company.status : 'Pending'
        }
        setCompany(newCompany);
        const payload= await createCompany(newCompany)
        if(payload.insertedId){
            alert('New Company Post Successful')
        }
        setIsEditing(false);
    };
    
   

    // --- ভিউ ১: কোনো কোম্পানি রেজিস্টার্ড না থাকলে (Empty State) ---
    if (!company && !isEditing) {
        return (
            <div className="max-w-2xl mx-auto my-12 bg-zinc-950 border border-zinc-900 rounded-xl p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-zinc-900/50 rounded-full flex items-center justify-center mx-auto border border-zinc-800">
                    <Factory size={24} className="text-zinc-500" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-zinc-200">No Company Registered Yet</h2>
                    <p className="text-sm text-zinc-500 max-w-sm mx-auto">
                        To start creating job posts and tracking pipelines, please register your company profile first.
                    </p>
                </div>
                <Button 
                    onPress={() => setIsEditing(true)}
                    className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 h-11"
                >
                    Register Company <ArrowRight size={16} className="ml-1" />
                </Button>
            </div>
        );
    }

    // --- ভিউ ২: কোম্পানির প্রোফাইল ড্যাশবোর্ড (Presentation View) ---
    if (company && !isEditing) {
        const getStatusStyles = (status) => {
            switch(status) {
                case 'Approved': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
                case 'Rejected': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
                default: return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
            }
        };

        return (
            <div className="max-w-4xl mx-auto my-8 bg-zinc-950 border border-zinc-900 rounded-xl p-8 space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-900 pb-6">
                    <div className="flex items-center gap-4">
                        {company.logo ? (
                            <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-xl object-contain bg-zinc-900 p-2 border border-zinc-800" />
                        ) : (
                            <div className="w-16 h-16 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                                <Factory size={24} className="text-zinc-600" />
                            </div>
                        )}
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-bold text-white">{company.name}</h1>
                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${getStatusStyles(company.status)}`}>
                                    {company.status}
                                </span>
                            </div>
                            <a href={company.websiteUrl} target="_blank" rel="noreferrer" className="text-sm text-zinc-400 hover:underline flex items-center gap-1 mt-1">
                                <Globe size={14} className="text-zinc-500" /> {company.websiteUrl}
                            </a>
                        </div>
                    </div>
                    <Button 
                        onPress={() => setIsEditing(true)}
                        className="border border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 rounded-lg px-4 font-medium h-10 flex items-center gap-2"
                    >
                        <Pencil size={14} /> Edit Profile
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-zinc-900/30 border border-zinc-900 p-4 rounded-lg">
                        <span className="text-xs text-zinc-500 uppercase font-semibold block">Industry Category</span>
                        <span className="text-zinc-300 font-medium mt-1 block capitalize">{company.industry}</span>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-900 p-4 rounded-lg">
                        <span className="text-xs text-zinc-500 uppercase font-semibold block">Location</span>
                        <span className="text-zinc-300 font-medium mt-1 block">{company.location}</span>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-900 p-4 rounded-lg">
                        <span className="text-xs text-zinc-500 uppercase font-semibold block">Company Scale</span>
                        <span className="text-zinc-300 font-medium mt-1 block">{company.employeeCount} employees</span>
                    </div>
                </div>

                {company.description && (
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">About our Vision & Culture</h3>
                        <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap bg-zinc-900/20 border border-zinc-900/60 p-4 rounded-xl">
                            {company.description}
                        </p>
                    </div>
                )}
            </div>
        );
    }

    // --- ভিউ ৩: রেজিস্ট্রেশন এবং এডিট ফর্ম (Form View) ---
    return (
        <div className="max-w-3xl mx-auto my-8 bg-zinc-950 p-8 border border-zinc-900 rounded-xl">
            <Form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-zinc-900 pb-3 mb-2">
                    <h2 className="text-xl font-semibold text-zinc-200">
                        {company ? 'Update Company Profile' : 'Register New Company'}
                    </h2>
                    <p className="text-xs text-zinc-500 mt-1">Enter your business details below.</p>
                </div>

                {/* ROW 1: Company Name + Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 💡 defaultValue প্যারেন্টে দেওয়ায় ভ্যালু কনফ্লিক্ট ওয়ার্নিং ফিক্সড */}
                    <TextField name="companyName" defaultValue={company?.name || ''} isRequired>
                        <Label className="text-zinc-400 font-medium text-sm">Company Name</Label>
                        <Input 
                            placeholder="e.g. Acme Corp" 
                            className="bg-zinc-900/50 border border-zinc-800 text-white rounded-lg h-11 w-full px-3 mt-1 outline-none focus:border-zinc-700"
                        />
                        <FieldError className="text-xs text-rose-500 mt-1" />
                    </TextField>

                    <div className="flex flex-col gap-1.5">
                        <Select name="industry" defaultValue={company?.industry || 'technology'} isRequired>
                            <Label className="text-zinc-400 font-medium text-sm">Industry / Category</Label>
                            <Select.Trigger className="bg-zinc-900/50 border border-zinc-800 text-white rounded-lg h-11 px-3 flex items-center justify-between outline-none mt-1">
                                <Select.Value placeholder="Select industry" />
                                <Select.Indicator><ChevronDown size={16} className="text-zinc-500" /></Select.Indicator>
                            </Select.Trigger>
                            <Select.Popover className={popoverClasses}>
                                <ListBox className="outline-none">
                                    <ListBox.Item id="technology" className={listItemClasses}>Technology</ListBox.Item>
                                    <ListBox.Item id="design" className={listItemClasses}>Design</ListBox.Item>
                                    <ListBox.Item id="marketing" className={listItemClasses}>Marketing</ListBox.Item>
                                    <ListBox.Item id="finance" className={listItemClasses}>Finance</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                </div>

                {/* ROW 2: Website URL + Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextField name="websiteUrl" defaultValue={company?.websiteUrl?.replace('https://', '').replace('http://', '') || ''} isRequired>
                        <Label className="text-zinc-400 font-medium text-sm">Website URL</Label>
                        {/* 💡 startContent এর জায়গায় কন্টেইনার দিয়ে কাস্টম প্রিফিক্স ফিক্সড */}
                        <div className="flex items-center bg-zinc-900/50 border border-zinc-800 text-white rounded-lg h-11 mt-1 overflow-hidden focus-within:border-zinc-700">
                            <span className="text-zinc-600 text-sm border-r border-zinc-800 px-3 select-none bg-zinc-900/20">https://</span>
                            <Input 
                                placeholder="www.company.com" 
                                className="bg-transparent text-white w-full h-full px-3 outline-none"
                            />
                        </div>
                        <FieldError className="text-xs text-rose-500 mt-1" />
                    </TextField>

                    <TextField name="location" defaultValue={company?.location || ''} isRequired>
                        <Label className="text-zinc-400 font-medium text-sm">Location</Label>
                        <Input 
                            placeholder="City, Country" 
                            className="bg-zinc-900/50 border border-zinc-800 text-white rounded-lg h-11 w-full px-3 mt-1 outline-none focus:border-zinc-700"
                        />
                        <FieldError className="text-xs text-rose-500 mt-1" />
                    </TextField>
                </div>

                {/* ROW 3: Employee Count + Company Logo Upload */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div className="flex flex-col gap-1.5">
                        <Select name="employeeCount" defaultValue={company?.employeeCount || '1-10'} isRequired>
                            <Label className="text-zinc-400 font-medium text-sm">Employee Count Range</Label>
                            <Select.Trigger className="bg-zinc-900/50 border border-zinc-800 text-white rounded-lg h-11 px-3 flex items-center justify-between outline-none mt-1">
                                <Select.Value placeholder="Select range" />
                                <Select.Indicator><ChevronDown size={16} className="text-zinc-500" /></Select.Indicator>
                            </Select.Trigger>
                            <Select.Popover className={popoverClasses}>
                                <ListBox className="outline-none">
                                    <ListBox.Item id="1-10" className={listItemClasses}>1-10 employees</ListBox.Item>
                                    <ListBox.Item id="11-50" className={listItemClasses}>11-50 employees</ListBox.Item>
                                    <ListBox.Item id="51-200" className={listItemClasses}>51-200 employees</ListBox.Item>
                                    <ListBox.Item id="201+" className={listItemClasses}>201+ employees</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className="text-zinc-400 font-medium text-sm">Company Logo</span>
                        <div className="flex items-center gap-4 mt-1">
                            <label className="w-14 h-14 border border-dashed border-zinc-700 hover:border-zinc-500 bg-zinc-900/40 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors group relative overflow-hidden">
                                <input 
                                    type="file" 
                                    accept="image/png, image/jpeg" 
                                    onChange={handleLogoUpload} 
                                    className="hidden" 
                                />
                                {logoUrl ? (
                                    <img src={logoUrl} alt="Logo Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <ArrowUpToLine size={18} className="text-zinc-400 group-hover:text-zinc-200" />
                                )}
                            </label>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-zinc-300">Upload image</span>
                                <span className="text-xs text-zinc-600 mt-0.5">PNG, JPG up to 5MB</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROW 4: Brief Description */}
                {/* 💡 TextArea-এর ভ্যালু কনফ্লিক্ট দূর করতে defaultValue প্যারেন্টে নেওয়া হয়েছে এবং className ঠিক করা হয়েছে */}
                <TextField name="description" defaultValue={company?.description || ''} isRequired>
                    <Label className="text-zinc-400 font-medium text-sm">Brief Description</Label>
                    <TextArea
                        placeholder="Tell us about your company's mission and culture..."
                        rows={4}
                        className="bg-zinc-900/50 border border-zinc-800 text-white rounded-lg p-3 w-full mt-1 outline-none focus:border-zinc-700 resize-none"
                    />
                    <FieldError className="text-xs text-rose-500 mt-1" />
                </TextField>

                {/* অ্যাকশন বাটনসমূহ */}
                <div className="flex justify-end gap-3 pt-4 border-t border-zinc-900">
                    {company && (
                        <Button
                            type="button"
                            onPress={() => setIsEditing(false)}
                            className="border border-zinc-800 bg-transparent text-zinc-400 hover:bg-zinc-900 rounded-lg px-5 h-11"
                        >
                            Cancel
                        </Button>
                    )}
                    <Button
                        type="submit"
                        className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 h-11"
                    >
                        {company ? 'Save Updates' : 'Register Company'}
                    </Button>
                </div>
            </Form>
        </div>
    );
}