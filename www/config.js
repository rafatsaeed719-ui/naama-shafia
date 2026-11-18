// ===== إعدادات برنامج النعمة الشافية =====
// لو سبت firebase = null البرنامج هيشتغل "نسخة تجريبية" والبيانات بتتحفظ على الجهاز بس.
window.NAAMA_CONFIG = {
  // الصق هنا إعدادات Firebase (Project settings > Your apps > Web app > Config)
  firebase: null,

  // Cloudinary لرفع الصور والفيديوهات (Upload preset لازم يكون Unsigned)
  cloudinary: { cloudName: "zbkqpekr", uploadPreset: "soc_upload", folder: "naama" },

  // المدير العام: يدخل برقم التليفون ده
  adminPhones: ["01207760898"],

  // عنوان البرنامج على الإنترنت (بيتبعت في دعوة الخدام)
  publicUrl: "https://rafatsaeed719-ui.github.io/naama-shafia/",
  facebook: "https://www.facebook.com/share/1G9xELWySL/",
  developerSite: "https://rafatsaeed.com"
};
