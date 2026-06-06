import {
  Bars,
  Bell,
  Envelope,
  Gear,
  House,
  LayoutSideContentRight,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function NavigationDrawer() {
  const navItems = [
    { icon: House, label: "Home", href:'/dashboard/recruiter' },
    { icon: Magnifier, label: "Search",href:'/dashboard/search' },
    { icon: Bell, label: "Jobs",href:'/dashboard/recruiter/jobs' },
    { icon: Envelope, label: "Company",href:'/dashboard/recruiter/company' },
    { icon: Person, label: "Post New Jobs",href:'/dashboard/recruiter/jobs/new' },
    { icon: Gear, label: "Settings",href:'/dashboard/recruiter' },
  ];

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
          <Button variant="secondary" className='rounded-md'>
            <LayoutSideContentRight/>
            Sidebar
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading>Navigation</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>
                  {navigation}
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}
