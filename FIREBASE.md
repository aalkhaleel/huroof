# Firebase Realtime

استخدم Firebase Realtime Database لتحديث شاشة المتسابقين مباشرة بدون polling.

## خطوات الإعداد

1. أنشئ مشروع Firebase من لوحة Firebase.
2. فعّل Realtime Database.
3. من إعدادات المشروع، انسخ إعدادات تطبيق الويب.
4. ضع القيم داخل `firebase-config.js`.
5. انشر الملفات على Vercel.

مثال:

```js
window.HUROOF_FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  appId: "1:...",
};
```

## قواعد قاعدة البيانات

هذه القواعد مناسبة للتشغيل السريع برمز غرفة من 6 أرقام:

```json
{
  "rules": {
    "rooms": {
      "$room": {
        ".read": "$room.matches(/^\\d{6}$/)",
        ".write": "$room.matches(/^\\d{6}$/)"
      }
    }
  }
}
```

ملاحظة: رمز الغرفة هو حماية بسيطة مناسبة للمسابقة المباشرة. إذا احتجت حماية أقوى لاحقا، أضف Firebase Auth أو رمز مقدم خاص بالتحكم.
