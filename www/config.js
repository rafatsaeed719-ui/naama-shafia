// ===== إعدادات برنامج النعمة الشافية =====
// لو سبت firebase = null البرنامج هيشتغل "نسخة تجريبية" والبيانات بتتحفظ على الجهاز بس.
window.NAAMA_CONFIG = {
  // الصق هنا إعدادات Firebase (Project settings > Your apps > Web app > Config)
  firebase: {
    apiKey: "AIzaSyAjb_9UXJefpXFCtutERUOZBjvJYiiw_lU",
    authDomain: "naama-shafia.firebaseapp.com",
    projectId: "naama-shafia",
    storageBucket: "naama-shafia.firebasestorage.app",
    messagingSenderId: "339175485803",
    appId: "1:339175485803:web:0916126ecd434d680e5c2e"
  },

  // Cloudinary لرفع الصور والفيديوهات (Upload preset لازم يكون Unsigned)
  cloudinary: { cloudName: "zbkqpekr", uploadPreset: "soc_upload", folder: "naama" },

  // المدير العام: يدخل برقم التليفون ده
  adminPhones: ["01207760898"],

  // لينك تحميل البرنامج (بيتبعت في دعوة الخدام)
  publicUrl: "https://github.com/rafatsaeed719-ui/naama-shafia/releases/latest/download/NaamaShafia.apk",
  facebook: "https://www.facebook.com/share/1G9xELWySL/",
  developerSite: "https://rafatsaeed.com"
};
