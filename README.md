# Enhancing UI/UX of Workshop Booking System (FOSSEE Task)

> A mobile-first design to improve usability and user experience of the booking portal for students.

## About the Project

Enhancement of the existing UI/UX of the original FOSSEE Workshop Booking System.

Objective:

* 📱 Responsive design
* 🎨 Modern and aesthetic UI
* ⚡ Performance optimizations
* ♿ Accessible
* 🔍 Enhanced user experience and user interface

The original booking system was functional but barebones. The aim here was to make the design more visually pleasing and modern as well as enhance its usability and accessibility.


## Technology Used

* HTML5/CSS3
* Bootstrap/Custom CSS
* Django (backend was unchanged)


## Enhancements Made

### UI Design Enhancements

* Modern design with gradient effects and Glassmorphism
* Font styles have been improved
* Color Contrast has been enhanced

### Mobile-First Approach

* All pages are fully responsive
* Forms are optimized for mobile screens
* Touch friendly interfaces

### Dashboard Design Enhancements

* Cards used to give structure to dashboard
* Data visualization has been improved

### UX Enhancements

* Navigation has been improved
* Clear Call-To-Actions provided
* Form design has been improved

## 🖥 Desktop UI Preview

|  |  |  |  |
|--|--|--|--|
| <img src="Desktop_ss/changePass.png" width="180"/> | <img src="Desktop_ss/CheckEmail.png" width="180"/> | <img src="Desktop_ss/Cordi_dashbord.png" width="180"/> | <img src="Desktop_ss/create_workshop.png" width="180"/> |
| <img src="Desktop_ss/CreateNewAcc1.png" width="180"/> | <img src="Desktop_ss/CreateNewAcc2.png" width="180"/> | <img src="Desktop_ss/CreateNewAcc3.png" width="180"/> | <img src="Desktop_ss/Cstats1.png" width="180"/> |
| <img src="Desktop_ss/Cstats2.png" width="180"/> | <img src="Desktop_ss/Cstats3.png" width="180"/> | <img src="Desktop_ss/Edit_profile.png" width="180"/> | <img src="Desktop_ss/ForgotPass.png" width="180"/> |
| <img src="Desktop_ss/Inst_dashbord.png" width="180"/> | <img src="Desktop_ss/Inst_dashbord2.png" width="180"/> | <img src="Desktop_ss/LoginPage.png" width="180"/> | <img src="Desktop_ss/LogOut.png" width="180"/> |
| <img src="Desktop_ss/PasswordRest_done.png" width="180"/> | <img src="Desktop_ss/profile_inst.png" width="180"/> | <img src="Desktop_ss/Profile.png" width="180"/> | <img src="Desktop_ss/propose_cord.png" width="180"/> |
| <img src="Desktop_ss/Types_inst.png" width="180"/> | <img src="Desktop_ss/Types.png" width="180"/> | <img src="Desktop_ss/View_workshops.png" width="180"/> |  |

---

## 📱 Mobile UI Preview

|  |  |  |  |
|--|--|--|--|
| <img src="Phone_ss/Change_pass.png" width="150"/> | <img src="Phone_ss/cord_dashbord.png" width="150"/> | <img src="Phone_ss/cord_dashbord1.png" width="150"/> | <img src="Phone_ss/cord_profile.png" width="150"/> |
| <img src="Phone_ss/cord_view_workshop_types.png" width="150"/> | <img src="Phone_ss/create_ac1.png" width="150"/> | <img src="Phone_ss/create_ac2.png" width="150"/> | <img src="Phone_ss/create_workshop.png" width="150"/> |
| <img src="Phone_ss/Edit_profile.png" width="150"/> | <img src="Phone_ss/forgot_pass.png" width="150"/> | <img src="Phone_ss/Inst_dashbord.png" width="150"/> | <img src="Phone_ss/Inst_dashbord1.png" width="150"/> |
| <img src="Phone_ss/Inst_edit.png" width="150"/> | <img src="Phone_ss/Inst_profile.png" width="150"/> | <img src="Phone_ss/Inst_view_edit.png" width="150"/> | <img src="Phone_ss/Logged_out.png" width="150"/> |
| <img src="Phone_ss/login.png" width="150"/> | <img src="Phone_ss/navbar.png" width="150"/> | <img src="Phone_ss/passwordreset.png" width="150"/> | <img src="Phone_ss/Propose_cord.png" width="150"/> |
| <img src="Phone_ss/Stats1.png" width="150"/> | <img src="Phone_ss/Stats2.png" width="150"/> | <img src="Phone_ss/Stats3.png" width="150"/> | <img src="Phone_ss/Stats4.png" width="150"/> |

---


---

## 👥 User Roles & Account Setup

This system supports two types of users:

### 👨‍🏫 Instructor
- Can **accept workshops**
- Can **edit workshop types**
- Can **update workshop details**
- Has higher privileges in the system

### 👨‍💼 Coordinator
- Can **propose workshops**
- Can **manage their own workshops**
- Cannot accept workshops

---

## ⚡ Quick Account Setup (Without Email Verification)

Since email verification is disabled for testing, users can be created directly using Django shell.

### 🔹 Step 1: Open shell

```bash
python manage.py shell




from django.contrib.auth.models import User, Group
from workshop_app.models import Profile

user, created = User.objects.get_or_create(
    username='instructor_user',
    defaults={'email': 'instructor@gmail.com'}
)

if created:
    user.set_password('1234')
    user.save()

profile, _ = Profile.objects.get_or_create(user=user)
profile.is_email_verified = True
profile.save()

group, _ = Group.objects.get_or_create(name='instructor')
user.groups.add(group)

print("Instructor created successfully ✅")





from django.contrib.auth.models import User
from workshop_app.models import Profile

user, created = User.objects.get_or_create(
    username='coordinator_user',
    defaults={'email': 'coordinator@gmail.com'}
)

if created:
    user.set_password('1234')
    user.save()

profile, _ = Profile.objects.get_or_create(user=user)
profile.is_email_verified = True
profile.save()

print("Coordinator created successfully ✅")





## Design Decisions (Reasoning)

### 1. Which design concepts did you consider during your design changes?

* Visual hierarchy
* Consistency
* Minimalism
* Accessibility

---

### 2. Responsiveness

* Mobile first philosophy
* Flexbox grid layouts
* No fixed width elements

---

### 3. Compromise

No excessive animations
Lightweight interface

---

### 4. Problem faced

In implementing the improvements for the Django-based online booking platform, there were many problems arising from attempts to merge the backend capabilities with the enhanced interface. Compatibility between the old Django template forms and the new elements proved to be difficult, since any changes to the HTML structure would break functionality. Properly linking and serving the static content like CSS stylesheets, JavaScript files, and images was also problematic, especially when it came to inter-page consistency. There was also the problem of enhancing the frontend without compromising important functionality like authorization processes, booking operations, and data validation mechanisms, which involved significant troubleshooting efforts. Consistency of responsiveness was another challenge, since while some layouts worked fine on desktop computers, they needed additional work to look good on mobile devices.

## ⚙️ Setup Instructions

```bash
git clone https://github.com/your-username/workshop_booking.git
cd workshop_booking
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
