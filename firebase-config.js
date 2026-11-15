// MotoSpotter Flight Director V3
// Firebase Console > Project settings > Your apps > Web app > SDK setup and configuration
// Buradaki ORNEK_DEGER alanlarini kendi Firebase web uygulamasi config bilgileriyle degistirin.
// Bu dosyaya sifre, servis hesabi anahtari veya gizli anahtar koymayin.
export const firebaseConfig = {
  apiKey: "ORNEK_DEGER",
  authDomain: "ORNEK_DEGER",
  databaseURL: "ORNEK_DEGER",
  projectId: "ORNEK_DEGER",
  appId: "ORNEK_DEGER"
};

export const firebaseReady =
  Object.values(firebaseConfig).every(v => typeof v === "string" && v.length > 6 && !v.includes("ORNEK_DEGER"));
