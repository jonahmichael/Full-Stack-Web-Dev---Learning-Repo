These files are created **inside a Django app** (like your `asiaTour` app).

---

## 1️⃣ `__init__.py`

**Purpose:**
Marks this folder as a **Python package**.

**You usually:**
➡️ Leave it empty.

---

## 2️⃣ `admin.py`

**Purpose:**
Registers models so they appear in the **Django Admin Panel**.

**Why it matters:**
Without this, your database tables won’t show in `/admin`.

**Example:**

```python
from django.contrib import admin
from .models import Place

admin.site.register(Place)
```

📌 Used when you want **easy CRUD via admin UI**.

---

## 3️⃣ `apps.py`

**Purpose:**
App configuration file.

**What it contains:**
App name and metadata.

**Example:**

```python
from django.apps import AppConfig

class AsiatourConfig(AppConfig):
    name = 'asiaTour'
```

📌 Django uses this internally.
📌 You rarely change it (except signals).

---

## 4️⃣ `models.py`

**Purpose:**
Defines **database structure**.

**What you write here:**
Tables → Columns → Relationships.

**Example:**

```python
from django.db import models

class Place(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
```

📌 Every model = one database table.

---

## 5️⃣ `tests.py`

**Purpose:**
Write **unit tests** for your app.

**Used for:**
Checking if views, models, logic work correctly.

**Example:**

```python
from django.test import TestCase

class PlaceTest(TestCase):
    def test_example(self):
        self.assertEqual(1 + 1, 2)
```

📌 Important for production & interviews.

---

## 6️⃣ `views.py`

**Purpose:**
Handles **request → response logic**.

**What happens here:**

* Takes user request
* Processes data
* Returns HTML / JSON / response

**Example:**

```python
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Asia Tour")
```

📌 URLs point to views.

---

## 🧠 Easy memory table (exam gold)

| File          | Role               |
| ------------- | ------------------ |
| `__init__.py` | Marks package      |
| `admin.py`    | Admin panel config |
| `apps.py`     | App configuration  |
| `models.py`   | Database tables    |
| `tests.py`    | Testing code       |
| `views.py`    | Request handling   |

---

## 🔄 How these files work together (important concept)

```
User → URL → View → Model → View → Response → Browser
```

* `urls.py` → points to `views.py`
* `views.py` → uses `models.py`
* `admin.py` → exposes `models.py`
* `tests.py` → tests everything

---
