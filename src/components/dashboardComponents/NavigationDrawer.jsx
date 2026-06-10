import { getUserSession } from "@/lib/core/session";
import {
  Bars,
  Bell,
  Bookmark,
  CreditCard,
  Envelope,
  FileText,
  Gear,
  House,
  LayoutSideContentRight,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Briefcase, Building, LayoutGrid, Users } from "lucide-react";
import Link from "next/link";

export async function NavigationDrawer() {
  const user= await getUserSession()
  const recruiterNavLinks = [
    { icon: House, label: "Home", href: "/dashboard/recruiter" },
    { icon: Magnifier, label: "Search", href: "/dashboard/search" },
    { icon: Bell, label: "Jobs", href: "/dashboard/recruiter/jobs" },
    { icon: Envelope, label: "Company", href: "/dashboard/recruiter/company" },
    {
      icon: Person,
      label: "Post New Jobs",
      href: "/dashboard/recruiter/jobs/new",
    },
    { icon: Gear, label: "Settings", href: "/dashboard/recruiter" },
  ];
  const seekerNavLinks = [
    { icon: LayoutGrid, label: "Dashboard", href: "/dashboard/seeker" },
    { icon: Magnifier, label: "Jobs", href: "/dashboard/seeker/jobs" },
    { icon: Bookmark, label: "Saved Jobs", href: "/dashboard/seeker/saved-jobs" },
    { icon: FileText, label: "Applications", href: "/dashboard/seeker/applications" },
    { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
    { icon: Gear, label: "Settings", href: "/dashboard/settings" },
  ];
  const adminNavLinks=[
  { icon: LayoutGrid, label: "Dashboard", href: '/admin/dashboard' },
  { icon: Users, label: "Users", href: '/admin/users' },
  { icon: Building, label: "Companies", href: '/admin/companies' },
  { icon: Briefcase, label: "Jobs", href: '/admin/jobs' },
  { icon: CreditCard, label: "Payments", href: '/admin/payments' },
  { icon: Gear, label: "Settings", href: '/admin/settings' },
]

  const navLinkMap={
    seeker:seekerNavLinks,
    recruiter:recruiterNavLinks,
    admin:adminNavLinks
  }

  const navItems =navLinkMap[user?.role||'seeker'];

  const navigation = (
    <>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
            type="button"
          >
            <item.icon className="size-5 text-muted" />
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border border-default p-4 lg:block">
        {navigation}
      </aside>
      <div className="lg:hidden">
        <Drawer>
          <Button variant="secondary" className="rounded-md">
            <LayoutSideContentRight />
            Sidebar
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading>Navigation</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>{navigation}</Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}
