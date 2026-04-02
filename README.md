# Psychologists.Services 🧠

[🇹🇷 Türkçe Sürüm İçin Aşağı Kaydırın](#-türkçe-sürüm)

Psychologists.Services is a modern, responsive web application designed to help users find and book appointments with professional psychologists. It provides a seamless user experience for browsing psychologists, filtering by various criteria, adding favorites, and managing user authentication.

## 🚀 Live Demo

[View Live Project on Vercel](psychologists-services-black.vercel.app)

## 📖 Project Overview

This project was built as a full-stack pet project based on a specific technical requirement document and a Figma design mockup. The application consists of three main pages:

- **Home:** A welcoming landing page with a call to action.
- **Psychologists:** A comprehensive list of psychologists with advanced sorting and filtering capabilities (Alphabetical, Price, Popularity). Includes a "Load More" pagination system.
- **Favorites:** A private page for authenticated users to view their bookmarked psychologists.

## ✨ Key Features

- **User Authentication:** Secure Sign-up, Log-in, and Log-out functionality using Firebase Authentication.
- **Realtime Database:** Psychologist data is fetched asynchronously from Firebase Realtime Database.
- **Advanced Filtering:** Custom-built dropdown for sorting psychologists dynamically without unnecessary API calls.
- **State Management:** React Context API is used for global user state management.
- **Form Validation:** All modals (Registration, Log In, Appointment) are strictly validated using `react-hook-form` and `yup`.
- **Persistent Favorites:** Users can save their favorite psychologists, maintaining state across sessions via `localStorage` tied to unique user IDs.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens (320px to 1440px).
- **CSS Modules:** Scalable and collision-free styling using CSS Modules.

## 🛠️ Technologies Used

- **Frontend:** React, React Router, Vite
- **Styling:** CSS Modules
- **Backend & Auth:** Firebase (Authentication, Realtime Database)
- **Form Handling:** React Hook Form, Yup
- **Deployment:** Vercel

---

# 🇹🇷 Türkçe Sürüm

Psychologists.Services, kullanıcıların profesyonel psikologlar bulmasına ve randevu almasına yardımcı olmak için tasarlanmış modern, mobil uyumlu bir web uygulamasıdır. Psikologlara göz atma, çeşitli kriterlere göre filtreleme, favorilere ekleme ve kullanıcı yetkilendirme gibi konularda kusursuz bir kullanıcı deneyimi sunar.

## 🚀 Canlı Demo

[Projeyi Vercel Üzerinde İnceleyin](psychologists-services-black.vercel.app)

## 📖 Proje Özeti

Bu proje, belirli bir teknik şartnameye ve Figma tasarım maketine dayanarak bir "pet proje" (geliştirme amaçlı örnek proje) olarak inşa edilmiştir. Uygulama 3 ana sayfadan oluşur:

- **Home (Ana Sayfa):** Kullanıcıyı karşılayan ve harekete geçirici mesaj (CTA) içeren giriş sayfası.
- **Psychologists (Psikologlar):** Gelişmiş sıralama ve filtreleme (Alfabetik, Fiyat, Popülerlik) özelliklerine sahip kapsamlı psikolog listesi. "Daha Fazla Yükle" (Load More) pagination sistemi içerir.
- **Favorites (Favoriler):** Sadece giriş yapmış yetkili kullanıcıların favoriye ekledikleri psikologları görebildiği özel sayfa.

## ✨ Temel Özellikler

- **Kullanıcı Yetkilendirme (Auth):** Firebase Authentication kullanılarak güvenli Kayıt Olma, Giriş Yapma ve Çıkış Yapma özellikleri.
- **Gerçek Zamanlı Veritabanı:** Psikolog verileri Firebase Realtime Database'den asenkron olarak çekilir.
- **Gelişmiş Filtreleme:** Gereksiz API istekleri atmadan listeyi dinamik olarak sıralayan özel yapım (custom) açılır menü.
- **State (Durum) Yönetimi:** Global kullanıcı durum yönetimi için React Context API kullanılmıştır.
- **Form Doğrulama:** Tüm modal pencereler (Kayıt, Giriş, Randevu) `react-hook-form` ve `yup` kullanılarak katı kurallarla doğrulanır.
- **Kalıcı Favoriler:** Kullanıcılar, her hesaba özel atanan `localStorage` (UID) sayesinde oturum kapatsa bile favorilerini kaybetmez.
- **Responsive (Duyarlı) Tasarım:** Mobil, tablet ve masaüstü ekranlar (320px - 1440px) için tamamen optimize edilmiştir.
- **CSS Modülleri:** CSS çakışmalarını önlemek için ölçeklenebilir CSS Modülleri (`.module.css`) kullanılmıştır.

## 🛠️ Kullanılan Teknolojiler

- **Ön Yüz (Frontend):** React, React Router, Vite
- **Stil (Styling):** CSS Modülleri
- **Arka Yüz (Backend) & Yetkilendirme:** Firebase (Authentication, Realtime DB)
- **Form Yönetimi:** React Hook Form, Yup
- **Canlıya Alma (Deploy):** Vercel
