VATM - file đã điền Firebase Web config

1. Dùng file VATM_index_da_gan_Firebase.html làm index.html ở thư mục gốc repository.
2. Đổi tên file thành index.html khi tải lên GitHub (hoặc thay index.html hiện có).
3. Cấu hình này chỉ điền thông tin kết nối dự án. Trước khi đưa dữ liệu thật lên, cần thiết lập Firebase Authentication và Database Rules bảo vệ dữ liệu.
4. Bản app hiện tại có đăng nhập/phân quyền xử lý ở trình duyệt và dữ liệu demo. Không dùng để lưu hồ sơ cá nhân thật cho đến khi phần xác thực/phân quyền được chuyển sang cơ chế tin cậy phía máy chủ.
5. Không bật quyền đọc/ghi công khai cho Realtime Database.
