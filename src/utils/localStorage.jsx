
const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNo": 1,
        "title": "Fix login bug",
        "description": "Resolve issue where login button is unresponsive",
        "date": "2025-09-10",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNo": 2,
        "title": "Prepare report",
        "description": "Draft weekly progress report for manager",
        "date": "2025-09-12",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNo": 3,
        "title": "Test API endpoints",
        "description": "Perform integration testing on new employee APIs",
        "date": "2025-09-14",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Rohit",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNo": 1,
        "title": "Design dashboard",
        "description": "Create UI mockups for employee dashboard",
        "date": "2025-09-11",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNo": 2,
        "title": "Database backup",
        "description": "Run full backup of HR database",
        "date": "2025-09-12",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNo": 3,
        "title": "Bug triage",
        "description": "Go through GitHub issues and label them",
        "date": "2025-09-15",
        "category": "Management",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNo": 4,
        "title": "Fix dark mode styles",
        "description": "Resolve CSS issues in dark mode",
        "date": "2025-09-16",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskSummary": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Neha",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNo": 1,
        "title": "Client meeting",
        "description": "Discuss project requirements with client",
        "date": "2025-09-13",
        "category": "Communication",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNo": 2,
        "title": "Update dependencies",
        "description": "Upgrade npm packages to latest versions",
        "date": "2025-09-12",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNo": 3,
        "title": "Create test cases",
        "description": "Write unit tests for authentication service",
        "date": "2025-09-14",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Suresh",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNo": 1,
        "title": "Fix UI alignment",
        "description": "Adjust padding/margin in dashboard widgets",
        "date": "2025-09-10",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNo": 2,
        "title": "Write documentation",
        "description": "Document setup steps for new project",
        "date": "2025-09-11",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNo": 3,
        "title": "Fix email notifications",
        "description": "Resolve bug where emails are not being sent",
        "date": "2025-09-14",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNo": 4,
        "title": "Security audit",
        "description": "Check app for OWASP vulnerabilities",
        "date": "2025-09-18",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskSummary": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Priya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNo": 1,
        "title": "Optimize queries",
        "description": "Improve SQL performance for reports",
        "date": "2025-09-09",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNo": 2,
        "title": "Code review",
        "description": "Review PRs from teammates",
        "date": "2025-09-12",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNo": 3,
        "title": "Refactor auth logic",
        "description": "Simplify token validation flow",
        "date": "2025-09-13",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
]



const admin = [{
  "id": 1,
  "firstName": "Anjali-admin",
  "email": "admin@example.com",
  "password": "123"
}]


export  const setLocalStorage = ()=>{
     localStorage.setItem('employees' , JSON.stringify(employees))
      localStorage.setItem('admin' , JSON.stringify(admin))
}
export  const getLocalStorage = ()=>{
   const employees = JSON.parse( localStorage.getItem('employees'))
   const admin = JSON.parse( localStorage.getItem('admin'))

   return {employees , admin}
}