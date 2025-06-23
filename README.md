
# 📄 Legal Document Drafting & E-Signature Platform

A full-stack web application for drafting, editing, and signing legal documents with smart placeholders, AI clause suggestions, and e-signature integration.

---

## 🚀 Features

- 📁 Upload `.docx` legal templates with `{{ placeholders }}`
- 📚 Browse and manage templates
- 📝 Auto-generate fillable forms from template placeholders
- 💡 AI clause suggestions for improving clauses
- ✍️ Send documents for digital signature (test mode)
- ☁️ Google Drive import support
- 📄 Download filled templates as `.txt` or `.docx`

---

## 🛠️ Tech Stack

**Frontend:** React, Material UI, React Router  
**Backend:** Node.js, Express, MongoDB, Mongoose, Mammoth.js  
**Third-Party:** Google Drive Picker API, PDF.co E-signature API (test mode)  

---

## 📂 Project Structure

```
legal-doc-platform/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── importTemplates.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   └── public/
├── templates/    # Place `.docx` files for import here
└── .env
```

---

## 🧪 Local Setup

### 1. Clone the repo

```
git clone https://github.com/your-username/legal-doc-platform.git
cd legal-doc-platform
```

### 2. Install dependencies

**Backend**

```
cd backend
npm install
```

**Frontend**

```
cd ../frontend
npm install
```

### 3. Configure Environment

**Backend `.env`**

```
MONGO_URI=your_mongodb_connection_string
PDFCO_API_KEY=your_pdfco_api_key
```

---

## 📤 Importing Templates

**Option 1:** Upload `.docx` manually via the web app  
**Option 2:** Run import script (place files inside `/templates` folder)  

```
node backend/importTemplates.js
```

---

## 🧠 Placeholder Format Example

Inside `.docx` templates use:

```
This agreement is made between {{ party_name }} and {{ counterparty_name }}.
```

Placeholders within `{{ }}` will auto-generate form fields.

---

## ✅ Status

- ✅ Core template system complete
- ✅ Google Drive Import
- ✅ AI Clause Suggestions
- ✅ E-signature (test mode)
- ✅ Modern MUI frontend

---

## 📝 Future Improvements

- Production-ready signature API  
- User authentication  
- Document version history  

---

## 📧 Contact

For queries or contributions, reach out to Tanishq Suryawanshi.
