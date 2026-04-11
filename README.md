# 🚀 Workshop Booking UI/UX Enhancement (FOSSEE Task)

> A mobile-first redesign focused on improving usability, accessibility, and overall user experience for students.

---

## 📌 Project Overview

This project enhances the UI/UX of the original FOSSEE Workshop Booking System.

The goal was to improve:

- 📱 Mobile responsiveness  
- 🎨 Modern UI design  
- ⚡ Performance  
- ♿ Accessibility  
- 🔍 User experience & navigation  

The original system was functional but minimal. This redesign makes it more intuitive, visually appealing, and mobile-friendly.

---

## 🛠 Tech Stack

- HTML5 / CSS3  
- Bootstrap / Custom CSS  
- Django (existing backend)  

---

## 🚀 Key Improvements

### 🎨 UI Enhancements
- Modern layout with gradients and glassmorphism
- Improved typography and spacing
- Better color contrast for readability

### 📱 Mobile-First Design
- Fully responsive layouts
- Optimized forms for small screens
- Improved touch interactions

### 📊 Dashboard Improvements
- Structured cards for better hierarchy
- Improved data visibility
- Cleaner layout for better usability

### 🧭 UX Improvements
- Simplified navigation
- Clear call-to-action buttons
- Improved form design and validation

---

## 🖥 Desktop UI Preview

|  |  |  |
|--|--|--|
| <img src="Desktop_ss/changePass.png" width="200"/> | <img src="Desktop_ss/CheckEmail.png" width="200"/> | <img src="Desktop_ss/Cordi_dashbord.png" width="200"/> |
| <img src="Desktop_ss/create_workshop.png" width="200"/> | <img src="Desktop_ss/CreateNewAcc1.png" width="200"/> | <img src="Desktop_ss/CreateNewAcc2.png" width="200"/> |
| <img src="Desktop_ss/CreateNewAcc3.png" width="200"/> | <img src="Desktop_ss/Cstats1.png" width="200"/> | <img src="Desktop_ss/Cstats2.png" width="200"/> |
| <img src="Desktop_ss/Cstats3.png" width="200"/> | <img src="Desktop_ss/Edit_profile.png" width="200"/> | <img src="Desktop_ss/ForgotPass.png" width="200"/> |
| <img src="Desktop_ss/Inst_dashbord.png" width="200"/> | <img src="Desktop_ss/Inst_dashbord2.png" width="200"/> | <img src="Desktop_ss/LoginPage.png" width="200"/> |
| <img src="Desktop_ss/LogOut.png" width="200"/> | <img src="Desktop_ss/PasswordRest_done.png" width="200"/> | <img src="Desktop_ss/profile_inst.png" width="200"/> |
| <img src="Desktop_ss/Profile.png" width="200"/> | <img src="Desktop_ss/propose_cord.png" width="200"/> | <img src="Desktop_ss/Types_inst.png" width="200"/> |
| <img src="Desktop_ss/Types.png" width="200"/> | <img src="Desktop_ss/View_workshops.png" width="200"/> | <img src="Desktop_ss/view_edit_type.png" width="200"/> |

---

## 📱 Mobile UI Preview

|  |  |  |
|--|--|--|
| <img src="Phone_ss/Change_pass.png" width="180"/> | <img src="Phone_ss/cord_dashbord.png" width="180"/> | <img src="Phone_ss/cord_dashbord1.png" width="180"/> |
| <img src="Phone_ss/cord_profile.png" width="180"/> | <img src="Phone_ss/cord_view_workshop_types.png" width="180"/> | <img src="Phone_ss/create_ac1.png" width="180"/> |
| <img src="Phone_ss/create_ac2.png" width="180"/> | <img src="Phone_ss/create_workshop.png" width="180"/> | <img src="Phone_ss/Edit_profile.png" width="180"/> |
| <img src="Phone_ss/forgot_pass.png" width="180"/> | <img src="Phone_ss/Inst_dashbord.png" width="180"/> | <img src="Phone_ss/Inst_dashbord1.png" width="180"/> |
| <img src="Phone_ss/Inst_edit.png" width="180"/> | <img src="Phone_ss/Inst_profile.png" width="180"/> | <img src="Phone_ss/Inst_view_edit.png" width="180"/> |
| <img src="Phone_ss/Logged_out.png" width="180"/> | <img src="Phone_ss/login.png" width="180"/> | <img src="Phone_ss/navbar.png" width="180"/> |
| <img src="Phone_ss/passwordreset.png" width="180"/> | <img src="Phone_ss/Propose_cord.png" width="180"/> | <img src="Phone_ss/Stats1.png" width="180"/> |
| <img src="Phone_ss/Stats2.png" width="180"/> | <img src="Phone_ss/Stats3.png" width="180"/> | <img src="Phone_ss/Stats4.png" width="180"/> |

---

## 🧠 Design Decisions (Reasoning)

### 1. What design principles guided your improvements?

- **Visual Hierarchy** → Highlighted key actions and data  
- **Consistency** → Uniform design across all pages  
- **Minimalism** → Removed clutter  
- **Accessibility** → Improved contrast and readability  

---

### 2. How did you ensure responsiveness?

- Mobile-first approach  
- Used flexbox and responsive layouts  
- Avoided fixed widths  
- Tested across screen sizes  

---

### 3. Trade-offs between design and performance

- Avoided heavy animations  
- Used lightweight styling  
- Limited external dependencies  

---

### 4. Most challenging part

**Challenge:**  
Updating UI without breaking Django backend logic  

**Solution:**  
- Carefully modified templates  
- Preserved backend structure  
- Tested each component after changes  

---

## ⚙️ Setup Instructions

### 1. Clone repository
```bash
git clone https://github.com/your-username/workshop_booking.git
cd workshop_booking