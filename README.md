# DevHub 🧩

A modern, modular .NET 8 Microservices Portfolio Project designed to demonstrate production-grade architecture, best practices, and hands-on mastery of the Nick Chapsas .NET Developer Roadmap.

---

## 🎯 Purpose

This project is built to:

- Showcase advanced .NET 8 backend development skills
- Demonstrate mastery of clean architecture, microservices, testing, CI/CD, observability, and cloud-native principles
- Serve as a comprehensive technical portfolio for job applications

---

## 🧱 Solution Structure
```
DevHub/
├── src/                          # All production code
│   └── Services/
│       └── Users/
│           ├── Users.Api/                   # ASP.NET Core Web API (entrypoint)
│           ├── Users.Core/                  # Domain models, business logic
│           ├── Users.Infrastructure/        # Data access, external integrations
├── tests/                        # All test projects
│   └── Services/
│       └── Users/
│           ├── Users.Api.UnitTests/               # Unit tests for API controllers
│           ├── Users.Api.IntegrationTests/        # Integration tests for API endpoints
│           ├── Users.Core.UnitTests/              # Unit tests for business logic
│           ├── Users.Infrastructure.IntegrationTests/  # Integration tests for DB, APIs
├── dev-setup/                   # Developer setup docs and scripts
│   └── git-ssh-config.md
├── DevHub.sln                   # Solution file
└── .gitignore                   # Standard .NET Git ignore rules
```

---

## 🧰 Tech Stack

- **.NET 8 Web API**
- **Entity Framework Core**
- **SQL Server (or PostgreSQL)**
- **Azure AD Authentication**
- **Serilog + Seq (Logging)**
- **xUnit + Moq**
- **Docker & Kubernetes**
- **.NET Aspire (Microservice Orchestration & Observability)**
- **SignalR (Real-time Communication)**
- **Polly (Resilience)**
- **Redis (Caching)**

---

## 🚀 Getting Started

# Clone the repo
git clone https://github.com/your-username/DevHub.git
cd DevHub

# Restore NuGet packages
dotnet restore

# Build the solution
dotnet build

# Run the API
dotnet run --project src/Services/Users/Users.Api


## 🧪 Running Tests
# Run all tests
dotnet test

# Run tests for a specific project
dotnet test tests/Services/Users/Users.Core.UnitTests

Each service will have its own Dockerfile. Compose setup coming soon!

## 📦 Docker Support
Each service will have its own Dockerfile. Compose setup coming soon!

## 📌 Status
✅ Skeleton Created
🔜 Next Step: Add first endpoints to Users.Api, set up Swagger, and connect EF Core with database.

🔐 [Developer Git SSH Setup Guide](dev-setup/git-ssh-config.md)

## 📄 License
MIT — feel free to fork, extend, and use it as your own technical portfolio.

