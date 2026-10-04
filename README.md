# VATM — Hồ sơ xuất nhập cảnh Đảng viên

## Build APK trên GitHub Actions

1. Tạo repo GitHub, đẩy toàn bộ thư mục này lên nhánh `main` hoặc `master`.
2. Vào tab **Actions** → workflow **Build Android APK** → **Run workflow** (hoặc push code).
3. Khi build xong, mở job → **Artifacts** → tải `VATM-hoso-debug` (file `app-debug.apk`).

### Cấu trúc bắt buộc

```
├── index.html
├── icons/
├── android-res/          (icon launcher Android)
└── .github/workflows/build-apk.yml
```

### Lưu ý

- Workflow tự cài Node 20, Java 17, Android SDK, Capacitor 6.
- Build **debug APK** (cài trực tiếp, không cần ký release).
- Nếu fail: tải artifact `gradle-build-log` để xem lỗi chi tiết.
