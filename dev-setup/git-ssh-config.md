# 🔐 GitHub SSH Setup (Personal Git Identity)

This guide helps you configure Git to push to this repository using your **personal GitHub account over SSH**, especially when using a shared or work machine.

---

## 📁 Repository Structure (with Developer Setup Guide Location)

```
DevHub/
├── .github/              # GitHub workflows and templates (optional)
├── src/                  # Application source code (projects, services)
├── tests/                # Unit/Integration test projects
├── README.md             # Project overview and instructions
├── LICENSE               # License (e.g., MIT or All Rights Reserved)
├── dev-setup/            # ✅ Developer setup scripts and guides (YOU ARE HERE)
│   └── git-ssh-config.md # SSH + GitHub access setup for this project
```

## 1. Generate SSH Key (if needed)

```bash
ssh-keygen -t ed25519 -C "youremail@personal.com" -f ~/.ssh/id_ed25519_github_personal
```

## 2. Add the public key to GitHub
Copy the contents of:
```bash
cat ~/.ssh/id_ed25519_github_personal.pub
```
Go to: https://github.com/settings/ssh/new
Paste it there and give it a title like Personal Laptop.

## 3. Create SSH Config Entry
Add the following to ~/.ssh/config:

```ssh
Host github.com-personal
    HostName ssh.github.com
    Port 443
    User git
    IdentityFile ~/.ssh/id_ed25519_github_personal
    IdentitiesOnly yes
```

## 4. Set the Remote URL for This Project
```bash
git remote set-url origin git@github.com-personal:vasiya99/DevHub.git
```
✅ You should now be able to push with:
```bash
git push
```