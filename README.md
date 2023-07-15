# Hướng dẫn sử dụng

Đoạn mã này được sử dụng để xử lý các hình ảnh và tệp âm thanh để tạo video với logo. Nó sử dụng thư viện FFmpeg và gói Fluent-FFmpeg để thực hiện quá trình chuyển đổi và chỉnh sửa video.

## Yêu cầu

Trước khi chạy đoạn mã này, hãy đảm bảo bạn đã cài đặt các yêu cầu sau:

- [Node.js](https://nodejs.org) (phiên bản 10 trở lên)
- [FFmpeg](https://ffmpeg.org) (đảm bảo rằng lệnh `ffmpeg` có sẵn trong đường dẫn của hệ thống)

## Cài đặt

Để cài đặt các gói Node.js cần thiết, chạy lệnh sau trong terminal:

```bash
yarn add ffmpeg-static fluent-ffmpeg fs
```

## Cách sử dụng

1. Đặt các tệp hình ảnh đầu vào (định dạng JPEG) vào thư mục `inputs/` và đặt tên tuần tự là `1.jpg`, `2.jpg`, v.v.
2. Đặt các tệp âm thanh tương ứng (định dạng MP3) vào thư mục `inputs/` và đặt tên tuần tự là `1.mp3`, `2.mp3`, v.v.
3. Tùy chọn: cung cấp một tệp hình ảnh logo dưới định dạng PNG có tên `watermark.png` và đặt nó trong thư mục `inputs/`.
4. Mở terminal hoặc command prompt và di chuyển đến thư mục chứa đoạn mã.
5. Chạy đoạn mã bằng lệnh sau:

```bash
node index.js
```

Đoạn mã sẽ xử lý từng tệp hình ảnh và tạo ra các tệp video tương ứng trong thư mục `outputs/`. Video sẽ bao gồm hình ảnh logo được cung cấp, được tỷ lệ lại thành kích thước 500x500 pixel và được đặt ở tọa độ (10, 20) so với góc trên bên trái của video. Thời lượng video sẽ được đặt là 15 giây.

## Kết quả

Trong quá trình chạy đoạn mã, nó sẽ hiển thị các logs để chỉ thị tiến trình và trạng thái của quá trình tạo video. Các video được tạo thành công sẽ được ghi nhật ký dưới dạng "Tạo video thành công [number]!", trong khi bất kỳ lỗi nào gặp phải trong quá trình sẽ được ghi nhật ký dưới dạng "Lỗi khi tạo video [number]:" tiếp theo là thông báo lỗi.

Nếu một tệp hình ảnh không tồn tại cho một số tuần tự cụ thể, một thông báo log sẽ được hiển thị là "Không tìm thấy hình ảnh [number]".

Các video đầu ra sẽ được lưu trong thư mục `outputs/` với tên tệp theo định dạng `output[number].mp4`, tương ứng với các tệp hình ảnh và âm thanh đầu vào.

## Giấy phép

Đoạn mã này được phát hành theo giấy phép [MIT License](LICENSE).
