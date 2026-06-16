# نشر مسابقة حروف على Vercel

## الطريقة

1. ارفع هذا المجلد إلى مستودع GitHub.
2. افتح Vercel واختر Add New Project.
3. اختر المستودع ثم Import.
4. اجعل Framework Preset = Other.
5. اترك Build Command فارغًا.
6. اترك Output Directory فارغًا أو اجعله `.`.
7. اضغط Deploy.

## مهم لتشغيل المقدم والمتسابقين على أجهزة مختلفة

Vercel لا يشغل `server.cjs` كسيرفر دائم مثل التشغيل المحلي. لذلك أضيفت API Functions داخل مجلد `api`.

حتى تعمل المزامنة بثبات بين الأجهزة على Vercel، أضف قاعدة Redis من Upstash أو Vercel KV، ثم ضع هذه المتغيرات في Vercel Project Settings > Environment Variables:

```text
KV_REST_API_URL
KV_REST_API_TOKEN
```

أو:

```text
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

بعد إضافة المتغيرات، اعمل Redeploy.

## التشغيل المحلي

للتشغيل على نفس الشبكة محليًا، استخدم:

```text
node server.cjs
```

أو شغّل `run-server.bat`.
