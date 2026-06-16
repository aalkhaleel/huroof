import sys, requests, re
sys.stdout.reconfigure(encoding="utf-8")

r = requests.get("https://mujtahidacademy.com/qudrat.html",
                 headers={"User-Agent": "Mozilla/5.0"})

# ابحث عن ملفات JS وJSON وAPI
files = re.findall(r'(?:src|href)=["\']([^"\']+\.(?:js|json|php))["\']', r.text)
print("Files found:")
for f in list(set(files)):
    print(" ", f)

print()
apis = re.findall(r'["\']([^"\']*(?:api|data|question|quiz|qudrat)[^"\']*)["\']', r.text, re.IGNORECASE)
print("API/data URLs:")
for a in list(set(apis))[:30]:
    print(" ", a)

print()
# طباعة الـ HTML الكامل لفحصه
print("Total HTML size:", len(r.text), "chars")
# ابحث عن Firebase أو أي backend
if "firebase" in r.text.lower():
    print("Firebase found!")
if "supabase" in r.text.lower():
    print("Supabase found!")
if "firestore" in r.text.lower():
    print("Firestore found!")
