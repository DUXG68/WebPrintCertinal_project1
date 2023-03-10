Project 1
Sinh viên: Đặng Danh Dũng
Giáo viên hướng dẫn: Nguyễn Đức Tiến


# Dự án thiết kế certificate

Project là sự kết hợp của react và typescrips cộng với boottrap.

## Hướng dẫn cách chạy

### Cài đặt node.js và npm

Để chạy dự án chúng ta cần cài đặt node.js để có thể chạy các câu lệnh npm
npm (Node Package Manager): npm là trình quản lý gói (package manager) đi kèm với Node.js, giúp bạn quản lý và cài đặt các thư viện, thực thi và các tệp tin liên quan đến dự án.
.Truy cập trang web của Node.js tại địa chỉ https://nodejs.org/.
.Nhấp vào nút "Download" để tải về phiên bản mới nhất của Node.js.
.Chạy tập tin cài đặt đã tải về và làm theo hướng dẫn của trình cài đặt.
.Sau khi cài đặt hoàn tất, bạn có thể kiểm tra phiên bản Node.js và npm bằng câu lệnh sau trong Command Prompt hoặc Terminal:
node -v
npm -v

**Dùng các câu lệnh được liệt kê ở dưới để chạy trong terminal.

### 'npm install'

Dùng câu lệnh này để  cài đặt tất cả các gói cần thiết được liệt kê trong tệp "package.json" của dự án.

### 'npm start'

Để chạy dự án ở máy local chúng ta dùng câu lệnh này.
Dự án sẽ được chạy ở link [http://localhost:3000](http://localhost:3000) trong trình duyệt.
Dự án sẽ được reload nếu như chúng ta chỉnh sửa ở mã nguồn.

### Kết thúc

Ta dùng tổ hợp phím 'Ctrl + c' để kết thúc chương trình

## Cấu trúc của dự án

### Tệp node_modules

Dùng để lưu trữ các gới cần thiết được liệt kê trong tệp "package.json" của dự án. Khi chạy câu lệnh 'npm install' thì tệp sẽ được tạo.

### Tệp src

Dùng để lưu trữ mã nguồn của dự án.

#### Tệp css

Dùng để lưu trữ mã nguồn .css của dự án:
-App.css lưu css của các phần của dự án.
-Certificate lưu css của certificate.

#### Tệp img

Lưu trữ cấu trúc gốc của certificate, dùng bằng các file ảnh để làm background.

#### App.tsx

Chứa các hàm xử lý input và cấu trúc của form điền input

#### Certificate.tsx

Lưu trữ cách thiết kế của certificate và các hàm để xử lý khi print certificate

#### index.tsx

Dùng để render dự án.

#### datajson.json

Lưu trữ các giá trị tọa độ, font-size của các thành phần họ tên, lời nhận xét và ngày tháng

***Dự án khá thành công khi hoàn thành được hầu hết các chức năng yêu cầu. Đã tách riêng thiết kế của certificate để dễ dàng thêm các certificate khác nếu muốn.




