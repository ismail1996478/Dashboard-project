import React, { useState } from "react";
import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";

export const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }
    setExpandedItems(newExpanded);
  };

  const menuItems = [
    {
      id: "dashbord",
      icon: LayoutDashboard,
      label: "Dashboard",
      active: true,
      badge: "new",
    },
    {
      id: "analytics",
      icon: BarChart3,
      label: "Analytics",
      submenu: [
        { id: "overview", label: "Overview" },
        { id: "reports", label: "Reports" },
        { id: "insights", label: "Insights" },
      ],
    },
    {
      id: "users",
      icon: Users,
      label: "Users",
      count: "2.4k",
      submenu: [
        { id: "all-user", label: "All Users" },
        { id: "roles", label: "Roles & Permissions" },
        { id: "activity", label: "User Activity" },
      ],
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      label: "E-commerce",
      submenu: [
        { id: "products", label: "Products" },
        { id: "orders", label: "Orders" },
        { id: "customers", label: "Customers" },
      ],
    },
    {
      id: "inventory",
      icon: Package,
      label: "Inventory",
      count: 847,
    },
    {
      id: "transactions",
      icon: CreditCard,
      label: "Transactions",
    },
    {
      id: "message",
      icon: MessageSquare,
      label: "Message",
      badge: 12,
    },
    {
      id: "calendar",
      icon: Calendar,
      label: "Calendar",
    },
    {
      id: "reports",
      icon: FileText,
      label: "Reports",
    },
    {
      id: "settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-500 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-r-slate-200/50 dark:border-r-slate-700/50 flex flex-col relative z-10`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-r-slate-200/50 dark:border-r-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex justify-center items-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => {
                if (item.submenu) {
                  toggleExpanded(item.id);
                } else {
                  onPageChange(item.id);
                }
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                currentPage === item.id || item.active
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5" />

                {!collapsed && (
                  <>
                    <span className="font-medium ml-2">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.count && (
                      <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </>
                )}
              </div>

              {!collapsed && item.submenu && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    expandedItems.has(item.id) ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* Sub Menus */}
            {!collapsed && item.submenu && expandedItems.has(item.id) && (
              <div className="ml-8 mt-2 space-y-1 transition-all duration-300 ease-in-out">
                {item.submenu.map((subitem) => (
                  <button
                    key={subitem.id}
                    onClick={() => onPageChange(subitem.id)}
                    className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800/50 dark:hover:text-slate-200 rounded-lg transition-all"
                  >
                    {subitem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src="/image.png"
              alt="User"
              className="h-10 w-10 rounded-full ring-blue-500"
            />
            <div className="min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                  Ismail Hossen
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
