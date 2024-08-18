const Data={
    "menu": [
      {
        "label": "Dashboard",
        "icon": "dashboard-icon",
        "link": "/dashboard",
        "subMenu": []
      },
      {
        "label": "Users",
        "icon": "users-icon",
        "link": "/users",
        "subMenu": [
          {
            "label": "User List",
            "link": "/users/list",
            "subMenu": []
          },
          {
            "label": "User Roles",
            "link": "/users/roles",
            "subMenu": [
              {
                "label": "Admin",
                "link": "/users/roles/admin",
                "subMenu": []
              },
              {
                "label": "Editor",
                "link": "/users/roles/editor",
                "subMenu": []
              },
              {
                "label": "Viewer",
                "link": "/users/roles/viewer",
                "subMenu": []
              }
            ]
          }
        ]
      },
      {
        "label": "Settings",
        "icon": "settings-icon",
        "link": "/settings",
        "subMenu": [
          {
            "label": "Profile",
            "link": "/settings/profile",
            "subMenu": []
          },
          {
            "label": "Preferences",
            "link": "/settings/preferences",
            "subMenu": []
          }
        ]
      },
      {
        "label": "Reports",
        "icon": "reports-icon",
        "link": "/reports",
        "subMenu": [
          {
            "label": "Sales",
            "link": "/reports/sales",
            "subMenu": []
          },
          {
            "label": "Analytics",
            "link": "/reports/analytics",
            "subMenu": [
              {
                "label": "Traffic",
                "link": "/reports/analytics/traffic",
                "subMenu": []
              },
              {
                "label": "Engagement",
                "link": "/reports/analytics/engagement",
                "subMenu": []
              }
            ]
          }
        ]
      },
      {
        "label": "Support",
        "icon": "support-icon",
        "link": "/support",
        "subMenu": []
      }
    ]
  }
  
  export default Data;