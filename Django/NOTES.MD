# DJANGO

- Rapid devolpment
- Database Flexibilty
- Built-in admin interface
- Extensive ecosystem

## MVT - Model - View - Template

### Model
Represents the data layer
Defines database structure using Python classes
Handles data creation, retrieval, update, deletion (CRUD)

## View

Acts as the business logic layer
Receives HTTP requests and returns HTTP responses
Fetches data from Models and sends it to Templates

## Template

Represents the presentation layer
Contains HTML with Django Template Language (DTL)
Displays data sent by Views

## DOCUMENTATION
https://docs.djangoproject.com/en/6.0/

------------------------------------------

After setting up our venv,

This is the **default Django project structure**. 
---

## 1️⃣ `__init__.py`

**What it is:**
Marks this folder as a **Python package**.

**Why it exists:**
So Python/Django knows this directory contains Python modules.

**What you usually do here:**
➡️ **Nothing** (leave it empty).

---

## 2️⃣ `settings.py`

**What it is:**
The **brain/config file** of your Django project.

**What it controls:**

* Installed apps
* Database configuration
* Middleware
* Templates
* Static files
* Security settings
* Debug mode

**Examples inside it:**

```python
INSTALLED_APPS = []
DATABASES = {}
DEBUG = True
```

📌 If Django behaves differently, **check `settings.py` first**.

---

## 3️⃣ `urls.py`

**What it is:**
The **URL routing system**.

**What it does:**
Maps a **URL → view (function/class)**.

**Example:**

```python
urlpatterns = [
    path('login/', views.login),
    path('home/', views.home),
]
```

📌 When a user hits a URL, Django checks this file to decide **what code to run**.

---

## 4️⃣ `asgi.py`

**What it is:**
Entry point for **ASGI servers** (asynchronous).

**Used for:**

* WebSockets
* Real-time apps (chat, notifications)
* Async Django features

**You use it when:**

* Deploying with **Daphne / Uvicorn**
* Building real-time applications

📌 Beginners usually **don’t touch this**.

---

## 5️⃣ `wsgi.py`

**What it is:**
Entry point for **WSGI servers** (synchronous).

**Used for:**

* Traditional web requests
* Production deployment (Gunicorn, uWSGI)

📌 If your site is hosted normally → **WSGI is used**.

---

## 6️⃣ `manage.py`

**What it is:**
The **command-line tool** for Django.

**What you use it for:**

```bash
python manage.py runserver
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

📌 Every Django project interaction starts here.

---

## 🧠 One-line memory trick 

| File          | Purpose                       |
| ------------- | ----------------------------- |
| `__init__.py` | Makes folder a Python package |
| `settings.py` | Project configuration         |
| `urls.py`     | URL → View mapping            |
| `asgi.py`     | Async server entry point      |
| `wsgi.py`     | Sync server entry point       |
| `manage.py`   | Django command runner         |

---

